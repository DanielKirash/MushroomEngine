import InputField from '../../atoms/inputFields/InputText';
import './login-card.css';


const LoginCard = () => {
    return(
            <div className='login'>
                <div className='logo'>
                    <img src={'fungoLogo.png'} alt='Logo'></img>
                </div>
                <div className='inputField'>
                    <InputField placeholder='Email' id='email'/>
                    <InputField placeholder='Password' id='password'/>
                </div>
                <button className='loginButton'>Login</button>
            </div>
    )
        
    
  };
  
  export default LoginCard;