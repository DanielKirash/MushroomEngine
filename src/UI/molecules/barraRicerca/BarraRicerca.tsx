import InputField from '../../atoms/inputFields/InputText';
import './style.css'

function BarraRicerca(){
    return(
        <div className='barra-ricerca'>
            <InputField placeholder='Cerca Impianto...' id="searchImpianto" addClass='casella-ricerca'></InputField>
            <InputField placeholder='Cerca Macchinario...' id="searchMacchinario" addClass='casella-ricerca'></InputField>
        </div>
    )
}

export default BarraRicerca;