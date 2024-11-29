import { MachinaryType } from "../types/MachinaryType";



export const putPlants = async (plantId: string, machinary: MachinaryType) => {
    const macchinariUrl = `http://127.0.0.1:8000/impianti/${plantId}/macchinari`;
    const response = await fetch(macchinariUrl, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(machinary)
    });

    const data = await response.json();
    return data;
}

export const dropPlant = async (machinary: MachinaryType) => {
    const macchinariUrl = `http://127.0.0.1:8000/macchinari/${machinary._id}`;
    const response = await fetch(macchinariUrl, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(machinary)
    });
    const data = await response.json();
    return data;
}

export const postPlant = async (plant: MachinaryType) => {
    const macchinariUrl = 'http://127.0.0.1:8000/macchinari';
    const response = await fetch(macchinariUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(plant)
    });
    const data = await response.json();
    return data;
}
