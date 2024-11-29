import { useEffect, useState } from 'react';
import BarraRicerca from '../../molecules/barraRicerca/BarraRicerca';
import Modal from '../../molecules/modal/Modal';
import PlantCard from '../../molecules/plantCard/PlantCard';
import './main-section.css'
import { PlantType } from '../../../types/PlantType';
import ModalContentMachinary from '../../molecules/modal/modalContent/ModalContentMachinary';
import { usePlants } from '../../../contexts/PlantContext';
import  toast from 'react-hot-toast';

export type ModalProps = {
    showModal:boolean,
    setShowModal: (value:boolean) => void,
}

const MainSection = ({showModal , setShowModal} : ModalProps) => {
    const { impianti, deletePlant ,selectedPlant , setSelectedPlant } = usePlants();

   
    const [editMode, setEditMode] = useState(false);

    const handleCloseModal = () => {
        setShowModal(false);
        setEditMode(false);
    };
  
    const handleModify = () => {
      setEditMode(true);
      setShowModal(true);
    };
  
    const handleCardClick = (plant: PlantType) => {
        setSelectedPlant(plant);
        setShowModal(true);
    };
    

    const handleDelete = async (plant: PlantType) => {
        const response = await deletePlant(plant);
        if (response) {
            toast.success('Impianto eliminato con successo');
        } else {
            toast.error('Errore durante l\'eliminazione dell\'impianto');
        }
    };

    

    useEffect(() => {
    }, [impianti]);

    return (
        <section className="main-section">
            <BarraRicerca />
            <Modal show={showModal} handleClose={handleCloseModal}>
                <ModalContentMachinary 
                    {...selectedPlant} 
                    editMode={editMode} 
                    setEditMode={setEditMode} 
                    handleClose={handleCloseModal} 
                />
            </Modal>
            <div className="plantContainer">
                {impianti &&
                    impianti.map((impianto: PlantType) => (
                        <div key={impianto._id} onClick={() => handleCardClick(impianto)}>
                            <PlantCard
                                {...impianto}
                                deleteFunction={(e: React.MouseEvent) => {
                                    e.stopPropagation(); 
                                    handleDelete(impianto); 
                                }}
                                modifyFunction={handleModify}
                            />
                        </div>
                    ))}
            </div>
        </section>
    );
};

export default MainSection;