import React from "react";

const Navbar1 = () => {
    return (
        <>
            <nav class="navbar  ">
                <div class="container-fluid">
                    <a class="navbar-brand" href="8">
                        Offcanvas navbar
                    </a>
                    <button
                        class="navbar-toggler"
                        type="button"
                        data-bs-toggle="offcanvas"
                        data-bs-target="#offcanvasNavbar"
                        aria-controls="offcanvasNavbar"
                    >
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div
                        class="offcanvas offcanvas-end"
                        tabindex="-1"
                        id="offcanvasNavbar"
                        aria-labelledby="offcanvasNavbarLabel"
                    >
                        <div class="offcanvas-header">
                            <h5 class="offcanvas-title" id="offcanvasNavbarLabel">
                                Menú
                            </h5>
                            <button
                                type="button"
                                class="btn-close"
                                data-bs-dismiss="offcanvas"
                                aria-label="Close"
                            ></button>
                        </div>
                        <div class="offcanvas-body">
                            <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
                                <li class="nav-item">
                                    <a class="nav-link active" aria-current="page" href="3">
                                        Productos
                                    </a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="4">
                                        Usuarios
                                    </a>
                                </li>
                                <li class="nav-item dropdown">
                                    <a
                                        class="nav-link dropdown-toggle"
                                        href="2"
                                        id="offcanvasNavbarDropdown"
                                        role="button"
                                        data-bs-toggle="dropdown"
                                        aria-expanded="false"
                                    >
                                        Listados
                                    </a>
                                    <ul
                                        class="dropdown-menu"
                                        aria-labelledby="offcanvasNavbarDropdown"
                                    >
                                        <li>
                                            <a class="dropdown-item" href="6">
                                                Compras
                                            </a>
                                        </li>
                                        <li>
                                            <a class="dropdown-item" href="5">
                                                Ventas
                                            </a>
                                        </li>
                                        <li>
                                        </li>
                                        <li>
                                            <a class="dropdown-item" href="1">
                                                Deudores
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="4">
                                        Cerrar Sesión
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Navbar1;