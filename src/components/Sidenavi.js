import '../layouts/Sidenavi.css';

export default function Sidenavi(props) {
    console.log(props);
    return (
        <div className="Sidenavi">
            <div className="Sidenavi-heading">
                <img className='Sidenavi-pic' src={props.imgsrc} alt="img" />
                <h1>{props.name}</h1>
            </div>
            <p>{props.description}</p>
        </div>
    )
}
