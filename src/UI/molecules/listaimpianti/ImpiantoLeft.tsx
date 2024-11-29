import { usePlants } from '../../../contexts/PlantContext';
import { PlantType } from '../../../types/PlantType';
import Light from '../../atoms/luceFunzionamento/Light';
import { ModalProps } from '../../organisms/mainSection/MainSection';
import './style.css'


type ImpiantoLeftProps = PlantType & ModalProps;

const ImpiantoLeft = (plant : ImpiantoLeftProps) =>{
     function checkStatus(){
        let coloreStatus = "green";
        plant.macchinari?.map((macchinario)=>{
                if(macchinario.status==="OFFLINE") {return coloreStatus ='red'}
                else if(macchinario.status==="WARNING") {return coloreStatus = 'orange'}; 
        }
    )
        return coloreStatus;
    };
    const {selectedPlant, setSelectedPlant} = usePlants();
    
    const handleItemClick = (plant: ImpiantoLeftProps) => {
        setSelectedPlant(plant);
        plant.setShowModal(true);
    };
    return(
        <li className='item-list'>
            <span className='light-list'><Light colore={checkStatus()}/></span>
            <div className='nome-impianto-list' onClick={()=>handleItemClick(plant)}>{plant.name}</div>
        </li>
    )

}

export default ImpiantoLeft;