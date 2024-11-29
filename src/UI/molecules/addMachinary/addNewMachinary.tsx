import React , { useState } from 'react';
import ButtonCrud from '../../atoms/buttons/ButtonCrud';
import InputField from '../../atoms/inputFields/InputText';
import './addNewMachinary.css'
import { PlantType } from '../../../types/PlantType';
import { usePlants } from '../../../contexts/PlantContext';
import { MachinaryType } from '../../../types/MachinaryType';

const AddNewMachinary = ({onClick , openCard} : {onClick : ()=> void , openCard:boolean}) =>   {
    const {addMachinary} = usePlants();

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

    const handleSave = (machinary : MachinaryType) =>{
        if(machinary.plant_id){
            addMachinary(machinary.plant_id, machinary)
        }else{
            console.log('errore')
        }
        
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

export default AddNewMachinary;