import { PlantType } from '../../../types/PlantType';
import Light from '../../atoms/luceFunzionamento/Light';
import './style.css'

const ImpiantoLeft = (plant : PlantType) =>{

    return(
        <li className='item-list'>
            <span className='light-list'><Light/></span>
            <div className='nome-impianto-list'>{plant.name}</div>
        </li>
    )

}

export default ImpiantoLeft;