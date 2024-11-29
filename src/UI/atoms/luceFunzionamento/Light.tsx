import { IconContext } from 'react-icons';
import './style.css'
import { ImRadioChecked } from "react-icons/im";

const Light = ( {colore} : {colore :string}) => {
    return (
        <IconContext.Provider value={{className:"light " + colore + "-light"}}>
            <ImRadioChecked />
        </IconContext.Provider>
        
    )
}

export default Light;