import "./Error.scss";

export default function Error() {
  return (
    <main className="errorContainer">
      <div className="errorUpperPart">
        <h1>404</h1>
        <p>Oups ! La page que vous demandez n'existe pas.</p>
      </div>
    </main>
  );
}