import { IconContext } from 'react-icons';
import InputField from '../../atoms/inputFields/InputText';
import './style.css'
import { IoCaretDownOutline , IoCaretUpOutline } from "react-icons/io5";
import { useState } from 'react';


function BarraRicerca(){
    const [toggleValue , setToggleValue] = useState(false);

    const handleToggle = () => {
        setToggleValue(!toggleValue);
    }
    
    return(
        <div className={toggleValue? 'barra-ricerca' : 'barra-ricerca-hidden barra-ricerca'}>
            <div className={toggleValue?'box-input' : 'box-input-hidden'}>
                <InputField placeholder='Cerca Impianto...' id="searchImpianto" addClass='casella-ricerca'></InputField>
                <InputField placeholder='Cerca Macchinario...' id="searchMacchinario" addClass='casella-ricerca'></InputField>
            </div>
            <div className='open-window' onClick={handleToggle}>
                <IconContext.Provider value={{className:"open-arrow"}}>
                {toggleValue?<IoCaretUpOutline onClick={handleToggle} className='iconArrow'/>:<IoCaretDownOutline onClick={handleToggle} className='iconArrow'/> }
                </IconContext.Provider>
            </div>
        </div>
    )
}

export default BarraRicerca;