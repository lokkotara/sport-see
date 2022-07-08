import "./Error.scss";
import React from "react";
import { Link } from "react-router-dom";

export default function Error() {
  return (
    <main className="errorContainer">
      <div className="errorText">
        <h1>404</h1>
        <p>Oups ! La page que vous demandez n'existe pas.</p>
        <Link to="/">Retour à l'accueil</Link>
      </div>
    </main>
  );
}