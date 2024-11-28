import './style.css'
import { ButtonCrudProps } from './ButtonsTypes';

const ButtonCrud = ({ funzioneBtn, testo }:ButtonCrudProps) => {
    

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
            case 'modificaMachinary':
                handleModify();
                break;
            case 'eliminaMachinary':
                handleDelete();
                break;
        }
    }
    
    return (
        <button className={funzioneBtn} onClick={handleFunction}>{testo}</button>
    )
}

export default ButtonCrud;