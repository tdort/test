// 2020 left menu using Roblox's real 2020 markup (.rbx-left-col). Always open >=1688px, hamburger toggles below.
import Link from 'next/link';
import AuthenticationStore from '../../stores/authentication';

const Entry = ({ id, href, icon, label, count }) => (
  <li>
    <Link href={href}>
      <a id={id} className='dynamic-overflow-container text-nav'>
        <div><span className={icon} /></div>
        <span className='font-header-2 dynamic-ellipsis-item'>{label}</span>
        {count > 0 ? <span className='notification-blue notification'>{count > 99 ? '99+' : count}</span> : null}
      </a>
    </Link>
  </li>
);

const NavSidebar2020 = ({ open }) => {
  const auth = AuthenticationStore.useContainer();
  const n = auth.notificationCount || {};
  const uid = auth.userId;
  return (
    <div id='navigation' className={'rbx-left-col' + (open ? ' nav-show' : '')}>
      <div className='rbx-scrollbar'>
        <ul className='left-col-list'>
          <li className='user-name-container'>
            <Link href={`/users/${uid}/profile`}>
              <a className='text-link dynamic-overflow-container'>
                <span className='font-header-2 dynamic-ellipsis-item nav-username'>{auth.username}</span>
              </a>
            </Link>
          </li>
          <Entry id='nav-home' href='/home' icon='icon-nav-home' label='Home' />
          <Entry id='nav-profile' href={`/users/${uid}/profile`} icon='icon-nav-profile' label='Profile' />
          <Entry id='nav-message' href='/My/Messages' icon='icon-nav-message' label='Messages' count={n.messages} />
          <Entry id='nav-friends' href={`/users/${uid}/friends`} icon='icon-nav-friends' label='Friends' count={n.friendRequests} />
          <Entry id='nav-character' href='/My/Avatar' icon='icon-nav-charactercustomizer' label='Avatar' />
          <Entry id='nav-inventory' href={`/users/${uid}/inventory`} icon='icon-nav-inventory' label='Inventory' />
          <Entry id='nav-trade' href='/My/Trades.aspx' icon='icon-nav-trade' label='Trade' count={n.trades} />
          <Entry id='nav-group' href='/My/Groups.aspx' icon='icon-nav-group' label='Groups' />
          <Entry id='nav-blog' href='/Forum/Default.aspx' icon='icon-nav-blog' label='Forums' />
          <li className='rbx-upgrade-now'>
            <a className='btn-secondary-md btn-min-width' href='/BuildersClub/Upgrade.ashx'>Upgrade Now</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavSidebar2020;
