import InputField from '../../atoms/inputFields/InputText';
import LogoFull from '../../atoms/logo/LogoFull';
import { FaUser } from "react-icons/fa";
import { MdOutlinePassword } from "react-icons/md"
import './login-card.css';
import { useState } from 'react';



const LoginCard = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleEmailInput = (e: any) => {
        setEmail(e.target.value);
        console.log(email);
    }

    const handlePasswordInput = (e: any) => {
        setPassword(e.target.value);
    }

    function handleLogin(email: string, password: string): void {
        throw new Error('Function not implemented.');
    }

    return(
            <div className='login'>
                    <LogoFull className='medium-size'/>
                <div className='inputField'>
                    <div className='iconAndInput'>
                        <FaUser className='icon'/><InputField placeholder='Username' id='email' onChange={handleEmailInput}/>
                    </div>

                    <div className='iconAndInput'>
                        <MdOutlinePassword className='icon'/><InputField placeholder='Password' id='password' onChange={handlePasswordInput}/>
                    </div>
                </div>
                <button className='loginButton' onClick={() => handleLogin(email, password)}>Login</button>
            </div>
    )
        
    
  };
  
  export default LoginCard;