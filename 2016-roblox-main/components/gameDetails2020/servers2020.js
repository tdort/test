// 2020-style "Other Servers" panel: player count + outlined Join on the left, round avatar grid on the right.
import { useEffect } from 'react';
import { getServers, launchGame } from '../../services/games';
import PlayerImage from '../playerImage';
import GameDetailsStore from '../gameDetails/stores/gameDetailsStore';

export const SERVERS_CSS = `
.gd20-srv{background:var(--bar);border-radius:10px;padding:14px;margin-top:4px}
.gd20-srv h3{font-size:18px;font-weight:700;margin:0 0 12px;color:var(--fg)}
.gd20-srv-row{display:flex;gap:14px;border:1px solid var(--line);border-radius:4px;padding:10px;margin-bottom:10px;position:relative}
.gd20-srv-l{flex:0 0 150px;border-right:1px solid var(--line);padding-right:12px;color:var(--mut);font-size:14px}
.gd20-srv-l button{display:block;width:100%;margin-top:8px;background:none;color:var(--fg);border:1px solid var(--dim);border-radius:6px;font-size:12px;padding:2px 0;cursor:pointer}
.gd20-srv-l button:disabled{opacity:.4;cursor:default}
.gd20-srv-p{display:flex;flex-wrap:wrap;gap:6px;flex:1;align-content:flex-start}
.gd20-srv-p>div{width:44px;height:44px;border-radius:50%;overflow:hidden;background:var(--line)}
.gd20-srv-p>div>*{width:100%!important;height:100%!important}
.gd20-srv-p img{width:100%;height:100%;object-fit:cover}
.gd20-srv-dots{position:absolute;right:8px;top:2px;color:var(--dim);letter-spacing:2px;font-weight:700;font-size:12px}
.gd20-srv-pager{display:flex;justify-content:center;align-items:center;gap:6px;color:var(--mut);font-size:13px;margin-top:6px}
.gd20-srv-pager span.b{display:inline-block;min-width:26px;text-align:center;padding:3px 0;background:var(--line);border-radius:4px;color:var(--dim)}
.gd20-srv-pager span.pg{display:inline-block;min-width:30px;text-align:center;padding:3px 6px;background:var(--fg);color:var(--bg);border-radius:4px}
.gd20-srv-empty{color:var(--mut);font-size:14px;padding:6px 2px}
@media(max-width:600px){.gd20-srv-row{flex-direction:column}.gd20-srv-l{flex:none;border-right:0;border-bottom:1px solid var(--line);padding:0 0 8px}}
`;

const Servers2020 = ({ banned }) => {
  const store = GameDetailsStore.useContainer();
  const placeId = store.details && store.details.id;
  const max = (store.universeDetails && store.universeDetails.maxPlayers) || 0;

  useEffect(() => {
    if (!placeId || store.servers) return;
    store.setServers({ loading: true, Collection: [] });
    getServers({ placeId, offset: 0 }).then(s => store.setServers({ ...s, loading: false, offset: 10 }))
      .catch(() => store.setServers({ Collection: [], loading: false }));
  }, [placeId]);

  const list = (store.servers && store.servers.Collection) || [];
  return <div className='gd20-srv'>
    <h3>Other Servers</h3>
    {list.length === 0 && <div className='gd20-srv-empty'>{store.servers && store.servers.loading ? 'Loading…' : 'Nobody is playing this game.'}</div>}
    {list.map(v => {
      const players = v.CurrentPlayers || [];
      return <div className='gd20-srv-row' key={v.Guid}>
        <span className='gd20-srv-dots'>•••</span>
        <div className='gd20-srv-l'>
          {players.length} of {max} players max
          <button disabled={banned} onClick={() => launchGame({ placeId, year: (store.placeDetails && store.placeDetails.year) || 2016 }).catch(e => alert(e.message))}>Join</button>
        </div>
        <div className='gd20-srv-p'>
          {players.map(p => <div key={p.Id} title={p.Username}><PlayerImage id={p.Id} name={p.Username} /></div>)}
        </div>
      </div>;
    })}
    <div className='gd20-srv-pager'><span className='b'>«</span><span className='b'>‹</span> Page <span className='pg'>1</span> of 1 <span className='b'>›</span><span className='b'>»</span></div>
  </div>;
};

export default Servers2020;
