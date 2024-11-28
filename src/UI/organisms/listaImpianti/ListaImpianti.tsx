import { usePlants } from '../../../contexts/PlantContext';
import { MainProps } from '../../../types/MainProps';
import { PlantType } from '../../../types/PlantType';
import ImpiantoLeft from '../../molecules/listaimpianti/ImpiantoLeft';
import './style.css'

const ListaImpianti = () =>{
    const {impianti} = usePlants();

    return(
        <ul className='lista-impianti-left'>
            {impianti && impianti.map((impianto :  PlantType) => (
                <ImpiantoLeft {...impianto} ></ImpiantoLeft>
            ))}

        </ul>
    )

}

export default ListaImpianti;
