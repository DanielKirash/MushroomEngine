import LogoProps from './LogoProps';
import './style.css'

const LogoFull = ({className} : LogoProps) => {

    return(
        <div>
            <img src={'fungoLogo.png'} alt='Logo' className={className}></img>
        </div>
    )
}

export default LogoFull;