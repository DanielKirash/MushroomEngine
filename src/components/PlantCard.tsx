import './plantcard.css';

const PlantCard = () => {

    const handleClick = () => {
        console.log('Clicked');
    }

    const handleModify = () => {
        console.log('Modify');
    }

    const handleDelete = () => {
        console.log('Delete');
    }




    return (
        <div className="plantCardContainer" onClick={handleClick}>
            <div className="plantInfo">
                <div className="plantName">Impianto di Filtraggio</div>
                <div className="plantPosition">Capannone A2</div>
                <div className="plantStatus">ATTIVO</div>
            </div>
            <div className="plantDescription">
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                    volutpat semper purus, aliquam tincidunt nisi ornare eget. Aenean
                    efficitur eu mauris at euismod.
                </p>
            </div>
            <div className="plantButton">
                <button className="modifica" onClick={handleModify}>MODIFICA</button>
                <button className="elimina" onClick={handleDelete}>ELIMINA</button>
            </div>
        </div>
    );
};

export default PlantCard;
