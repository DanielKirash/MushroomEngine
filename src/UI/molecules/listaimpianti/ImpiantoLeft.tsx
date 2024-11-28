import { PlantType } from '../../../types/PlantType';
import Light from '../../atoms/luceFunzionamento/Light';
import './style.css'

const ImpiantoLeft = (plant : PlantType) =>{
     function checkStatus(){
        let coloreStatus = "green";
        plant.macchinari?.map((macchinario)=>{
                if(macchinario.status==="OFFLINE") {return coloreStatus ='red'}
                else if(macchinario.status==="WARNING") {return coloreStatus = 'orange'}; 
        }
    )
        return coloreStatus;
    };
    return(
        <li className='item-list'>
            <span className='light-list'><Light colore={checkStatus()}/></span>
            <div className='nome-impianto-list'>{plant.name}</div>
        </li>
    )

}

export default ImpiantoLeft;