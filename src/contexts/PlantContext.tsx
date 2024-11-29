
import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';
import { PlantType } from '../types/PlantType'; 
import { dropPlant, fetchPlants, postPlant, putPlants } from '../services/plantService';
import { dropMachinary, postMachinary, putMachinary } from '../services/machinaryService';
import { MachinaryType } from '../types/MachinaryType';



interface PlantContextProps {
  impianti: PlantType[];
  setImpianti: React.Dispatch<React.SetStateAction<PlantType[]>>;
  //USESTATE PER IMPIANTO SELEZIONATO
  selectedPlant : PlantType;
  setSelectedPlant : React.Dispatch<React.SetStateAction<PlantType>>;
  selectedMachinary : MachinaryType;
  setSelectedMachinary: React.Dispatch<React.SetStateAction<MachinaryType>>;
  //---------------------------------
  updatePlant: (plant: PlantType) => void;
  deletePlant: (plant: PlantType) => Promise<boolean>;
  addPlant: (plant: PlantType) => void;
  // CRUD PER I MACCHINARI
  updateMachinary: (machinary: MachinaryType) => void;
  deleteMachinary: (machinary: MachinaryType) => Promise<boolean>;
  addMachinary: (plantId: string, machinary: MachinaryType) => void;

}

const PlantContext = createContext<PlantContextProps | null>(null);

export const PlantProvider = ({ children }: { children: ReactNode }) => {
  const [impianti, setImpianti] = useState<PlantType[]>([]);
  const [selectedPlant, setSelectedPlant] = useState<PlantType>({});
  const [selectedMachinary, setSelectedMachinary] = useState<MachinaryType>({} as MachinaryType);

  //FUNZIONE PER FETCHARE I DATI (READ)
  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchPlants();
      if (data) {
        setImpianti(data);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    console.log('Modificato lo stato globale');
  }, [impianti]);

  //FUNZIONE PER AGGIORNARE I DATI (UPDATE)
  const updatePlant = async (plant: PlantType) => {
    try {
      const updatedPlant = await putPlants(plant);
      setImpianti((prevImpianti) => {
        return prevImpianti.map((impianto) => {
          if (impianto._id === plant._id) {
            return { ...impianto, ...updatedPlant };
          } else {
            return impianto;
          }
        });
      });
    } catch (error) {
      console.error("Error updating plant:", error);
    }
  };

  //FUNZIONE PER ELIMINARE I DATI (DELETE)
  const deletePlant = async (plant: PlantType): Promise<boolean> => {

    if (!plant._id) {
      console.error("Cannot delete plant: Invalid or missing ID");
      return false;
    }

    try {

      const response = await dropPlant(plant);
      if (response.message === "Eliminato con successo") {
        console.log("Plant deleted successfully");
        setImpianti((prevImpianti) => 
          prevImpianti.filter((impianto) => impianto._id !== plant._id)
        );
        
        return true; 
      } else {
        console.error("Plant deletion failed on server");
        return false;
      }
    } catch (error) {
      console.error("Error during plant deletion:", error);
      return false;
    }
  };


// FUNZIONE PER AGGIUNGERE DATI (CREATE)
const addPlant = async (plant: PlantType) => {
  try{
    const newPlant = await postPlant(plant);
    plant._id = newPlant._id
    setImpianti((prevImpianti) => [...prevImpianti, plant])
  }catch(error){
    console.error("Error adding plant:", error);
  }
};




// FUNZIONE PER AGGIORNARE I DATI (UPDATE)
const updateMachinary = async (machinary: MachinaryType) => {
  try {
    
    await putMachinary(machinary);
    const data = fetchPlants();
    setImpianti(await data)
    
    setImpianti(prev => [...prev]);
  } catch (error) {
    console.error("Error updating machinary:", error);
  }
};


//CRUD PER LA DELETE DEI MACCHINARI
const deleteMachinary = async ( machinary: MachinaryType): Promise<boolean> => {
  if (!machinary._id) {
    console.error("Cannot delete machinary: Invalid or missing ID");
    return false;
  }
  try {
    const response = await dropMachinary(machinary);

    if (response === null) {
      const data = await fetchPlants();
      if (data) {
        setImpianti(data);
      }
    }
    console.error("Errore durante l'eliminazione del macchinario");
    return false;
  } catch (error) {
    console.error("Errore durante l'eliminazione:", error);
    return false;
  }
};

const addMachinary = async (plantId: string, machinary: MachinaryType) => {
  try {
    const newMachinary = await postMachinary(plantId, machinary);
    setImpianti((prevImpianti) => {
      return prevImpianti.map((impianto) => {
        if (impianto._id === plantId) {
          return {
            ...impianto,
            macchinari: [...(impianto.macchinari ?? []), newMachinary],
          };
        }
        return impianto;
      });
    });

    setImpianti(prev => [...prev]);
  } catch (error) {
    console.error("Errore nell'aggiunta di macchinari:", error);
  }
};


  return (
    <PlantContext.Provider value={{ impianti, setImpianti, updatePlant, deletePlant, addPlant, addMachinary, deleteMachinary, updateMachinary ,selectedPlant, setSelectedPlant, selectedMachinary, setSelectedMachinary }}>
      {children}
    </PlantContext.Provider>
  );
};


// CUSTOM HOOK PER UTILKIZARE IL CONTESTO
export const usePlants = () => {
  const context = useContext(PlantContext);

  if (!context) {
    throw new Error('useImpianti must be used within an ImpiantiProvider');
  }

  return context;
};