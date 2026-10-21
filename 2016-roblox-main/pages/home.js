import React from 'react';
import MyDashboard from '../components/myDashboard';
import Home2020 from '../components/home2020';
import DashboardStore from '../components/myDashboard/stores/dashboardStore';
import Theme2016 from '../components/theme2016';
import { useRbx2020 } from '../services/site2020';

export default function AuthenticatedHomePage() {
  const is2020 = useRbx2020();
  return <Theme2016>
    <DashboardStore.Provider>
      {is2020 ? <Home2020 /> : <MyDashboard></MyDashboard>}
    </DashboardStore.Provider>
  </Theme2016>
}

export const getStaticProps = () => {
  return {
    props: {
      title: 'Home - ROBLOX',
    },
  }
}
