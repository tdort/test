import React, { useRef, useEffect } from "react";
import { createUseStyles } from "react-jss";
import { getTheme, themeType } from "../../services/theme";
import AuthenticationStore from "../../stores/authentication";
import LoginModalStore from "../../stores/loginModal";
import NavigationStore from "../../stores/navigation";
import NavSideBar from "../navSidebar";
import LoggedInArea from "./components/loggedinArea";
import LoginArea from "./components/loginArea";
import Logo from "./components/logo";
import NavigationLinks from "./components/navigationLinks";
import Search from "./components/search";
import { getSite2020, getSite2020Public, applySite2020, useRbx2020 } from "../../services/site2020";
import Navbar2020 from "../navbar2020";

const useNavBarStyles = createUseStyles({
  navbar: {
    backgroundColor: p => p.theme === themeType.obc2016 ? '#393939' : '#0074BD',
    paddingTop: '6px',
    paddingBottom: '3px',
  },
  navContainer: {
    maxWidth: '100%!important',
    paddingTop: '0',
    paddingBottom: '0',
  },
  leftContainer: {

  },
  row: {
    width: '100%',
  },
  wrapper: {
    marginBottom: '40px',
    maxWidth: '100vw',
    overflow: 'auto',
    '@media(max-width: 991px)': {
      marginBottom: '98px',
    }
  },
});

const Navbar = () => {
  const s = useNavBarStyles({
    theme: getTheme(),
  });
  const authStore = AuthenticationStore.useContainer();
  const mainNavBarRef = useRef(null);
  const is2020 = useRbx2020();

  // 2020 look: owner always; everyone else only while the owner's global switch is on
  useEffect(() => {
    if (authStore.isPending) return;
    if (authStore.userId === 1) { applySite2020(getSite2020(), true); return; }
    if (!authStore.isAuthenticated) { applySite2020('off', false); return; }
    getSite2020Public().then(pub => applySite2020(getSite2020(), pub));
  }, [authStore.isPending, authStore.userId, authStore.isAuthenticated]);

  if (is2020) return <div className='navbar-wrapper-main' style={{ margin: 0 }}><Navbar2020 /></div>;

  return <div className={s.wrapper + ' navbar-wrapper-main'}>
    <nav className={`navbar fixed-top navbar-expand-lg ${s.navbar}`} ref={mainNavBarRef}>
      <div className={`${s.navContainer} container`}>
        <div className={`${s.row} row`}>
          <div className='col-12 col-lg-8'>
            <div className={`${s.row} row`}>
              <Logo></Logo>
              <NavigationLinks></NavigationLinks>
              <Search></Search>
            </div>
          </div>
          <div className='col-12 col-lg-4'>
            {authStore.isPending ? null : authStore.isAuthenticated ? <LoggedInArea></LoggedInArea> : <LoginArea></LoginArea>}
          </div>
        </div>
      </div>
    </nav>
    {authStore.isAuthenticated && <NavSideBar mainNavBarRef={mainNavBarRef}></NavSideBar>}
  </div>
}

export default Navbar;