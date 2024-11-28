import './sidebar.css'
import ListaImpianti from '../listaImpianti/ListaImpianti';
import { MainProps } from '../../../types/MainProps';

const Sidebar = ({data} : MainProps) => {
    return (
        <nav className="sidebar">
            
            <ListaImpianti data={data}/>
        </nav>
    )
  };
  
  export default Sidebar;