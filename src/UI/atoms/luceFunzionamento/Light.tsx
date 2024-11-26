import { IconContext } from 'react-icons';
import './style.css'
import { ImRadioChecked } from "react-icons/im";

const Light = () => {

    return (
        <IconContext.Provider value={{className:"light green-light"}}>
            <ImRadioChecked />
        </IconContext.Provider>
        
    )
}

export default Light;