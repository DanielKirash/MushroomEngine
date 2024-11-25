import './login.css';


const Login = () => {
    return(
       <div className='mainContainer'>
            <div className='login'>
                <div className='logo'>
                    <img src={'fungoLogo.png'} alt='Logo'></img>
                </div>
                <div className='inputField'>
                    <input type='text' placeholder='Email' className='email'></input>
                    <input type='password' placeholder='Password' className='password'></input>
                </div>
                <button className='loginButton'>Login</button>
            </div>
        </div>
    )
        
    
  };
  
  export default Login;

