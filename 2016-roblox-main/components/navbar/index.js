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
import { getSite2020, applySite2020 } from "../../services/site2020";

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

  // 2020 look: owner only (user id 1)
  useEffect(() => {
    if (authStore.isPending) return;
    applySite2020(getSite2020(), authStore.userId === 1);
  }, [authStore.isPending, authStore.userId]);

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