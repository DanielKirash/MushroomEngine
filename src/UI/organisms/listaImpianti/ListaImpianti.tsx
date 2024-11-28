import { MainProps } from '../../../types/MainProps';
import { PlantType } from '../../../types/PlantType';
import ImpiantoLeft from '../../molecules/listaimpianti/ImpiantoLeft';
import './style.css'

const ListaImpianti = ({data} : MainProps) =>{
    const impianti = data ;

    return(
        <ul className='lista-impianti-left'>
            {impianti && impianti.map((impianto :  PlantType) => (
                <ImpiantoLeft {...impianto} ></ImpiantoLeft>
            ))}

        </ul>
    )

}

export default ListaImpianti;

/**/ 