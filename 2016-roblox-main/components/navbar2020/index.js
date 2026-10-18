// 2020 header using Roblox's real 2020 markup + classes (styled by /css/roblox2020/roblox2020.css).
import Link from 'next/link';
import Router from 'next/router';
import { useState } from 'react';
import AuthenticationStore from '../../stores/authentication';
import LoginModalStore from '../../stores/loginModal';
import LoginModal from '../loginModal';
import { logout } from '../../services/auth';
import getFlag from '../../lib/getFlag';

const links = [
  ['/games', 'Games'],
  ['/catalog', 'Avatar Shop'],
  ['/develop', 'Create'],
  ['/My/Money.aspx', 'Robux'],
];

const Menu = ({ cls }) => (
  <ul className={`nav rbx-navbar ${cls}`}>
    {links.map(([href, label]) => (
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
  const robux = auth.robux !== null && auth.robux !== undefined ? Number(auth.robux).toLocaleString() : '?';

  return (
    <div id='header' className='navbar-fixed-top rbx-header' role='navigation'>
      <div className='container-fluid'>
        <div className='rbx-navbar-header'>
          <div className='navbar-header'>
            <Link href='/home'><a className='navbar-brand'><span className='icon-logo' /><span className='icon-logo-r' /></a></Link>
          </div>
        </div>
        <Menu cls='hidden-xs hidden-sm col-md-5 col-lg-4' />
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
            <ul className='nav navbar-right rbx-navbar-right-nav'>
              <li><a className='rbx-menu-item' href='#' onClick={doLogout}><span className='font-header-2 text-header'>Logout</span></a></li>
              <li className='navbar-icon-item'>
                <Link href='/My/Money.aspx'><a className='rbx-menu-item'><span className='icon-nav-robux' /><span className='rbx-text-navbar-right text-header'>{robux}</span></a></Link>
              </li>
              <li className='age-bracket-label'>
                <Link href={`/users/${auth.userId}/profile`}><a className='text-header age-bracket-label-username font-caption-header'>{auth.username}</a></Link>
                <span className='age-bracket-label-age text-header font-caption-header'>13+</span>
              </li>
            </ul>
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
        <Menu cls='hidden-md hidden-lg col-xs-12' />
      </div>
      {loginModal.open && <LoginModal />}
    </div>
  );
};

export default Navbar2020;
