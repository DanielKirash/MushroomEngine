import { useEffect, useState } from 'react';
import BarraRicerca from '../../molecules/barraRicerca/BarraRicerca';
import Modal from '../../molecules/modal/Modal';
import PlantCard from '../../molecules/plantCard/PlantCard';
import './main-section.css'
import { PlantType } from '../../../types/PlantType';
import ModalContentMachinary from '../../molecules/modal/modalContent/ModalContentMachinary';
import { MainProps } from '../../../types/MainProps';
import { usePlants } from '../../../contexts/PlantContext';




const MainSection = () => {
    
    const { impianti } = usePlants();
 
    const [showModal, setShowModal] = useState(false);
    const [selectedPlant, setSelectedPlant] = useState<PlantType | null>(null)
    const [editMode, setEditMode] = useState(false);

    const handleCloseModal = () => {
        setShowModal(false);
        setEditMode(false);
    }

    const handleCardClick = (plant :PlantType) => {
        setSelectedPlant(plant);
        setShowModal(true);
    }

    const handleDelate = () => {
        console.log('delete')
    }

    const handleModify = () => {
        setEditMode(true);
        setShowModal(true);
    }
    
    useEffect(() => {
        console.log(impianti)
    }, [impianti])

    return (
        <section className="main-section">
            <BarraRicerca/>
            <Modal show={showModal} handleClose={handleCloseModal}>
                <ModalContentMachinary {...selectedPlant} editMode={editMode} setEditMode={setEditMode} handleClose={handleCloseModal}/>
            </Modal>
            <div className='plantContainer'>
            {impianti && impianti.map( (impianto: PlantType) => (
                <div key={impianto._id} onClick={()=>handleCardClick(impianto)}>
                    <PlantCard {...impianto} deleteFunction={handleDelate} modifyFunction={handleModify}/>
                </div>
                ))} 
            </div>
        </section>
    )
  };
  
  export default MainSection;

  /**/