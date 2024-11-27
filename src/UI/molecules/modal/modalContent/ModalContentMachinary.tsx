import { PlantType } from "../../../../types/PlantType"

const ModalContentMachinary = (plant: PlantType) => {

    return(
        <div>
            <h1>Impianto: {plant.name}</h1>
            <h2>Descrizione: {plant.description}</h2>
            <h2>Stato: {plant.status}</h2>
            <h1>Macchinari:</h1>
            <ul>
                {plant.machinary?.map((machinaryItem, index) => (
                    <li key={index}>{machinaryItem.name}</li>
                ))}
            </ul>
        </div>

    )
}

export default ModalContentMachinary