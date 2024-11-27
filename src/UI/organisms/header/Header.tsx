import './header.css'
import Logo from '../../atoms/logo/Logo';
import { RiLogoutCircleRLine } from "react-icons/ri";
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
                    <RiLogoutCircleRLine onClick={handleLogOut}/>
                </IconContext.Provider>
                
            </div>
        </header>
    )
  };
  
  export default Header;