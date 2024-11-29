import './sidebar.css'
import ListaImpianti from '../listaImpianti/ListaImpianti';
import { ModalProps } from '../mainSection/MainSection';


const Sidebar = ({showModal , setShowModal} : ModalProps) => {
    return (
        <nav className="sidebar">  
            <ListaImpianti showModal={showModal} setShowModal={setShowModal}/>
        </nav>
    )
  };
  
  export default Sidebar;