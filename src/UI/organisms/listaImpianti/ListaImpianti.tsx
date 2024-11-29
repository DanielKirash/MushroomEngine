import { usePlants } from '../../../contexts/PlantContext';
import { PlantType } from '../../../types/PlantType';
import ImpiantoLeft from '../../molecules/listaimpianti/ImpiantoLeft';
import { ModalProps } from '../mainSection/MainSection';
import './style.css'

const ListaImpianti = ({showModal , setShowModal} : ModalProps) =>{
    const {impianti} = usePlants();
    
    return(
        <ul className='lista-impianti-left'>
            {impianti && impianti.map((impianto :  PlantType) => (
                <ImpiantoLeft {...impianto} showModal={showModal} setShowModal={setShowModal}></ImpiantoLeft>
            ))}

        </ul>
    )

}

export default ListaImpianti;
