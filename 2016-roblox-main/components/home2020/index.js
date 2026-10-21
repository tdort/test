// 2020 home page: greeting, friends carousel (round avatars), then game sort rows. Uses the real 2020 game card markup.
import React, { useEffect, useRef, useState } from 'react';
import { getFriends } from '../../services/friends';
import { getGameList, getGameSorts } from '../../services/games';
import { multiGetUniverseIcons } from '../../services/thumbnails';
import AuthenticationStore from '../../stores/authentication';
import DashboardStore from '../myDashboard/stores/dashboardStore';
import PlayerImage from '../playerImage';
import { Row } from '../games2020';

const CSS = `
.home20{padding:8px 0 40px}
.home20-hello{font-size:28px;font-weight:800;margin:6px 0 14px}
.home20-fhead{display:flex;justify-content:space-between;align-items:baseline;margin:6px 0 10px}
.home20-fhead h3{margin:0;font-size:20px;font-weight:700}
.home20-fhead a{font-size:13px;font-weight:600;opacity:.7}
.home20-friends{display:flex;gap:16px;overflow-x:auto;padding:4px 2px 14px;scrollbar-width:none}
.home20-friends::-webkit-scrollbar{display:none}
.home20-friend{flex:0 0 auto;width:84px;text-align:center;text-decoration:none!important;color:inherit}
.home20-fav{position:relative;width:84px;height:84px;border-radius:50%;overflow:hidden;background:rgba(128,128,128,.25)}
.home20-fav>*{width:100%!important;height:100%!important}
.home20-fav img{width:100%;height:100%;object-fit:cover}
.home20-dot{position:absolute;right:2px;bottom:2px;width:16px;height:16px;border-radius:50%;border:2px solid var(--home20-bg,#fff);background:#00b06f}
.home20-name{margin:6px 0 0;font-size:13px;font-weight:600;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
.home20-sub{margin:0;font-size:12px;opacity:.65;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
.home20-empty{opacity:.7;font-size:14px;margin:4px 0 12px}
`;

const Home2020 = () => {
  const auth = AuthenticationStore.useContainer();
  const { friends, setFriends, friendStatus } = DashboardStore.useContainer();
  const [sorts, setSorts] = useState(null);
  const [icons, setIcons] = useState({});
  const [friendsLoaded, setFriendsLoaded] = useState(false);

  useEffect(() => {
    if (!auth.userId) return;
    getFriends({ userId: auth.userId })
      .then(d => { if (d.length > 0) setFriends(d); })
      .catch(() => {})
      .finally(() => setFriendsLoaded(true));
  }, [auth.userId]);

  useEffect(() => {
    getGameSorts({ gameSortsContext: 'HomeSorts' }).then(res => {
      const list = [];
      const ids = [];
      return Promise.all(res.sorts.map(item => {
        list.push(item);
        return getGameList({ sortToken: item.token, limit: 100, keyword: '' }).then(g => {
          item.games = g.games;
          g.games.forEach(v => ids.push(v.universeId));
        }).catch(() => { item.games = []; });
      })).then(() => {
        setSorts(list);
        if (!ids.length) return;
        return multiGetUniverseIcons({ universeIds: ids, size: '150x150' }).then(ic => {
          const o = {};
          for (const k of ic) o[k.targetId] = k.imageUrl;
          setIcons(o);
        });
      });
    }).catch(() => setSorts([]));
  }, []);

  if (!auth.userId) return null;
  return (
    <div className='content' id='content'>
      <style>{CSS}</style>
      <div className='container-main home20'>
        <h1 className='home20-hello'>Hello, {auth.username}!</h1>
        {friends && friends.length > 0 ? (
          <>
            <div className='home20-fhead'>
              <h3>Friends ({friends.length})</h3>
              <a href='/users/friends'>See All</a>
            </div>
            <div className='home20-friends'>
              {friends.map(f => {
                const st = friendStatus && friendStatus[f.id];
                const online = st && st.userPresenceType && st.userPresenceType > 0;
                return (
                  <a className='home20-friend' key={f.id} href={`/users/${f.id}/profile`} title={f.name}>
                    <div className='home20-fav'>
                      <PlayerImage id={f.id} name={f.name} useHeadshot={true} width={84} height={84} />
                      {online ? <span className='home20-dot' /> : null}
                    </div>
                    <p className='home20-name'>{f.name}</p>
                    {st && st.lastLocation ? <p className='home20-sub'>{st.lastLocation}</p> : null}
                  </a>
                );
              })}
            </div>
          </>
        ) : (friendsLoaded ? <p className='home20-empty'>Add friends to see them here.</p> : null)}
        {(sorts || []).map(s => (s.games && s.games.length ? <Row key={s.token} title={s.displayName} games={s.games} icons={icons} sortId={s.token} /> : null))}
      </div>
    </div>
  );
};

export default Home2020;
