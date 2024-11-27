import BarraRicerca from '../../molecules/barraRicerca/BarraRicerca';
import PlantCard from '../../molecules/plantCard/PlantCard';
import './main-section.css'


const MainSection = () => {
    return (
        <section className="main-section">
            <BarraRicerca></BarraRicerca>
            <div className='plantContainer'>
                {/* Render all the elemetns from the fetch TODO */}
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