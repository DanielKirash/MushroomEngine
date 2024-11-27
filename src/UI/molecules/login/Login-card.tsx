import InputField from '../../atoms/inputFields/InputText';
import LogoFull from '../../atoms/logo/LogoFull';
import './login-card.css';


const LoginCard = () => {
    return(
            <div className='login'>
                    <LogoFull className='medium-size'/>
                <div className='inputField'>
                    <InputField placeholder='Email' id='email'/>
                    <InputField placeholder='Password' id='password'/>
                </div>
                <button className='loginButton'>Login</button>
            </div>
    )
        
    
  };
  
  export default LoginCard;