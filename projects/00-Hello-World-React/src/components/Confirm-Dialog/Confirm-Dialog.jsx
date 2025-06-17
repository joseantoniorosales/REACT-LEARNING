//import { useState } from "react";

// TODO Implementar lógica Dialog

export function ConfirmDialog(message, onCancel, onConfirm) {
  /*if (!isShown) {
    return null;
  }

  /* const [isShown, setIsShown] = useState(false);

  /**
   * ! Sin implementar aun, esperar a ver como funciona bien en el curso
   *  const toggleShow = () => {
    setIsShown((prev) => {
      if (prev === false) {
        return null;
      } else {

        return 
      }
    });
  };
   */

  return (
    <div className="confirm-dialog-overlay">
      <div className="confirm-dialog">
        <p>{message}</p>
        <div className="dialog-buttons">
          <button onClick={onCancel}>Cancelar</button>
          <button onClick={onConfirm}>Confirmar</button>
        </div>
      </div>
    </div>
  );
}