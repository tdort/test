import { createUseStyles } from "react-jss"

const useStyles = createUseStyles({
  main: {
    minHeight: '95vh',
  }
})

const MainWrapper = ({ children }) => {
  const s = useStyles();
  return <div className={s.main + ' rbx-main-wrap'}>
    {children}
  </div>
}

export default MainWrapper;