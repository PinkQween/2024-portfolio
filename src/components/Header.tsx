import { me } from '../constants';

const Header = () => {
  return (
    <>
        <img src={me} alt="me" className='w-screen object-cover object-top' style={{ height: "160vh", marginTop: '-20vh' }} />
    </>
  )
}

export default Header