import '../layouts/Sidenavi.css';

export default function Sidenavi(props) {
    console.log(props);
    return (
        <div className="Sidenavi">
            <img className='Sidenavi-pic' src={props.imgsrc} alt="img" />
            <h1>{props.title}</h1>
            <p>{props.description}</p>
        </div>
    )
}
