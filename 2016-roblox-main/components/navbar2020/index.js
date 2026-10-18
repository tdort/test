// 2020 header using Roblox's real 2020 markup + classes (styled by /css/roblox2020/roblox2020.css).
import Link from 'next/link';
import Router from 'next/router';
import { useState, useEffect } from 'react';
import NavSidebar2020 from '../navSidebar2020';
import AuthenticationStore from '../../stores/authentication';
import LoginModalStore from '../../stores/loginModal';
import LoginModal from '../loginModal';
import { logout } from '../../services/auth';
import getFlag from '../../lib/getFlag';
import { abbreviateNumber } from '../../lib/numberUtils';

const guestLinks = [
  ['/games', 'Games'],
  ['/catalog', 'Avatar Shop'],
  ['/develop', 'Create'],
  ['/My/Money.aspx', 'Robux'],
];
const userLinks = [
  ['/games', 'Games'],
  ['/catalog', 'Catalog'],
  ['/develop', 'Create'],
  ['/My/Trades.aspx', 'Trade'],
];

const Menu = ({ cls, authed }) => (
  <ul className={`nav rbx-navbar ${cls}`}>
    {(authed ? userLinks : guestLinks).map(([href, label]) => (
      <li className='cursor-pointer' key={href}>
        <Link href={href}><a className='font-header-2 nav-menu-title text-header'>{label}</a></Link>
      </li>
    ))}
  </ul>
);

const Navbar2020 = () => {
  const auth = AuthenticationStore.useContainer();
  const loginModal = LoginModalStore.useContainer();
  const [q, setQ] = useState('');
  const [navOpen, setNavOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  useEffect(() => {
    if (!menuOpen) return;
    const close = (e) => { if (!e.target.closest || !e.target.closest('#navbar-settings')) setMenuOpen(false); };
    document.addEventListener('click', close);
    return () => document.removeEventListener('click', close);
  }, [menuOpen]);
  const authed = !!auth.isAuthenticated;
  useEffect(() => {
    document.body.classList.toggle('logged-in', authed);
    document.body.classList.toggle('no-gutter-ads', authed);
    return () => document.body.classList.remove('logged-in', 'no-gutter-ads');
  }, [authed]);

  const doLogin = (e) => {
    e.preventDefault();
    if (getFlag('requireLoginThroughCookie', false)) {
      if (getFlag('clientSideRenderingEnabled', false)) Router.push('/login');
      else window.location.href = '/login';
      return;
    }
    loginModal.setOpen(!loginModal.open);
  };
  const doLogout = async (e) => {
    e.preventDefault();
    try { await logout(); } catch (err) { console.error('logout err:', err); }
    window.location.href = '/';
  };
  const search = (e) => {
    e.preventDefault();
    Router.push(`/games?keyword=${encodeURIComponent(q)}`);
  };
  const fmt = (v) => (v === null || v === undefined ? '?' : abbreviateNumber(v));
  const robux = fmt(auth.robux);
  const tix = fmt(auth.tix);

  return (
    <>
    <div id='header' className='navbar-fixed-top rbx-header' role='navigation'>
      <div className='container-fluid'>
        {authed && (
          <div className='rbx-nav-collapse' onClick={() => setNavOpen(!navOpen)}><span className='icon-nav-menu' /></div>
        )}
        <div className='rbx-navbar-header'>
          <div className='navbar-header'>
            <Link href='/home'><a className='navbar-brand'><span className='icon-logo' /><span className='icon-logo-r' /></a></Link>
          </div>
        </div>
        <Menu authed={authed} cls='hidden-xs hidden-sm col-md-5 col-lg-4' />
        <div id='navbar-universal-search' className='navbar-left navbar-search col-xs-5 col-sm-6 col-md-2 col-lg-3' role='search'>
          <div className='input-group'>
            <form onSubmit={search}>
              <input id='navbar-search-input' className='form-control input-field' type='text' placeholder='Search'
                maxLength={120} autoComplete='off' value={q} onChange={(e) => setQ(e.target.value)} />
            </form>
            <div className='input-group-btn'>
              <button id='navbar-search-btn' className='input-addon-btn' type='button' onClick={search}><span className='icon-nav-search' /></button>
            </div>
          </div>
        </div>
        <div className='navbar-right rbx-navbar-right'>
          {auth.isPending ? null : auth.isAuthenticated ? (
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', height: 40 }}>
              <ul className='nav navbar-right rbx-navbar-right-nav' style={{ float: 'none', margin: 0, display: 'flex', alignItems: 'center', height: 40 }}>
                <li className='age-bracket-label' style={{ float: 'none', display: 'flex', alignItems: 'center', height: 40, padding: 0, margin: '0 8px 0 0' }}>
                  <Link href={`/users/${auth.userId}/profile`}><a className='text-header age-bracket-label-username font-caption-header' style={{ padding: 0, lineHeight: '40px' }}>{auth.username}:</a></Link>
                  <span className='age-bracket-label-age' style={{ lineHeight: '40px', margin: '0 0 0 4px', padding: 0 }}><span className='text-header font-caption-header' style={{ lineHeight: '40px' }}>13+</span></span>
                </li>
              </ul>
              <ul className='nav navbar-right rbx-navbar-icon-group' style={{ float: 'none', margin: 0, display: 'flex', alignItems: 'center', height: 40 }}>
                <li id='navbar-tix' className='navbar-icon-item' style={{ float: 'none', display: 'flex', alignItems: 'center', height: 40, padding: 0 }}>
                  <Link href='/My/Money.aspx'><a className='rbx-menu-item'><span className='icon-nav-tix' /><span className='rbx-text-navbar-right text-header'>{tix}</span></a></Link>
                </li>
                <li id='navbar-robux' className='navbar-icon-item' style={{ float: 'none', display: 'flex', alignItems: 'center', height: 40, padding: 0 }}>
                  <Link href='/My/Money.aspx'><a className='rbx-menu-item'><span id='nav-robux-icon'><span className='icon-robux-28x28' /></span><span className='rbx-text-navbar-right text-header'>{robux}</span></a></Link>
                </li>
                <li id='navbar-settings' className='navbar-icon-item' style={{ float: 'none', display: 'flex', alignItems: 'center', height: 40, padding: 0, position: 'relative' }}>
                  <a className='rbx-menu-item' href='#' onClick={(e) => { e.preventDefault(); setMenuOpen(!menuOpen); }}>
                    <span className='icon-nav-settings' id='nav-settings' />
                  </a>
                  {menuOpen && (
                    <div className='popover bottom' style={{ display: 'block', position: 'absolute', top: '100%', right: 0, left: 'auto', marginTop: 4, width: 125 }}>
                      <div className='popover-content'>
                        <ul id='settings-popover-menu' className='dropdown-menu' style={{ display: 'block', position: 'static', float: 'none', boxShadow: 'none', border: 0, margin: 0, padding: 0, minWidth: 0 }}>
                          <li style={{ float: 'none' }}><Link href='/My/Account'><a className='rbx-menu-item'>Settings</a></Link></li>
                          <li style={{ float: 'none' }}><a className='rbx-menu-item' href='#' onClick={doLogout}>Logout</a></li>
                        </ul>
                      </div>
                    </div>
                  )}
                </li>
              </ul>
            </div>
          ) : (
            <ul className='nav navbar-right rbx-navbar-right-nav'>
              <li className='signup-button-container'>
                <a id='sign-up-button' className='rbx-navbar-signup btn-growth-sm nav-menu-title signup-button' href='/signup'>Sign Up</a>
              </li>
              <li className='login-action'>
                <span><a className='font-header-2 rbx-navbar-login nav-menu-title rbx-menu-item' href='#' onClick={doLogin}>Log In</a></span>
              </li>
            </ul>
          )}
        </div>
        <Menu authed={authed} cls='hidden-md hidden-lg col-xs-12' />
      </div>
      {loginModal.open && <LoginModal />}
    </div>
    {authed && <NavSidebar2020 open={navOpen} />}
    </>
  );
};

export default Navbar2020;
