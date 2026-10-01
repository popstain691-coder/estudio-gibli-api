import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import "./style.css";

function Pelicula() {

  const { name } = useParams();

  const [pelicula, setPelicula] = useState(null);
  const [cargando, setCargando] = useState(true);

  useEffect(() => {

    fetch("https://ghibliapi.vercel.app/films")

      .then((response) => response.json())

      .then((peliculas) => {

        const encontrada = peliculas.find((pelicula) =>
          pelicula.title
            .toLowerCase()
            .includes(name.toLowerCase())
        );

        setPelicula(encontrada);
        setCargando(false);

      })

      .catch((error) => {

        console.error("Error:", error);
        setCargando(false);

      });

  }, [name]);


  if (cargando) {
    return <h2>Cargando película...</h2>;
  }


  if (!pelicula) {
    return <h2>No se encontró la película "{name}"</h2>;
  }


  return (

    <div className="pelicula">

      <h1>{pelicula.title}</h1>

      <img
        src={pelicula.image}
        alt={pelicula.title}
      />

      <p className="descripcion">
        {pelicula.description}
      </p>


      <div className="datos">

        <p>
          <strong>Director:</strong>{" "}
          {pelicula.director}
        </p>

        <p>
          <strong>Productor:</strong>{" "}
          {pelicula.producer}
        </p>

        <p>
          <strong>Año:</strong>{" "}
          {pelicula.release_date}
        </p>

        <p>
          <strong>Duración:</strong>{" "}
          {pelicula.running_time} minutos
        </p>

        <p>
          <strong>Puntuación:</strong>{" "}
          {pelicula.rt_score}
        </p>

      </div>

    </div>

  );
}

export default Pelicula;