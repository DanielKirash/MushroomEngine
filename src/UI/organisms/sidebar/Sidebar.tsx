import './sidebar.css'
import ListaImpianti from '../listaImpianti/ListaImpianti';

const Sidebar = () => {
    return (
        <nav className="sidebar">
            <h1>Lista IMPIANTI:</h1>
            <ListaImpianti/>
        </nav>
    )
  };
  
  export default Sidebar;