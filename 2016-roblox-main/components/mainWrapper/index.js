import { createUseStyles } from "react-jss"
import EasterEgg from "../easterEgg"

const useStyles = createUseStyles({
  main: {
    minHeight: '95vh',
  }
})

const MainWrapper = ({ children }) => {
  const s = useStyles();
  return <div className={s.main + ' rbx-main-wrap'}>
    <EasterEgg />
    {children}
  </div>
}

export default MainWrapper;