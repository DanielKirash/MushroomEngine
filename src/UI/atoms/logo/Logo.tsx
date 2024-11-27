import LogoProps from './LogoProps';
import './style.css'

const Logo = ({className} : LogoProps) => {

    return(
        <div>
            <img src={'ImmagineLogoFungo.png'} alt='Logo' className={className}></img>
        </div>
    )
}

export default Logo;