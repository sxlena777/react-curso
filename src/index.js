import React from "react";
import ReactDOM from 'react-dom/client'
import { CompEjemplo } from './comp'

const rootElement = document.getElementById('root') //elemento root seleccionado
const root = ReactDOM.createRoot(rootElement)



root.render(
    <>
        <CompEjemplo />
        <CompEjemplo />
        <CompEjemplo />
    </>
)
