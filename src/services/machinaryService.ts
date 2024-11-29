import { MachinaryType } from "../types/MachinaryType";



export const putMachinary = async (machinary: MachinaryType) => {
    const macchinariUrl = `http://127.0.0.1:8000/machinery/${machinary._id}`;
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

export const dropMachinary = async (machinary: MachinaryType) => {
    const macchinariUrl = `http://127.0.0.1:8000/machinery/${machinary._id}`;
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

export const postMachinary = async (plantId: string, machinary: MachinaryType) => {
    const macchinariUrl = `http://127.0.0.1:8000/impianti/${plantId}/machinery`;
    const response = await fetch(macchinariUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(machinary)
    });
    const data = await response.json();
    return data;
}
