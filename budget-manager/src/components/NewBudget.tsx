import React from "react"

export const NewBudget = () => {
  return (
    <div className="contenedor-presupuesto contenedor sombra">
      <form className="formulario">
        <div className="campo">
          <label>Budget</label>
          <input
            type="text"
            className="nuevo-presupuesto"
            placeholder="Add Bugdet"
          />
        </div>
        <input type="submit" value="Add" />
      </form>
    </div>
  )
}
