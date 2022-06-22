import '../styleSheets/Testimonio.css';

function Testimonio(props) {
  return (
    <div id='testimony-container'>
        <img src={props.imgProfile}/>
      <div className='text-container'>
        <p className='info'><b>{props.name}</b> de {props.country}</p>
        <p>{props.position} en <b>{props.company}</b></p>
        <p id="testimony">"{props.description}"</p>
      </div>
    </div>
  );
}

export default Testimonio;