import { MachinaryType } from "./MachinaryType";

export type PlantType = {
    _id?: string;
    name?: string;
    location?: string;
    description?: string;
    status?: string;
    macchinari?: MachinaryType[];
    modifyFunction?: any
    deleteFunction?: any
    editMode?: boolean;
    setEditMode?: React.Dispatch<React.SetStateAction<boolean>>;
    handleClose?: () => void;
}