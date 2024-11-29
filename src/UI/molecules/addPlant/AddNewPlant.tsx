import React , { useState } from 'react';
import ButtonCrud from '../../atoms/buttons/ButtonCrud';
import InputField from '../../atoms/inputFields/InputText';
import './addNewPlant.css'
import { PlantType } from '../../../types/PlantType';
import { usePlants } from '../../../contexts/PlantContext';

const AddNewPlant = ({onClick , openCard} : {onClick : ()=> void , openCard:boolean}) =>   {
    const {addPlant} = usePlants();
    const [newPlant, setNewPlant] = useState<PlantType>({
        name: "",
        location:"",
        description: "",
    });
    const handleChange = (field: string, value: string) => {
        setNewPlant(prev => ({
            ...prev,
            [field]: value
        }));
    };
    const handleSave = (newPlant : PlantType) =>{
        console.log(newPlant)
        addPlant(newPlant);
        onClick()
    }
    
    return(
        <div className={`modal-add-card ${openCard ? 'show' : ''}`}>
            <div className='add-new-plant' >
                    <div className='add-form'>
                        <span className="close-form" onClick={onClick}>&times;</span>
                        <InputField placeholder='Nome Impianto...' id="name" addClass='input-new-plant'  onChange={(e) => handleChange('name', e.target.value)}/>
                        <InputField placeholder='Posizione Impianto...' id="location" addClass='input-new-plant'  onChange={(e) => handleChange('location', e.target.value)}/>
                        <InputField placeholder='Descrizione Impianto...' id="description" addClass='input-new-plant'  onChange={(e) => handleChange('description', e.target.value)}/>
                        <ButtonCrud testo='Salva Impianto' funzioneBtn='salva' onClick={()=>handleSave(newPlant)}/>
                    </div>
            </div>
        </div>
    )
}

export default AddNewPlant;