import ImpiantoLeft from '../../molecules/listaimpianti/ImpiantoLeft';
import './style.css'

const ListaImpianti = () =>{

    return(
        <ul className='lista-impianti-left'>
            <ImpiantoLeft></ImpiantoLeft>
            <ImpiantoLeft></ImpiantoLeft>
            <ImpiantoLeft></ImpiantoLeft>
        </ul>
    )

}

export default ListaImpianti;