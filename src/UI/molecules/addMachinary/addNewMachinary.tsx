import React , { useState } from 'react';
import ButtonCrud from '../../atoms/buttons/ButtonCrud';
import InputField from '../../atoms/inputFields/InputText';
import './addNewPlant.css'
import { PlantType } from '../../../types/PlantType';
import { usePlants } from '../../../contexts/PlantContext';
import { MachinaryType } from '../../../types/MachinaryType';

const AddNewPlant = ({onClick , openCard} : {onClick : ()=> void , openCard:boolean}) =>   {
    const {addPlant} = usePlants();

    const [newMachinary, setNewMachinary] = useState<MachinaryType>({
        name: "",
        type:"",
        status: "",
    });

    const handleChange = (field: string, value: string) => {
        setNewMachinary(prev => ({
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
                        <InputField placeholder='Nome Macchinario...' id="name" addClass='input-new-plant'  onChange={(e) => handleChange('name', e.target.value)}/>
                        <InputField placeholder='Tipo Macchinario...' id="location" addClass='input-new-plant'  onChange={(e) => handleChange('location', e.target.value)}/>
                        <InputField placeholder='Status Macchinario...' id="description" addClass='input-new-plant'  onChange={(e) => handleChange('description', e.target.value)}/>
                        <ButtonCrud testo='Salva Macchinario' funzioneBtn='salva' onClick={()=>handleSave(newMachinary)}/>
                    </div>
            </div>
        </div>
    )
}

export default AddNewPlant;