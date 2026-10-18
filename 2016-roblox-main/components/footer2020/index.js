// 2020 footer using Roblox's real 2020 markup + classes.
const footerLinks = [
  ['/about-us', 'About Us'], ['/jobs', 'Jobs'], ['/info/blog', 'Blog'], ['/parents', 'Parents'],
  ['/help', 'Help'], ['/terms-and-conditions', 'Terms'], ['/privacy', 'Privacy'],
];

const Footer2020 = () => (
  <footer className='container-footer' id='footer-container'>
    <div className='footer'>
      <ul className='row footer-links' style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between', margin: '20px 0 32px', padding: 0, listStyle: 'none' }}>
        {footerLinks.map(([href, label]) => (
          <li className='footer-link' key={href} style={{ width: 'auto', maxWidth: 'none', flex: '0 1 auto', padding: 0, margin: 6, listStyle: 'none' }}>
            <a className={'text-footer-nav' + (label === 'Privacy' ? ' privacy' : '')} href={href}>{label}</a>
          </li>
        ))}
      </ul>
      <div className='row copyright-container' style={{ marginLeft: 0, marginRight: 0 }}>
        <div className='col-sm-12' style={{ width: '100%', padding: 0 }}>
          <p className='text-footer footer-note'>
            ©2020 Roblox Corporation. Roblox, the Roblox logo and Powering Imagination are among our registered and unregistered trademarks in the U.S. and other countries.
          </p>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer2020;
