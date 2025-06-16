import { Fragment } from "react";
import "./App.css";
import { CardFollow } from "./components/Card-Follow/Card-Follow";

export function App() {
  return (
    /**
     * ? Añadido a la section un classname para poder añadirle un estilo a todo el contenedor
     *
     * ? isFollowing = false por defecto hasta avanzar con sistema de login o base de datos
     * ? donde guardar el estado de seguimiento
     * */

    <section className="App">
      <CardFollow
        userPfp="https://avatars.githubusercontent.com/u/55782170?v=4"
        userName={"Jose Antonio Rosales"}
        userTag={"Baam9999"}
        isFollowing={"Follow"}
      />

      <CardFollow
        userPfp="https://media.licdn.com/dms/image/v2/D4D03AQHoxY_if4T6tw/profile-displayphoto-shrink_400_400/B4DZPCMjQ2HcAg-/0/1734129890748?e=1753920000&v=beta&t=ejF7vE6lOxOjTpDRVFZuFtdLS1uSyzBWYWSCU5QvNRU"
        userName={"Felix Gómez Enriquez"}
        userTag={"FelixExample"}
        isFollowing={"Follow"}
      />

      <CardFollow
        userPfp={"https://avatars.githubusercontent.com/u/191065380?v=4"}
        userName={"Luis López Castillo"}
        userTag={"xLoksExample"}
        isFollowing={"Follow"}
      />

      <CardFollow
        userPfp={"https://avatars.githubusercontent.com/u/191065380?v=4"}
        userName={"Francisco Javier Lugo"}
        userTag={"GorrionExample"}
        isFollowing={"Follow"}
      />
    </section>
  );
}
