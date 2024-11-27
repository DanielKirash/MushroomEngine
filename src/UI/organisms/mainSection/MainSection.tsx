import BarraRicerca from '../../molecules/barraRicerca/BarraRicerca';
import PlantCard from '../../molecules/plantCard/PlantCard';
import './main-section.css'


const MainSection = () => {
    const data = localStorage.getItem("impianti");
    return (
        <section className="main-section">
            <BarraRicerca></BarraRicerca>
            <div className='plantContainer'>
                
                <PlantCard></PlantCard>
                <PlantCard></PlantCard>
                <PlantCard></PlantCard>
                <PlantCard></PlantCard>
                <PlantCard></PlantCard>
            </div>
        </section>
    )
  };
  
  export default MainSection;