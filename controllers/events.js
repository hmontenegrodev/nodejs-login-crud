const { response } = require('express');

/* {
    ok:true,
    msg:'obtener eventos'
} */
const obtenerEventos = async (req, res = response) => {
    res.status(200).json({
        ok:true,
        msg:'obtenerEventos'
    })
}

/* {
    ok:true,
    msg:'crearEventos'
} */
const crearEvento = async (req, res = response) => {
    res.status(200).json({
        ok:true,
        msg:'crearEventos'
    })
}

/* { /1111
    ok:true,
    msg:'actualizarEventos'
} */
const actualizarEvento = async (req, res = response) => {
    res.status(200).json({
        ok:true,
        msg:'actualizarEventos'
    })
}

/* { /1111
    ok:true,
    msg:'eliminarEventos'
} */
const eliminarEvento = async (req, res = response) => {
    res.status(200).json({
        ok:true,
        msg:'eliminarEventos'
    })
}

module.exports = {
    obtenerEventos,
    crearEvento,
    actualizarEvento,
    eliminarEvento
}