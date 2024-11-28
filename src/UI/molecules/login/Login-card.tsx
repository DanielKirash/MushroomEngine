import InputField from '../../atoms/inputFields/InputText';
import LogoFull from '../../atoms/logo/LogoFull';
import { FaUser } from "react-icons/fa";
import { MdOutlinePassword } from "react-icons/md"
import './login-card.css';
import { useState } from 'react';
import { login } from '../../../services/authService';



const LoginCard = () => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    let data = undefined;

    const handleUsernameInput = (e: any) => {
        setUsername(e.target.value);
        console.log(username);
    }

    const handlePasswordInput = (e: any) => {
        setPassword(e.target.value);
    }

    async function handleLogin(username: string, password: string): Promise<void> {
        console.log('mushroom')
        data = await login(username, password);
        console.log(data);
        if(data.message){
            if(data.message == 'Utente autenticato con successo') {
                localStorage.setItem('sessionStorage', 'true');
                window.location.href = '/dashboard';
            } else {
                alert('Credenziali errate');
            }
        } else {
            alert('Credenziali errate');
        }
    }

    return(
            <div className='login'>
                    <LogoFull className='medium-size'/>
                <div className='inputField'>
                    <div className='iconAndInput'>
                        <FaUser className='icon'/><InputField placeholder='Username' id='username' onChange={handleUsernameInput}/>
                    </div>

                    <div className='iconAndInput'>
                        <MdOutlinePassword className='icon'/><InputField placeholder='Password' id='password' onChange={handlePasswordInput}/>
                    </div>
                </div>
                <button className='loginButton' onClick={() => handleLogin(username, password)}>Login</button>
            </div>
    )
        
    
  };
  
  export default LoginCard;