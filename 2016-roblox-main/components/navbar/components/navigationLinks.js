import { createUseStyles } from "react-jss";
import Link from "../../link";

const useStyles = createUseStyles({
  container: {
    marginTop: '3px',
    marginBottom: 0,
    paddingBottom: 0,
    paddingLeft: '0',
  },
  linkEntry: {
    color: 'white',
    fontWeight: 400,
    marginBottom: 0,
    paddingBottom: 0,
    textAlign: 'center',
    fontSize: '16px',
    textDecoration: 'none',
    padding: '4px 8px',
    transition: 'none',
    '&:hover': {
      color: 'white',
      background: 'rgba(25,25,25,0.1)',
      cursor: 'pointer',
      borderRadius: '4px',
      transition: 'none',
    },
  },
  navItem: {
    paddingRight: '2rem',
    '@media(max-width: 1300px)': {
      paddingRight: '1.75rem',
    },
    '@media(max-width: 1250px)': {
      paddingRight: '1.5rem',
    },
    '@media(max-width: 1175px)': {
      paddingRight: '1rem',
    },
  },
  col: {
    paddingLeft: 0,
    marginLeft: 0,
  }
})

const LinkEntry = props => {
  const s = useStyles();
  const isabsolute = props.url.startsWith('http');
  
  return <div className={'col-3 ' + (props.cls || '')}>
    {isabsolute ? (
      <a href={props.url} className={`${s.linkEntry} nav-link active pt-0`} target="_blank" rel="noopener noreferrer">
        {props.children}
      </a>
    ) : (
      <Link href={`/${props.url}`}>
        <a className={`${s.linkEntry} nav-link active pt-0`}>
          {props.children}
        </a>
      </Link>
    )}
  </div>
}

const NavigationLinks = props => {
  const s = useStyles();
  return <div className={`${s.col} col-10 col-lg-5`}>
    <div className={s.container}>
      <div className='row'>
        <LinkEntry url='games'><span className='rbx-l16'>Games</span><span className='rbx-l20'>Discover</span></LinkEntry>
        <LinkEntry url='catalog'><span className='rbx-l16'>Catalog</span><span className='rbx-l20'>Avatar Shop</span></LinkEntry>
        <LinkEntry url='develop'><span className='rbx-l16'>Develop</span><span className='rbx-l20'>Create</span></LinkEntry>
        <LinkEntry url='https://bt.zawg.ca/downloads' cls='rbx-l16-col'>Download</LinkEntry>
        <LinkEntry url='My/Money.aspx' cls='rbx-l20-col'>Robux</LinkEntry>
      </div>
    </div>
  </div>
}

export default NavigationLinks;