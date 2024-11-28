import { useEffect, useState } from "react";
import { PlantType } from "../../../../types/PlantType";
import InputField from "../../../atoms/inputFields/InputText";
import MachinaryCard from "../../machinaryCard/MarchinaryCard";
import './modalcontentmachinary.css';
import { checkStatus } from "../../../../utils/utils";
import { FaSave, FaTimes } from "react-icons/fa";
import { usePlants } from "../../../../contexts/PlantContext";

const ModalContentMachinary = (plant: PlantType) => {

    const { updatePlant } = usePlants();

    const [editedPlant, setEditedPlant] = useState({
        _id: plant?._id,
        name: plant?.name,
        location: plant?.location,
        description: plant?.description,
    });

    useEffect(() => {
        if (plant) {
            setEditedPlant({
                _id: plant._id,
                name: plant.name,
                location: plant.location,
                description: plant.description,
            });
        }
    }, [plant]);

    const handleChange = (field: string, value: string) => {
        setEditedPlant(prev => ({
            ...prev,
            [field]: value
        }));
    };

    const handleSave = async () => {
        await updatePlant(editedPlant);
        plant.handleClose && plant.handleClose();
        plant.setEditMode && plant.setEditMode(false);
    };

    const handleCancel = () => {
        setEditedPlant({
            _id: plant._id,
            name: plant.name,
            location: plant.location,
            description: plant.description,
        });
    };
    return (
        plant.editMode ? (
            <div className="edit-mode-container">
                <header className="modal-header">
                    <div className="modal-header-actions">
                        <div className="edit-mode-title">
                            <span className="label">Impianto:</span>
                            <InputField
                                addClass="edit-mode-input"
                                placeholder="Nome impianto"
                                id="name"
                                value={editedPlant.name}
                                onChange={(e) => handleChange('name', e.target.value)}
                            />
                        </div>
                    </div>
                    <div className="modal-info">
                        <div className="edit-mode-description">
                            <span className="labelDesc">Descrizione:</span>
                            <textarea
                                className="edit-mode-textarea"
                                placeholder="Descrizione"
                                value={editedPlant.description}
                                onChange={(e) => handleChange('description', e.target.value)}
                            />
                        </div>
                        <div className="edit-mode-position">
                            <span className="label">Posizione:</span>
                            <InputField
                                addClass="edit-mode-input-position"
                                placeholder="Posizione"
                                id="location"
                                value={editedPlant.location}
                                onChange={(e) => handleChange('location', e.target.value)}
                            />
                        </div>
                    </div>
                </header>
                <div className="edit-mode-footer">
                    <button className="icon-button cancel" onClick={handleCancel}>
                        <FaTimes /> Annulla
                    </button>
                    <button className="icon-button save" onClick={handleSave}>
                        <FaSave /> Salva
                    </button>
                </div>
            </div>
        ) : (
                <div className="modal-content-wrapper">
                    <header className="modal-header">
                        <h1 className="modal-title">
                            <span className="label">Impianto:</span>
                            <span className="value"> {plant.name}</span>
                        </h1>
                        <div className="modal-info">
                            <h2 className="info-item">
                                <span className="labelDesc">Descrizione:</span>
                                <span className="value">{plant.description}</span>
                            </h2>
                            <h2 className="info-item">
                                <span className="label">Stato:</span>
                                <span className={"status-badge " + checkStatus(plant)}>{checkStatus(plant).toUpperCase()}</span>
                            </h2>
                        </div>
                    </header>
                    <section className="machinery-section">
                        <h1 className="section-title">Macchinari</h1>
                        <div className="machinaryContainer">
                            {plant.macchinari?.map((machinaryItem, index) => (
                                <div key={index} className="machinary">
                                    <MachinaryCard {...machinaryItem} />
                                </div>
                            ))}
                        </div>
                    </section>
                </div>
            ))
};

export default ModalContentMachinary;
