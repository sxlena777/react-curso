import React from "react";

import LineaFechasVentas from "./LineaFechasVentas";

const ListaFechasVentas = () => {
    return (
        <>
            <div
                style={{
                    display: "grid",
                    placeItems: "center",
                    backgroundColor: "#f2f2f2",
                    paddingTop: "2rem",
                    paddingBottom: "6rem",
                }}
            >
                <div
                    className="rounded-3 shadow "
                    style={{
                        width: "82rem",
                        height: "45rem",
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
                        {/* Scroll de la grilla */}
                        <div
                            className="rounded-3 py-5 shadow "
                            class="overflow-auto"
                            style={{
                                width: "80rem",
                                height: "40rem",
                                display: "grid",
                                placeItems: "center",
                                backgroundColor: "white",
                            }}
                        >
                            <table
                                class="table caption-top table-hover "
                                style={{ width: "74rem", placeItems: "center" }}
                            >
                                <caption class="mb-3">
                                    <h2>Listado de Ventas</h2>
                                </caption>
                                <thead class="table-light sticky-top ">
                                    <tr>
                                        <th scope="col">
                                            <h5>Fechas</h5>
                                        </th>
                                        <th scope="col"></th>
                                        <th scope="col"></th>
                                        <th scope="col"></th>
                                        <th scope="col"></th>
                                    </tr>
                                </thead>

                                <LineaFechasVentas />
                            </table>
                        </div>
                    </div>
                </div>
            </div>

            <div
                class="modal fade"
                id="infocliente"
                tabindex="-1"
                aria-labelledby="infoclienteModalLabel"
                aria-hidden="true"
            >
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="infoclienteModalLabel">
                                Informacion del Ciente
                            </h5>
                            <button
                                type="button"
                                class="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                            ></button>
                        </div>
                        <div class="modal-body">
                            <form>
                                <div class="position-absolute top-0 start-0 translate-middle">
                                    <p class="h3"> PEPE </p>
                                </div>
                                <div class="mb-3">
                                    <label for="recipient-name" class="col-form-label">
                                        Destinatario:
                                    </label>
                                    <input type="text" class="form-control" id="recipient-name" />
                                </div>
                                <div class="mb-3">
                                    <label for="message-text" class="col-form-label">
                                        Mensaje:
                                    </label>
                                    <textarea class="form-control" id="message-text"></textarea>
                                </div>
                            </form>
                        </div>
                        <div class="modal-footer">
                            <button
                                type="button"
                                class="btn btn-secondary"
                                data-bs-dismiss="modal"
                            >
                                Cerrar
                            </button>
                            <button type="button" class="btn btn-primary">
                                Enviar mensaje
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <div
                class="modal fade"
                id="modificarcliente"
                tabindex="-1"
                aria-labelledby="modificarclienteModalLabel"
                aria-hidden="true"
            >
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="modificarclienteModalLabel">
                                Modificar Cliente
                            </h5>
                            <button
                                type="button"
                                class="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                            ></button>
                        </div>
                        <div class="modal-body">
                            <form>
                                <div class="mb-3">
                                    <label for="recipient-name" class="col-form-label">
                                        Destinatario:
                                    </label>
                                    <input type="text" class="form-control" id="recipient-name" />
                                </div>
                                <div class="mb-3">
                                    <label for="message-text" class="col-form-label">
                                        Mensaje:
                                    </label>
                                    <textarea class="form-control" id="message-text"></textarea>
                                </div>
                            </form>
                        </div>
                        <div class="modal-footer">
                            <button
                                type="button"
                                class="btn btn-secondary"
                                data-bs-dismiss="modal"
                            >
                                Cerrar
                            </button>
                            <button type="button" class="btn btn-primary">
                                Enviar mensaje
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <div
                class="modal fade"
                id="eliminarcliente"
                tabindex="-1"
                aria-labelledby="eliminarclienteModalLabel"
                aria-hidden="true"
            >
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="eliminarclienteModalLabel">
                                Eliminar cliente
                            </h5>
                            <button
                                type="button"
                                class="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                            ></button>
                        </div>
                        <div class="modal-body">
                            <form>
                                <div class="mb-3">
                                    <label for="recipient-name" class="col-form-label">
                                        Destinatario:
                                    </label>
                                    <input type="text" class="form-control" id="recipient-name" />
                                </div>
                                <div class="mb-3">
                                    <label for="message-text" class="col-form-label">
                                        Mensaje:
                                    </label>
                                    <textarea class="form-control" id="message-text"></textarea>
                                </div>
                            </form>
                        </div>
                        <div class="modal-footer">
                            <button
                                type="button"
                                class="btn btn-secondary"
                                data-bs-dismiss="modal"
                            >
                                Cerrar
                            </button>
                            <button type="button" class="btn btn-primary">
                                Enviar mensaje
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ListaFechasVentas;