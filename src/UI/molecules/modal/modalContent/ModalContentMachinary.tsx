import { useEffect, useState } from "react";
import { PlantType } from "../../../../types/PlantType";
import InputField from "../../../atoms/inputFields/InputText";
import MachinaryCard from "../../machinaryCard/MarchinaryCard";
import './modalcontentmachinary.css';
import { checkStatus } from "../../../../services/utils";

const ModalContentMachinary = (plant: PlantType) => {

    const [editedPlant, setEditedPlant] = useState({
        name: plant.name,
        description: plant.description,
        location: plant.location,
        status: plant.status
    });

    

    const handleChange = (field: string, value: string) => {
        setEditedPlant(prev => ({
            ...prev,
            [field]: value
        }));
    };

    const handleSave = () => {
        //Logica per il salvataggio
        console.log('Saving:', editedPlant);
    };

    const handleCancel = () => {
        setEditedPlant({
            name: plant.name,
            description: plant.description,
            location: plant.location,
            status: plant.status
        });
    };

    return (
        plant.editMode ? 
        (
            <header className="modal-header">
                <div className="modal-header-actions">
                    <h1 className="modal-title">
                        <span className="label">Impianto:</span> 
                        <InputField 
                            placeholder="Nome impianto" 
                            id="name"
                            value={editedPlant.name}
                            onChange={(e) => handleChange('name', e.target.value)}
                        />
                    </h1>
                    <div className="action-buttons">
                        <button className="icon-button save" onClick={handleSave}>
                            <FaSave />
                        </button>
                        <button className="icon-button cancel" onClick={handleCancel}>
                            <FaTimes />
                        </button>
                    </div>
                </div>
                <div className="modal-info">
                    <h2 className="info-item">
                        <span className="labelDesc">Descrizione:</span>
                        <InputField 
                            placeholder="Descrizione" 
                            id="description"
                            value={editedPlant.description}
                            onChange={(e) => handleChange('description', e.target.value)}
                        />
                    </h2>
                </div>
            </header>
        )
        : 
        (
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