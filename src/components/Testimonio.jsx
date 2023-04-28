import "../stylesheets/Testimonio.css"
export function Testimonio(props) {
  return (
   <div className="contenedor-testimonio">
     <img className="imagen-testimonio"
     src={props.imagen}
     alt="Shawn Wang" 
     />
     <div className="contenedor-texto-testimonio">
        <p className="nombre-testimonio"><b>{props.nombre}</b> en {props.pais}</p>
        <p className="cargo-testimonio">{props.cargo} en <b>{props.empresa}</b></p>
        <p className="texto-testimonio">{props.testimonio}</p>
     </div>

   </div>
  );
}
