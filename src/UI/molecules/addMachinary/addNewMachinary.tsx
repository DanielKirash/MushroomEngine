import React , { useState } from 'react';
import ButtonCrud from '../../atoms/buttons/ButtonCrud';
import InputField from '../../atoms/inputFields/InputText';
import './addNewMachinary.css'
import { PlantType } from '../../../types/PlantType';
import { usePlants } from '../../../contexts/PlantContext';
import { MachinaryType } from '../../../types/MachinaryType';
import toast from 'react-hot-toast';

const AddNewMachinary = ({onClick , openCard, setShowModal} : {onClick : ()=> void , openCard:boolean, setShowModal: ((value: boolean) => void) | undefined}) =>   {

    const {addMachinary, selectedPlant} = usePlants();

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

    const handleSave = async (machinary : MachinaryType) =>{
        if(selectedPlant._id){
            const result = await addMachinary(selectedPlant._id, machinary)
            
        }else{
            console.log('errore')
            return
        }
        if(setShowModal){
            console.log('setShowModal')
            setShowModal(false)
        }
        toast.success('Macchinario aggiunto con successo');
        onClick()
    }
    
    return(
        <div className={`modal-add-card ${openCard ? 'show' : ''}`}>
            <div className='add-new-machinary' >
                    <div className='add-form'>
                        <span className="close-form" onClick={onClick}>&times;</span>
                        <InputField placeholder='Nome Macchinario...' id="name" addClass='input-new-plant'  onChange={(e) => handleChange('name', e.target.value)}/>
                        <InputField placeholder='Tipo Macchinario...' id="type" addClass='input-new-plant'  onChange={(e) => handleChange('type', e.target.value)}/>
                        <InputField placeholder='Status Macchinario...' id="status" addClass='input-new-plant'  onChange={(e) => handleChange('status', e.target.value)}/>
                        <ButtonCrud testo='Salva Macchinario' funzioneBtn='salva' onClick={()=>handleSave(newMachinary)}/>
                    </div>
            </div>
        </div>
    )
}

export default AddNewMachinary;