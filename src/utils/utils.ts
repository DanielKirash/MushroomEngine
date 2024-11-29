import { PlantType } from "../types/PlantType";

export function checkStatus(plant : PlantType){
    let status = "online";
    plant.macchinari?.map((macchinario) => {
            if(macchinario.status==="OFFLINE") {return status ='offline'}
            else if(macchinario.status==="WARNING") {
                console.log(status)
                return status = 'warning'}; 
            return status;
    }
    
)
    return status;
};