import { PlantType } from '../../../types/PlantType';
import ImpiantoLeft from '../../molecules/listaimpianti/ImpiantoLeft';
import './style.css'

const ListaImpianti = () =>{
    const data = localStorage.getItem("impianti");
    const impianti = data && JSON.parse(data);
    return(
        <ul className='lista-impianti-left'>
            {impianti.map((impianto :  PlantType) => (
                <ImpiantoLeft {...impianto} ></ImpiantoLeft>
            ))}

        </ul>
    )

}

export default ListaImpianti;