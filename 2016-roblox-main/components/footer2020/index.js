// 2020 footer using Roblox's real 2020 markup + classes.
const footerLinks = [
  ['/about-us', 'About Us'], ['/jobs', 'Jobs'], ['/info/blog', 'Blog'], ['/parents', 'Parents'],
  ['/help', 'Help'], ['/terms-and-conditions', 'Terms'], ['/privacy', 'Privacy'],
];

const Footer2020 = () => (
  <footer className='container-footer' id='footer-container'>
    <div className='footer'>
      <ul className='row footer-links'>
        {footerLinks.map(([href, label]) => (
          <li className='footer-link' key={href}>
            <a className={'text-footer-nav' + (label === 'Privacy' ? ' privacy' : '')} href={href}>{label}</a>
          </li>
        ))}
      </ul>
      <div className='row copyright-container'>
        <div className='col-sm-12'>
          <p className='text-footer footer-note'>
            ©2020 Roblox Corporation. Roblox, the Roblox logo and Powering Imagination are among our registered and unregistered trademarks in the U.S. and other countries.
          </p>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer2020;
