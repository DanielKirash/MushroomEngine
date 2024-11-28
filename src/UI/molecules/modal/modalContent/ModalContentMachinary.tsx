import { PlantType } from "../../../../types/PlantType";
import MachinaryCard from "../../machinaryCard/MarchinaryCard";
import './modalcontentmachinary.css';
import { checkStatus } from "../../../../services/utils";

const ModalContentMachinary = (plant: PlantType) => {
    
    return (
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
    );
};

export default ModalContentMachinary;