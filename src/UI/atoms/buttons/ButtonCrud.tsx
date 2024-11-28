import './style.css'
import { ButtonCrudProps } from './ButtonsTypes';

const ButtonCrud = ({ funzioneBtn, testo, onClick }:ButtonCrudProps) => {
        
    return (
        <button className={funzioneBtn} onClick={onClick}>{testo}</button>
    )
}

export default ButtonCrud;