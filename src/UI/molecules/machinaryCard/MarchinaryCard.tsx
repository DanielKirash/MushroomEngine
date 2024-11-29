import { useEffect, useState } from "react";
import { MachinaryType } from "../../../types/MachinaryType";
import ButtonCrud from "../../atoms/buttons/ButtonCrud";
import "./machinarycard.css";
import { FaSave, FaTimes } from "react-icons/fa";
import InputField from "../../atoms/inputFields/InputText";
import { usePlants } from "../../../contexts/PlantContext";
import toast from "react-hot-toast";
import { FaSpinner } from "react-icons/fa"; 

const MachinaryCard = (machinaryItem: MachinaryType) => {

const [loading, setLoading] = useState(false);
const [isEditing, setIsEditing] = useState(false);

const { deleteMachinary, impianti, setSelectedPlant,  } = usePlants();

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

    const onSave = async (machinary: MachinaryType) => {
        setLoading(true);
        if(machinary.plant_id){
            const response = await  updateMachinary(machinary);
        }else{
            toast.error('Errore durante il salvataggio');
        }
        setSelectedPlant(machinary);
        toast.success('Salvataggio avvenuto con successo');
        setIsEditing(false);
        machinaryItem.setShowModal && machinaryItem.setShowModal(false);
        setLoading(false); 
    }


    function onCancel(machinary: MachinaryType) {
        setEditedMachinary({
          _id: machinary._id,
          name: machinary.name,
          type: machinary.type,
          status: machinary.status,
          plant_id: machinary.plant_id
        });
        setIsEditing(false);
      
    }
     

    const handleDelete = async (machinary: MachinaryType) => {
      setLoading(true);
      if(machinary.plant_id){
        const response = await deleteMachinary(machinary);
        machinary.setShowModal && machinary.setShowModal(false);
        toast.success('Eliminazione avvenuta con successo');
      }else{
        toast.error('Errore durante l\'eliminazione');
      }
      setLoading(false); 
    }

    useEffect(() => {console.log('FUNGO')}, [impianti])

  return (
    <div className="smallMachinaryCardContainer">
      {loading ? (
        <div className="loadingSpinner">
          <FaSpinner className="spinner" /> Caricamento...
        </div>
      ) : (
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
                <button className="icon-button cancel" onClick={() => onCancel(machinaryItem)}>
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
                  onClick={() => handleDelete(machinaryItem)}
                />
              </div>
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default MachinaryCard;
