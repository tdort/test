// Games page using Roblox's real 2020 markup (styled by /css/roblox2020/roblox2020.css).
import React, { useEffect, useRef, useState } from 'react';
import GamesPageStore from '../../stores/gamesPage';
import { getQueryParams } from '../../lib/getQueryParams';

const abbr = (n) => {
  n = Number(n) || 0;
  if (n >= 1e6) return (n / 1e6).toFixed(1).replace(/\.0$/, '') + 'M+';
  if (n >= 1e3) return (n / 1e3).toFixed(1).replace(/\.0$/, '') + 'K+';
  return String(n);
};

const Card = ({ g, icon }) => {
  const up = g.totalUpVotes || 0, down = g.totalDownVotes || 0;
  const pct = up + down > 0 ? Math.floor((up / (up + down)) * 100) + '%' : '--';
  return (
    <li className='list-item game-card game-tile' title={g.name}>
      <div className='game-card-container'>
        <a className='game-card-link' href={`/games/${g.placeId}/${encodeURIComponent((g.name || 'game').replace(/[^A-Za-z0-9]+/g, '-'))}`}>
          <div className='game-card-thumb-container'>
            <div className='game-card-thumb'>
              <span className='thumbnail-2d-container'>{icon ? <img src={icon} alt={g.name} /> : null}</span>
            </div>
          </div>
          <div className='game-card-name game-name-title' title={g.name}>{g.name}</div>
          <div className='game-card-info'>
            <span className='info-label icon-votes-gray' />
            <span className='info-label vote-percentage-label'>{pct}</span>
            <span className='info-label icon-playing-counts-gray' />
            <span className='info-label playing-counts-label' title={g.playerCount}>{abbr(g.playerCount)}</span>
          </div>
        </a>
      </div>
    </li>
  );
};

const Row = ({ title, games, icons, sortId }) => {
  const ref = useRef(null);
  const [edge, setEdge] = useState({ l: true, r: false });
  const upd = () => {
    const el = ref.current;
    if (el) setEdge({ l: el.scrollLeft <= 1, r: el.scrollLeft + el.clientWidth >= el.scrollWidth - 1 });
  };
  useEffect(upd, [games]);
  const go = (dir) => ref.current && ref.current.scrollBy({ left: dir * ref.current.clientWidth * 0.8, behavior: 'smooth' });
  return (
    <div className='game-sort-carousel-wrapper'>
      <div className='container-header'>
        <h3>{title}</h3>
        <a className='btn-more see-all-link-icon' href={`/games?SortFilter=${encodeURIComponent(sortId || '')}`} style={{ float: 'right' }}>See All</a>
      </div>
      <div className='horizontal-scroller' style={{ clear: 'both' }}>
        <a className={'scroller prev' + (edge.l ? ' disabled' : '')} style={{ left: -30, height: 'auto', bottom: 0 }} onClick={() => go(-1)}>
          <div className='arrow'><span className='icon-games-carousel-left' /></div>
        </a>
        <div className='game-carousel' ref={ref} onScroll={upd} style={{ overflowX: 'auto', overflowY: 'hidden', scrollbarWidth: 'none' }}>
          <ul className='game-cards' style={{ whiteSpace: 'nowrap' }}>
            {games ? games.map(g => <Card key={g.universeId} g={g} icon={icons && icons[g.universeId]} />) : null}
          </ul>
        </div>
        <a className={'scroller next' + (edge.r ? ' disabled' : '')} style={{ right: -30, height: 'auto', bottom: 0 }} onClick={() => go(1)}>
          <div className='arrow'><span className='icon-games-carousel-right' /></div>
        </a>
      </div>
    </div>
  );
};

const Games2020 = () => {
  const query = getQueryParams();
  const store = GamesPageStore.useContainer();

  useEffect(() => {
    if (query.keyword) store.setQuery(query.keyword);
    store.loadGames({ query: query.keyword, genreFilter: store.genreFilter });
  }, [store.genreFilter]);

  const grid = store.infiniteGamesGrid;
  const seen = {};
  return (
    <div className='content' id='content'>
      <div className='container-main'>
        <div className='games-list-container'>
          {grid ? (
            grid.games.length === 0 ? <p>No results.</p> : (
              <ul className='game-cards card-grid game-grid-container'>
                {grid.games.map(g => <Card key={g.universeId} g={g} icon={store.icons && store.icons[g.universeId]} />)}
              </ul>
            )
          ) : (
            (store.sorts || []).map(s => {
              if (seen[s.token]) return null;
              seen[s.token] = true;
              return <Row key={s.token} title={s.displayName} games={store.games && store.games[s.token]} icons={store.icons} sortId={s.token} />;
            })
          )}
        </div>
      </div>
    </div>
  );
};

export default Games2020;
