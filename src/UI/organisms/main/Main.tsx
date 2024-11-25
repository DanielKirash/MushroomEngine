import './main.css'
import Sidebar from '../sidebar/Sidebar';
import MainSection from '../mainSection/MainSection';

const Main = () => {
    return (
        <main className="main">
            <Sidebar/>
            <MainSection/>
        </main>
    )
  };
  
  export default Main;