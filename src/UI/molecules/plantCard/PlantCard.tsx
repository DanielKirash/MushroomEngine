import { useState } from 'react';
import { PlantType } from '../../../types/PlantType';
import ButtonCrud from '../../atoms/buttons/ButtonCrud';
import Modal from '../modal/Modal';
import './plantcard.css';

const PlantCard = (plant: PlantType) => {
    

    return (        
        <div className="plantCardContainer" >
            <div className="plantInfo">
                <div className="plantName">{plant.name}</div>
                <div className="plantPosition">{plant.location}</div>
                <div className="plantStatus">{plant.status}</div>
            </div>
            <div className="plantDescription">
                <p>
                    {plant.description}
                </p>
            </div>
            <div className="plantButton">
                <ButtonCrud funzioneBtn='modifica' testo='MODIFICA'/>
                <ButtonCrud funzioneBtn='elimina' testo='ELIMINA'/>
            </div>
        </div>
    );
};

export default PlantCard;
