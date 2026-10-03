-- Run once on existing databases (schema.sql already includes these for fresh installs).
ALTER TABLE public.user_ban ADD COLUMN IF NOT EXISTS offensive_asset_id bigint;
ALTER TABLE public.moderation_user_ban ADD COLUMN IF NOT EXISTS offensive_asset_id bigint;
