
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
  //---------------------------------
  updatePlant: (plant: PlantType) => void;
  deletePlant: (plant: PlantType) => Promise<boolean>;
  addPlant: (plant: PlantType) => void;
  // CRUD PER I MACCHINARI
  updateMachinary: (plantId: string, machinary: MachinaryType) => void;
  deleteMachinary: (plantId: string, machinary: MachinaryType) => Promise<boolean>;
  addMachinary: (plantId: string, machinary: MachinaryType) => void;

}

const PlantContext = createContext<PlantContextProps | null>(null);

export const PlantProvider = ({ children }: { children: ReactNode }) => {
  const [impianti, setImpianti] = useState<PlantType[]>([]);
  const [selectedPlant, setSelectedPlant] = useState<PlantType>({});

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
  
      // Aggiornaa lo stato locale con i dati aggiornati mappando su quelli esistenti
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

// CRUD FUNCTIONS FOR machinary



// FUNZIONE PER AGGIORNARE I DATI (UPDATE)
const updateMachinary = async (plantId: string, machinary: MachinaryType) => {
  try {
    const updatedmachinary = await putMachinary(machinary);

    // Update the local state with the updated data by mapping over the existing ones
    setImpianti((prevImpianti) => {
      return prevImpianti.map((impianto) => {
        if (impianto._id === plantId) {
          return {
            ...impianto,
            machineries: (impianto.macchinari ?? []).map((item) => {
              if (item._id === machinary._id) {
                return { ...item, ...updatedmachinary };
              } else {
                return item;
              }
            }),
          };
        } else {
          return impianto;
        }
      });
    });
  } catch (error) {
    console.error("Error updating machinary:", error);
  }
};

// FUNZIONE PER ELIMINARE I DATI (DELETE)
const deleteMachinary = async (plantId: string, machinary: MachinaryType): Promise<boolean> => {
  if (!machinary._id) {
    console.error("Cannot delete machinary: Invalid or missing ID");
    return false;
  }

  try {
    const response = await dropMachinary(machinary);
    if (response.message === "Eliminato con successo") {
      setImpianti((prevImpianti) => {
        return prevImpianti.map((impianto) => {
          if (impianto._id === plantId) {
            return {
              ...impianto,
              machineries: (impianto.macchinari ?? []).filter((item) => item._id !== machinary._id),
            };
          } else {
            return impianto;
          }
        });
      });

      return true;
    } else {
      console.error("Errore durante l'eliminazione del macchinario");
      return false;
    }
  } catch (error) {
    console.error("Erreo durante l'eliminazione:", error);
    return false;
  }
};

// FUNZIONE PER AGGIUNGERE DATI (CREATE)
const addMachinary = async (plantId: string, machinary: MachinaryType) => {
  try {
    const newmachinary = await postMachinary(plantId, machinary);
    setImpianti((prevImpianti) => {
      return prevImpianti.map((impianto) => {
        if (impianto._id === plantId) {
          return {
            ...impianto,
            machineries: [...(impianto.macchinari ?? []), newmachinary],
          };
        } else {
          return impianto;
        }
      });
    });
  } catch (error) {
    console.error("Errore nell'aggiunta di macchianri:", error);
  }
};


  return (
    <PlantContext.Provider value={{ impianti, setImpianti, updatePlant, deletePlant, addPlant, addMachinary, deleteMachinary, updateMachinary ,selectedPlant, setSelectedPlant }}>
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