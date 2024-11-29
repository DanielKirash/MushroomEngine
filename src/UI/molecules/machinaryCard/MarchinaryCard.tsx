import { useState } from "react";
import { MachinaryType } from "../../../types/MachinaryType";
import ButtonCrud from "../../atoms/buttons/ButtonCrud";
import "./machinarycard.css";
import { FaSave, FaTimes } from "react-icons/fa";
import InputField from "../../atoms/inputFields/InputText";
import { usePlants } from "../../../contexts/PlantContext";
import toast from "react-hot-toast";

const MachinaryCard = (machinaryItem: MachinaryType) => {
const [isEditing, setIsEditing] = useState(false);

  const [editedMachinary, setEditedMachinary] = useState({
    _id: machinaryItem._id,
    name: machinaryItem.name,
    type: machinaryItem.type,
    status: machinaryItem.status,
    plant_id: machinaryItem.plant_id
  });

  const { updateMachinary } = usePlants();

  const handleChange = (field: string, value: string) => {
    setEditedMachinary(prev => ({
      ...prev,
      [field]: value
    }));
  };

    const onSave = (machinary: MachinaryType) => {
        console.log('MACCHINARIO EDITATO')
        console.log(machinary)
        if(machinary.plant_id){
            updateMachinary(machinary.plant_id, machinary);
        }else{
            toast.error('Errore durante il salvataggio');
        }
        setIsEditing(false);
    }


    function onCancel(){
        setIsEditing(false);
    }

    const handleDelete = () => {
        console.log('delete')
    }

  return (
    <div className="smallMachinaryCardContainer">
      <div className="smallMachinaryInfo">
        {isEditing ? (
          <>
            <div className="smallMachinaryName">
              <InputField
                placeholder="Nome"
                value={editedMachinary.name}
                onChange={(e) => handleChange('name', e.target.value)}
                id="machinaryName"
              />
            </div>
            <div className="smallMachinaryType">
              <InputField
                placeholder="Tipo"
                value={editedMachinary.type}
                onChange={(e) => handleChange('type', e.target.value)}
                id="machinaryType"
              />
            </div>
            <div className="smallMachinaryStatus">
              <InputField
                placeholder="Status"
                value={editedMachinary.status}
                onChange={(e) => handleChange('status', e.target.value)}
                id="machinaryStatus"
              />
            </div>
            <div className="editButtons">
              <button className="icon-button save" onClick={() => onSave(editedMachinary)}>
                <FaSave /> Salva
              </button>
              <button className="icon-button cancel" onClick={onCancel}>
                <FaTimes /> Annulla
              </button>
            </div>
          </>
        ) : (
          <>
            <div className="smallMachinaryName">Nome: {machinaryItem.name}</div>
            <div className="smallMachinaryType">Tipo: {machinaryItem.type}</div>
            <div className={`smallMachinaryStatus ${machinaryItem.status?.toLowerCase()}`}>
              Status: {machinaryItem.status}
            </div>
            <div className="crudButtons">
              <ButtonCrud
                funzioneBtn="modificaMachinary"
                testo="MODIFICA"
                onClick={() => setIsEditing(true)}
              />
              <ButtonCrud
                funzioneBtn="eliminaMachinary"
                testo="ELIMINA"
                onClick={handleDelete}
              />
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default MachinaryCard