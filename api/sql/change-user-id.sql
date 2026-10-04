-- Change a user's id.  BACK UP THE DATABASE FIRST (pg_dump), and stop the website while running this.
-- Edit old_id / new_id below, then run the whole thing in psql / pgAdmin.
-- Needs a superuser (the "postgres" user) because it temporarily disables foreign key triggers.

BEGIN;
SET LOCAL session_replication_role = replica;   -- turns off FK checks for this transaction only

DO $$
DECLARE
    old_id bigint := 2500;    -- <-- the user's current id
    new_id bigint := 100;     -- <-- the id you want (must not exist yet)
    r record;
    n bigint;
BEGIN
    IF NOT EXISTS (SELECT 1 FROM "user" WHERE id = old_id) THEN
        RAISE EXCEPTION 'user % does not exist', old_id;
    END IF;
    IF EXISTS (SELECT 1 FROM "user" WHERE id = new_id) THEN
        RAISE EXCEPTION 'user % already exists', new_id;
    END IF;

    -- every column that holds a user id
    FOR r IN
        SELECT c.table_name, c.column_name
        FROM information_schema.columns c
        JOIN information_schema.tables t
          ON t.table_schema = c.table_schema AND t.table_name = c.table_name AND t.table_type = 'BASE TABLE'
        WHERE c.table_schema = 'public'
          AND c.data_type IN ('bigint', 'integer')
          AND (
               c.column_name IN ('user_id', 'user_id_one', 'user_id_two', 'user_id_from', 'user_id_to',
                                 'user_id_who_is_following', 'user_id_being_followed', 'author_user_id',
                                 'seller_user_id', 'buyer_user_id', 'new_owner_user_id', 'locked_by_user_id',
                                 'fund_recipient_user_id', 'post_user_id', 'actor_id')
               OR (c.table_name = 'user' AND c.column_name = 'id')
          )
    LOOP
        EXECUTE format('UPDATE %I SET %I = $1 WHERE %I = $2', r.table_name, r.column_name, r.column_name)
            USING new_id, old_id;
        GET DIAGNOSTICS n = ROW_COUNT;
        IF n > 0 THEN RAISE NOTICE '%.%: % row(s)', r.table_name, r.column_name, n; END IF;
    END LOOP;

    -- assets created by the user (creator_type 1 = User, 2 = Group)
    UPDATE asset SET creator_id = new_id WHERE creator_type = 1 AND creator_id = old_id;
    GET DIAGNOSTICS n = ROW_COUNT;
    IF n > 0 THEN RAISE NOTICE 'asset.creator_id: % row(s)', n; END IF;
END $$;

COMMIT;

-- Afterwards: restart the website and flush Redis (cached users/sessions still use the old id), e.g.  redis-cli FLUSHALL
-- Also re-check other columns that may hold user ids but are not covered above:
--   SELECT table_name, column_name FROM information_schema.columns
--   WHERE table_schema='public' AND column_name LIKE '%user%' OR column_name LIKE '%author%' OR column_name LIKE '%owner%';
