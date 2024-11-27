
import { MachinaryType } from '../../../types/MachinaryType';
import './machinarycard.css';

const MachinaryCard = ({ machinaryItem }: { machinaryItem: MachinaryType }) => {
    return (
        <div className="smallMachinaryCardContainer">
            <div className="smallMachinaryInfo">
                <div className="smallMachinaryName">Nome: {machinaryItem.name}</div>
                <div className="smallMachinaryType">Tipo: {machinaryItem.type}</div>
                <div className="smallMachinaryStatus">Status: {machinaryItem.status}</div>
            </div>
        </div>
    );
};

export default MachinaryCard;