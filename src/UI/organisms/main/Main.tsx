import './main.css'
import Sidebar from '../sidebar/Sidebar';
import MainSection from '../mainSection/MainSection';
import { MainProps } from '../../../types/MainProps';



const Main = ({data} : MainProps ) => {
    return (
        <main className="main">
            <Sidebar data={data}/>
            <MainSection data={data}/>
        </main>
    )
  };
  
  export default Main;