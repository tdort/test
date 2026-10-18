// Modern dark game page (reference screenshot): thumbnail left, title/creator/play/vote right, About / Store / Servers tabs.
import React, { useEffect, useState } from 'react';
import dayjs from 'dayjs';
import GameDetailsStore from '../gameDetails/stores/gameDetailsStore';
import GameServers from '../gameDetails/components/gameServers';
import Passess from '../catalogDetailsPage/components/passess';
import PlayButton from '../gameDetails/components/playButton';
import AuthenticationStore from '../../stores/authentication';
import { multiGetGameVotes, voteOnGame } from '../../services/games';
import { multiGetAssetThumbnails } from '../../services/thumbnails';
import { getGameMedia } from '../../services/games';

const CSS = `
.gd20{background:#232527;color:#fff;padding:20px 0 40px;min-height:600px}
.gd20 a{color:#fff}
.gd20-wrap{max-width:1000px;margin:0 auto;padding:0 16px}
.gd20-top{display:flex;gap:20px;flex-wrap:wrap}
.gd20-thumb{flex:1 1 560px;min-width:0}
.gd20-thumb img{width:100%;aspect-ratio:16/9;object-fit:cover;border-radius:8px;display:block;background:#393b3d}
.gd20-info{flex:0 1 330px;min-width:260px;position:relative;display:flex;flex-direction:column}
.gd20-title{font-size:32px;font-weight:800;line-height:1.15;margin:0 24px 6px 0}
.gd20-by{font-size:14px;color:#d1d3d6;margin:0}
.gd20-by a{font-weight:600}
.gd20-age{font-size:14px;color:#bdbebe;margin:6px 0 0}
.gd20-dots{position:absolute;right:0;top:4px;color:#bdbebe;letter-spacing:2px;font-weight:700;cursor:pointer}
.gd20-play{margin-top:auto}
.gd20-play .row{margin:0}.gd20-play .col-12{max-width:none!important;padding:0}
.gd20-play button,.gd20-play .btn,.gd20-play a{width:100%!important;max-width:none!important;background:#00b06f!important;border:0!important;border-radius:8px!important;height:42px;color:#fff!important;font-size:0!important;position:relative}
.gd20-play button:after{content:"";position:absolute;left:50%;top:50%;margin:-10px 0 0 -8px;border-left:18px solid #fff;border-top:11px solid transparent;border-bottom:11px solid transparent}
.gd20-actions{display:flex;justify-content:space-between;margin-top:14px}
.gd20-act{background:none;border:0;color:#d1d3d6;font-size:11px;text-align:center;width:25%;padding:0;cursor:pointer}
.gd20-act svg{display:block;margin:0 auto 4px;width:22px;height:22px;stroke:#d1d3d6;fill:none;stroke-width:1.6}
.gd20-act span{display:block;font-size:11px;font-weight:600}
.gd20-tabs{display:flex;background:#393b3d;margin-top:24px;border-radius:2px}
.gd20-tab{flex:1;text-align:center;padding:11px 0 9px;font-size:14px;font-weight:700;cursor:pointer;border-bottom:3px solid transparent;color:#d1d3d6}
.gd20-tab.on{border-bottom-color:#fff;color:#fff}
.gd20 h2{font-size:20px;font-weight:700;margin:22px 0 10px}
.gd20-desc{white-space:pre-wrap;color:#d1d3d6;font-size:15px;line-height:1.5;margin:0}
.gd20-chip{display:inline-block;background:#111214;border-radius:8px;padding:12px 14px;margin-top:20px;font-size:14px;color:#d1d3d6}
.gd20-chip b{color:#fff;margin-right:6px}
.gd20-stats{display:flex;border-top:1px solid #4b4d50;border-bottom:1px solid #4b4d50;margin-top:28px;padding:12px 0}
.gd20-stat{flex:1;text-align:center;font-size:11px;color:#bdbebe}
.gd20-stat b{display:block;color:#fff;font-weight:600;margin-top:10px;font-size:11px}
.gd20-report{text-align:right;margin-top:26px;font-size:12px}.gd20-report a{color:#e04a3f}
.gd20-pad{margin-top:16px}
`;

const Icon = ({ d, children }) => <svg viewBox="0 0 24 24">{children || <path d={d} />}</svg>;

const GameDetails2020 = ({ details }) => {
  const store = GameDetailsStore.useContainer();
  const auth = AuthenticationStore.useContainer();
  const [tab, setTab] = useState('about');
  const [img, setImg] = useState(null);
  const [votes, setVotes] = useState(null);
  const u = store.universeDetails;

  useEffect(() => {
    if (!u || !u.id) return;
    getGameMedia({ universeId: u.id }).then(media => {
      const ids = media.filter(v => v.assetType === 'Image').map(v => v.imageId);
      return multiGetAssetThumbnails({ assetIds: ids.length ? ids : [u.rootPlaceId] });
    }).then(t => t && t[0] && setImg(t[0].imageUrl)).catch(() => {});
  }, [u]);

  const loadVotes = () => u && u.id && multiGetGameVotes({ universeIds: [u.id] }).then(d => setVotes(d[0])).catch(() => {});
  useEffect(() => { loadVotes(); }, [u]);
  const vote = up => u && voteOnGame({ universeId: u.id, isUpvote: up }).then(loadVotes).catch(() => {});

  const stat = (n, v) => <div className='gd20-stat' key={n}>{n}<b>{v}</b></div>;
  const num = v => (v === undefined || v === null ? '-' : Number(v).toLocaleString());

  return (
    <div className='content' id='content' style={{ background: '#232527', paddingTop: 0 }}>
      <style>{CSS}</style>
      <div className='gd20'><div className='gd20-wrap'>
        <div className='gd20-top'>
          <div className='gd20-thumb'>{img ? <img src={img} alt='' /> : <div style={{ aspectRatio: '16/9', background: '#393b3d', borderRadius: 8 }} />}</div>
          <div className='gd20-info'>
            <span className='gd20-dots'>•••</span>
            <h1 className='gd20-title'>{details.name}</h1>
            <p className='gd20-by'>By <a href={details.creatorType === 'Group' ? `/groups/${details.creatorTargetId}/--` : `/users/${details.creatorTargetId}/profile`}>{details.creatorName}</a></p>
            <p className='gd20-age'>All Ages</p>
            <div className='gd20-play'><PlayButton placeId={details.id} /></div>
            <div className='gd20-actions'>
              <button className='gd20-act'><Icon><path d='M12 3l2.7 5.6 6.1.9-4.4 4.3 1 6.1L12 17l-5.4 2.9 1-6.1L3.2 9.5l6.1-.9z' /></Icon><span>Favorite</span></button>
              <button className='gd20-act'><Icon><path d='M5 5a14 14 0 0114 14M5 11a8 8 0 018 8' /><circle cx='6' cy='18' r='1.5' /></Icon><span>Follow</span></button>
              <button className='gd20-act' onClick={() => vote(true)}><Icon><path d='M7 10v10H3V10zM7 10l4-7c2 0 3 1 3 3l-1 4h6a2 2 0 012 2l-2 7a2 2 0 01-2 2H7' /></Icon><span>{votes ? votes.upVotes : 0}</span></button>
              <button className='gd20-act' onClick={() => vote(false)}><Icon><path d='M7 14V4H3v10zM7 14l4 7c2 0 3-1 3-3l-1-4h6a2 2 0 002-2l-2-7a2 2 0 00-2-2H7' /></Icon><span>{votes ? votes.downVotes : 0}</span></button>
            </div>
          </div>
        </div>

        <div className='gd20-tabs'>
          {[['about', 'About'], ['store', 'Store'], ['servers', 'Servers']].map(([k, l]) =>
            <div key={k} className={'gd20-tab' + (tab === k ? ' on' : '')} onClick={() => setTab(k)}>{l}</div>)}
        </div>

        {tab === 'about' && <>
          <h2>Description</h2>
          <p className='gd20-desc'>{details.description?.trim() || 'No description available'}</p>
          <div className='gd20-chip'><b>All Ages</b> Suitable for everyone</div>
          <div className='gd20-stats'>
            {stat('Active', num(u && u.playing))}
            {stat('Favorites', num(u && u.favoritedCount))}
            {stat('Visits', num(u && u.visits))}
            {stat('Created', u ? dayjs(u.created).format('M/DD/YYYY') : '-')}
            {stat('Updated', u ? dayjs(u.updated).format('M/DD/YYYY') : '-')}
            {stat('Server Size', num(u && u.maxPlayers))}
            {stat('Genre', (u && u.genre) || '-')}
            {stat('Allowed Gear', '▫')}
          </div>
          <div className='gd20-report'><a href={`/abusereport/asset?id=${details.id}`}>Report Abuse</a></div>
        </>}
        {tab === 'store' && <div className='gd20-pad'><Passess assetId={details.id} assetType={34} /></div>}
        {tab === 'servers' && <div className='gd20-pad'><GameServers /></div>}
      </div></div>
    </div>
  );
};

export default GameDetails2020;
