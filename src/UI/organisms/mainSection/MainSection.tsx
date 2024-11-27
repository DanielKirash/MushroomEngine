import { useState } from 'react';
import BarraRicerca from '../../molecules/barraRicerca/BarraRicerca';
import Modal from '../../molecules/modal/Modal';
import PlantCard from '../../molecules/plantCard/PlantCard';
import './main-section.css'
import { PlantType } from '../../../types/PlantType';
import ModalContentMachinary from '../../molecules/modal/modalContent/ModalContentMachinary';



const MainSection = () => {
    const [showModal, setShowModal] = useState(false);
    const [selectedPlant, setSelectedPlant] = useState<PlantType | null>(null)

    const handleCloseModal = () => {
        setShowModal(false);
    }

    const handleCardClick = (plant :PlantType) => {
        setSelectedPlant(plant);
        setShowModal(true);
    }


    //TODO: Fetch the data from the server
    const plantasda = {
        id: 1,
        name: 'Impianto 1',
        location: 'Via Roma 1',
        status: 'In funzione',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        machinary: [
            { plant_id: '1', name: 'Machinery 1' , type: 'Type 1', status: 'In funzione'},
        ]
    }

    return (
        <section className="main-section">
            <BarraRicerca></BarraRicerca>
            <Modal show={showModal} handleClose={handleCloseModal}>
                <ModalContentMachinary {...plantasda}/>
            </Modal>
            <div className='plantContainer'>
                {/* Render all the elemetns from the fetch TODO */}
                {/* Requires a map for each plantCard so the Modal can safely use the data*/}
                <div onClick={() => handleCardClick(plantasda)}>
                <PlantCard {...plantasda}></PlantCard>
                </div>






                <PlantCard id = {3} name={plantasda.name} location={plantasda.location} status={plantasda.status} description={plantasda.description}></PlantCard>
                <PlantCard id = {4} name={plantasda.name} location={plantasda.location} status={plantasda.status} description={plantasda.description}></PlantCard>
                <PlantCard id = {5} name={plantasda.name} location={plantasda.location} status={plantasda.status} description={plantasda.description}></PlantCard>
                
            </div>
        </section>
    )
  };
  
  export default MainSection;