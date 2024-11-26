import InputField from '../../atoms/inputFields/InputText';
import Logo from '../../atoms/logo/Logo';
import './login-card.css';


const LoginCard = () => {
    return(
            <div className='login'>
                    <Logo className='medium-size'/>
                <div className='inputField'>
                    <InputField placeholder='Email' id='email'/>
                    <InputField placeholder='Password' id='password'/>
                </div>
                <button className='loginButton'>Login</button>
            </div>
    )
        
    
  };
  
  export default LoginCard;