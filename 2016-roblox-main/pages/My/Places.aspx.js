import React, { useEffect, useState } from "react";
import { createUseStyles } from "react-jss";
import AuthenticationStore from "../../stores/authentication";
import { getUserGames, getGameUrl } from "../../services/games";

const useStyles = createUseStyles({
  wrap: { background: '#fff', padding: '12px 16px', minHeight: 300 },
  title: { margin: '0 0 12px', fontSize: 24, fontWeight: 400 },
  table: { width: '100%', borderCollapse: 'collapse' },
  th: { textAlign: 'left', borderBottom: '2px solid #ccc', padding: '6px 8px', fontSize: 13, color: '#555' },
  td: { borderBottom: '1px solid #e3e3e3', padding: '8px', fontSize: 14 },
  link: { color: '#0055b3', marginRight: 14, textDecoration: 'none', cursor: 'pointer' },
  muted: { color: '#777' },
});

// Studio's built-in browser opens /My/Places.aspx as its start page.
const MyPlacesPage = () => {
  const s = useStyles();
  const auth = AuthenticationStore.useContainer();
  const [games, setGames] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!auth.userId) return;
    let cancelled = false;
    const all = [];
    const load = (cursor) => getUserGames({ userId: auth.userId, cursor }).then(d => {
      all.push(...d.data);
      if (d.nextPageCursor && all.length < 200) return load(d.nextPageCursor);
    });
    load('').then(() => { if (!cancelled) setGames(all); })
      .catch(() => { if (!cancelled) setError('Could not load your places.'); });
    return () => { cancelled = true; };
  }, [auth.userId]);

  return <div className={s.wrap}>
    <h2 className={s.title}>My Places</h2>
    {error && <p>{error}</p>}
    {!error && games === null && <p className={s.muted}>Loading...</p>}
    {games && games.length === 0 && <p className={s.muted}>You have not created any places yet. Use <a className={s.link} href='/develop'>Develop</a> to create one.</p>}
    {games && games.length > 0 && <table className={s.table}>
      <thead>
        <tr><th className={s.th}>Name</th><th className={s.th}>Place ID</th><th className={s.th}></th></tr>
      </thead>
      <tbody>
        {games.map(g => <tr key={g.id}>
          <td className={s.td}>{g.name}</td>
          <td className={s.td}>{g.rootPlace.id}</td>
          <td className={s.td}>
            <a className={s.link} href={`/places/${g.rootPlace.id}/update`}>Settings</a>
            <a className={s.link} href={getGameUrl({ placeId: g.rootPlace.id, name: g.name })}>Page</a>
          </td>
        </tr>)}
      </tbody>
    </table>}
    <p className={s.muted} style={{ marginTop: 16 }}>
      <a className={s.link} href='/develop'>Open Develop</a>
      <a className={s.link} href='/home'>Home</a>
    </p>
  </div>
}

MyPlacesPage.getInitialProps = () => ({ title: 'My Places - ROBLOX' });

export default MyPlacesPage;
