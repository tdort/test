import Games from "../../components/gamesPage"
import Games2020 from "../../components/games2020"
import { useRbx2020 } from "../../services/site2020"
import Theme2016 from "../../components/theme2016";
import GamesPageStore from "../../stores/gamesPage";

const GamesPage = props => {
  const is2020 = useRbx2020();
  return <Theme2016>
    <GamesPageStore.Provider>
      {is2020 ? <Games2020/> : <Games/>}
    </GamesPageStore.Provider>
  </Theme2016>
}

export const getStaticProps = () => {
  return {
    props: {
      title: 'Games - ROBLOX',
    }
  }
}

export default GamesPage;