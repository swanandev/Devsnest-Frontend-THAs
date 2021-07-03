import Meme from '../imgs/Meme.jpg';

const MemeCard = () => {
    return(
        <div className="meme-card-wrapper">
            <div className="meme-image">
                <img src={Meme} alt="Meme.jpg" />
            </div>
            <h2 className="div-title">
                Dank Meme   
            </h2>
            <div className="div-subtitle">
                This is a very dank meme.
            </div>
        </div>
    )
}

export default MemeCard;