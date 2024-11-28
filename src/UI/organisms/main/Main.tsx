import './main.css'
import Sidebar from '../sidebar/Sidebar';
import MainSection from '../mainSection/MainSection';
import { MainProps } from '../../../types/MainProps';
import { PlantProvider } from '../../../contexts/PlantContext';




const Main = () => {
    return (
        <main className="main">
            <PlantProvider>
                <Sidebar />
                <MainSection/>
            </PlantProvider>
        </main>
    )
  };
  
  export default Main;