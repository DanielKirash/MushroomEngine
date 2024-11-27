import InputField from '../../atoms/inputFields/InputText';
import LogoFull from '../../atoms/logo/LogoFull';
import { FaUser } from "react-icons/fa";
import { MdOutlinePassword } from "react-icons/md"
import './login-card.css';


const LoginCard = () => {
    return(
            <div className='login'>
                    <LogoFull className='medium-size'/>
                <div className='inputField'>
                    <div className='iconAndInput'>
                        <FaUser className='icon'/><InputField placeholder='Username' id='email'/>
                    </div>

                    <div className='iconAndInput'>
                        <MdOutlinePassword className='icon'/><InputField placeholder='Password' id='password'/>
                    </div>
                </div>
                <button className='loginButton'>Login</button>
            </div>
    )
        
    
  };
  
  export default LoginCard;