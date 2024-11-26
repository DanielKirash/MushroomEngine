import './header.css'
import Logo from '../../atoms/logo/Logo';
import { RiLogoutCircleRLine } from "react-icons/ri";
import { IconContext } from 'react-icons';

const Header = () => {
    return (
        <header id="header">
            <Logo className='small-size'/>
            <div className='logout-box'>
                <IconContext.Provider value={{className:"logout-icon"}}>
                    <RiLogoutCircleRLine/>
                </IconContext.Provider>
                
            </div>
        </header>
    )
  };
  
  export default Header;