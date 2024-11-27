import './style.css'
import { ButtonCrudProps } from './ButtonsTypes';

const ButtonCrud = ({ funzioneBtn }:ButtonCrudProps) => {
    

    const handleModify = () => {
        console.log('Modify');
    }

    const handleDelete = () => {
        console.log('Delete');
    }

    const handleFunction = () =>{
        
        switch (funzioneBtn){
            case 'modifica':
                handleModify();
                break;
            case 'elimina':
                handleDelete();
                break;
        }
    }
    
    return (
        <button className={funzioneBtn} onClick={handleFunction}>{funzioneBtn?.toLocaleUpperCase()}</button>
    )
}

export default ButtonCrud;