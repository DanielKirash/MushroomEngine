import { useState } from 'react';
import BarraRicerca from '../../molecules/barraRicerca/BarraRicerca';
import Modal from '../../molecules/modal/Modal';
import PlantCard from '../../molecules/plantCard/PlantCard';
import './main-section.css'
import { PlantType } from '../../../types/PlantType';
import ModalContentMachinary from '../../molecules/modal/modalContent/ModalContentMachinary';
import { MainProps } from '../../../types/MainProps';




const MainSection = ({data} : MainProps) => {
    
    const impianti = data 
    const [showModal, setShowModal] = useState(false);
    const [selectedPlant, setSelectedPlant] = useState<PlantType | null>(null)

    const handleCloseModal = () => {
        setShowModal(false);
    }

    const handleCardClick = (plant :PlantType) => {
        setSelectedPlant(plant);
        setShowModal(true);
    }
    
    
    return (
        <section className="main-section">
            <BarraRicerca></BarraRicerca>
            <Modal show={showModal} handleClose={handleCloseModal}>
                <ModalContentMachinary {...selectedPlant}/>
            </Modal>
            <div className='plantContainer'>
            {impianti && impianti.map( (impianto: PlantType) => (
                <div key={impianto.id} onClick={()=>handleCardClick(impianto)}>
                    <PlantCard {...impianto}/>
                </div>
                ))} 
            </div>
        </section>
    )
  };
  
  export default MainSection;

  /**/