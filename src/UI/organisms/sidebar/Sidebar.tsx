import './sidebar.css'
import ListaImpianti from '../listaImpianti/ListaImpianti';
import { MainProps } from '../../../types/MainProps';

const Sidebar = () => {
    return (
        <nav className="sidebar">
            
            <ListaImpianti />
        </nav>
    )
  };
  
  export default Sidebar;