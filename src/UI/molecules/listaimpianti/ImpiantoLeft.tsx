import Light from '../../atoms/luceFunzionamento/Light';
import './style.css'

const ImpiantoLeft = () =>{

    return(
        <li className='item-list'>
            <span className='light-list'><Light/></span>
            <div className='nome-impianto-list'>Nome Impianto</div>
        </li>
    )

}

export default ImpiantoLeft;