import '../layouts/ImageCard.css';

export default function ImageCard(props) {
    return (
        <div className="ImageCard">
            <img className='ImageCard-pic' src={props.imgsrc} alt="img" />
            <h1>{props.title}</h1>
            <p>{props.description}</p>
        </div>
    )
}