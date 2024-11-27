import './header.css'
import Logo from '../../atoms/logo/Logo';
import { HiOutlineLogout } from "react-icons/hi";
import { IconContext } from 'react-icons';

const Header = () => {

    const handleLogOut = () => {
        localStorage.clear();
        //REDIRECT TO LOGIN PAGE
        //TODO
    }

    return (
        <header id="header">
            <Logo className='small-size'/>
            <div className='logout-box'>
                <IconContext.Provider value={{className:"logout-icon"}}>
                    <HiOutlineLogout onClick={handleLogOut}/>
                </IconContext.Provider>
                
            </div>
        </header>
    )
  };
  
  export default Header;