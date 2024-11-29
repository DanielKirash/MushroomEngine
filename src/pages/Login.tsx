import { Toaster } from 'react-hot-toast';
import LoginCard from '../UI/molecules/login/Login-card';


const Login = () => {
    return(
       <div className='mainContainer'>
            <LoginCard/>
            <Toaster
        position="top-right"
        toastOptions={{
          success: {
            style: {
              background: "green",
              color: "white",
            },
          },
          error: {
            style: {
              background: "red",
              color: "white",
            },
          },
        }}
      />
        </div>
    )
        
    
  };
  
  export default Login;

