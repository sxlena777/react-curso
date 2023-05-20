import React from "react";

const Productos = () => {
    return (
        <>
            <div
                style={{
                    display: "grid",
                    placeItems: "center",
                    backgroundColor: "#f2f2f2",
                    paddingTop: "4rem",
                    paddingBottom: "12rem",
                }}
            >
                <div
                    className="rounded-3 py-5 shadow "
                    style={{
                        width: "37rem",
                        display: "grid",
                        placeItems: "center",
                        backgroundColor: "white",
                    }}
                >
                    <div
                        style={{
                            display: "grid",
                            placeItems: "center",
                        }}
                    >
                        <h2 className="mb-4">Registrar nuevo producto</h2>
                        <form className="">
                            <label className="form-label">Tipo</label>
                            <select class="form-select" aria-label="Default select example">
                                <option selected></option>
                                <option value="1">Materia Prima</option>
                                <option value="2">Producto de Fabricación</option>
                            </select>
                            <br />
                            <label for="Apellido" className="form-label">
                                Nombre
                            </label>
                            <input
                                type="Nombre"
                                className="form-control imput"
                                id="Nombre"
                            />
                            <br />
                            <button type="submit" className="btn btn-primary imput">
                                Registrar Producto
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Productos;
