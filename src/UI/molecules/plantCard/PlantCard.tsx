import { useState } from 'react';
import { PlantType } from '../../../types/PlantType';
import ButtonCrud from '../../atoms/buttons/ButtonCrud';
import Modal from '../modal/Modal';
import './plantcard.css';
import { checkStatus } from '../../../utils/utils';


const PlantCard = (plant: PlantType) => {

    

    return (        
        <div className="plantCardContainer" >
            <div className="plantInfo">
                <div className="plantName">{plant.name}</div>
                <div className="plantPosition">{plant.location}</div>
                <div className={"plantStatus " + checkStatus(plant)}>{checkStatus(plant).toUpperCase()}</div>
            </div>
            <div className="plantDescription">
                <p>
                    {plant.description}
                </p>
            </div>
            <div className="plantButton">
                <ButtonCrud funzioneBtn='modifica' testo='MODIFICA' onClick={plant.modifyFunction} />
                <ButtonCrud funzioneBtn='elimina' testo='ELIMINA' onClick={plant.deleteFunction}/>
            </div>
        </div>
    );
};

export default PlantCard;
