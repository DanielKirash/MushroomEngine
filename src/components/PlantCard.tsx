import './plantcard.css';

const PlantCard = () => {
    
    return (
        <div className="plantCardContainer">
            <div className="plantInfo">
                <div className='plantName'>Impianto Di Filtraggio</div>
                <div className='plantPosition'>Capannone A2</div>
                <div className='plantStatus'>ATTIVO</div>
            </div>
                <div className="plantDescritpion">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec volutpat semper purus, aliquam tincidunt nisi ornare eget. Aenean efficitur eu mauris at euismod. Fusce blandit ornare augue, et venenatis turpis porttitor vel. Cras sagittis nibh vel augue tristique, vitae pharetra nunc posuere. Suspendisse congue imperdiet leo at sollicitudin. Sed laoreet vehicula congue. Integer quis lobortis odio. Nam non neque sit amet ante faucibus congue non in dolor. Fusce lectus neque, scelerisque ut semper ornare, varius vitae justo. Proin in iaculis lacus.</p>
                </div>
                <div className="plantButton">
                    <button>Modifica</button>
                    <button>Elimina</button>
                </div>
        </div>
    );

  };
  
  export default PlantCard;