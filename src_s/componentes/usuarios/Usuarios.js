import React from "react";

const Usuarios = () => {
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
                        <h2 className="mb-4">Registrar nuevo empleado</h2>
                        <form className="">
                            <label for="Nombre" className="form-label">
                                Nombre
                            </label>
                            <input type="Nombre" className="form-control imput" id="Nombre" />
                            <br />
                            <label for="Apellido" className="form-label">
                                Apellido
                            </label>
                            <input
                                type="Apellido"
                                className="form-control imput"
                                id="Apellido"
                            />
                            <br />
                            <label for="DNI" className="form-label">
                                Edad
                            </label>
                            <input type="Number" className="form-control imput" id="DNI" />
                            <br />
                            <label for="Telef" className="form-label">
                                Nombre de Usuario
                            </label>
                            <input
                                type="Number"
                                className="form-control imput"
                                id="Telef"
                                placeholder="+54 "
                            />
                            <br />
                            <label for="inputPassword5" class="form-label">
                                Contraseña
                            </label>
                            <input type="password" id="inputPassword5" class="form-control" aria-labelledby="passwordHelpBlock"></input>
                            {/*<input type="text" className="form-control imput" id="PyC" />*/}
                            <br />
                            <label for="Fnacim" className="form-label">
                                Fecha de registro
                            </label>
                            <input type="date" className="form-control imput" id="Fnacim" />
                            <br />
                            <label for="Nombre" className="form-label">
                                Usuario que registra
                            </label>
                            <input type="Nombre" className="form-control imput" id="Nombre" />
                            <br />
                            <button type="submit" className="btn btn-primary imput">
                                Registrar Usuario
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Usuarios;