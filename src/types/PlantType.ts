import { MachinaryType } from "./MachinaryType";

export type PlantType = {
    id?: string;
    name?: string;
    location?: string;
    description?: string;
    status?: string;
    macchinari?: MachinaryType[];
    modifyFunction?: () => void;
    deleteFunction?: () => void;
    editMode?: boolean;
    setEditMode?: React.Dispatch<React.SetStateAction<boolean>>;
}