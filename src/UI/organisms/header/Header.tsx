import './header.css';
import Logo from '../../atoms/logo/Logo';
import { HiOutlineLogout } from "react-icons/hi";
import { IconContext } from 'react-icons';
import { useNavigate } from 'react-router-dom';

const Header = () => {
    const navigate = useNavigate();

    const handleLogOut = () => {
        localStorage.clear();
        navigate('/');
    };

    return (
        <header id="header">
            <Logo className="logo-small" />
            <div className="box-intestazione">
                <img src={'scrittaLogoFungo.png'} alt="Intestazione Azienda" />
                <p>Benvenuto, Utente X</p>
            </div>
            <div className="logout-box" onClick={handleLogOut}>
                <IconContext.Provider value={{ className: "logout-icon" }}>
                    <HiOutlineLogout />
                </IconContext.Provider>
                <span>Logout</span>
            </div>
        </header>
    );
};

export default Header;
