const { response } = require('express');
const Evento = require("../models/Evento")

const obtenerEventos = async (req, res = response) => {
    const eventos = await Evento.find().populate('user', 'name');

    res.status(200).json({
        ok: true,
        eventos: eventos
    })
}

const crearEvento = async (req, res = response) => {

    // Verificar que tenga el evento.
    const evento = new Evento(req.body);

    try {

        evento.user = req.uid;

        const eventoGuardado = await evento.save();

        res.json({
            ok: true,
            evento: eventoGuardado
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: "Error al crear evento"
        })
    }
}

const actualizarEvento = async (req, res = response) => {

    const eventoId = req.params.id;
    const uid = req.uid;

    try {
        const evento = await Evento.findById(eventoId);

        if (!evento) {
            return res.status(404).json({
                ok: false,
                msg: 'Evento con ese ID no existe'
            });
        } else {
            if (evento.user.toString() !== uid) {
                return res.status(401).json({
                    ok: false,
                    msg: 'No tiene permiso para editar este evento'
                });
            }

            const nuevoEvento = {
                ...req.body,
                user: uid
            }

            const eventoActualizado = await Evento.findByIdAndUpdate(eventoId, nuevoEvento, { new: true });

            res.json({
                ok: true,
                evento: eventoActualizado
            })
        }

    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Error al actualizar evento'
        });
    }
}

const eliminarEvento = async (req, res = response) => {
    const eventoId = req.params.id;
    const uid = req.uid;

    try {
        const evento = await Evento.findById(eventoId);

        if (!evento) {
            return res.status(404).json({
                ok: false,
                msg: 'Evento con ese ID no existe'
            });
        } else {
            if (evento.user.toString() !== uid) {
                return res.status(401).json({
                    ok: false,
                    msg: 'No tiene permiso para eliminar este evento'
                });
            }

            await Evento.findByIdAndDelete(eventoId);

            res.json({
                ok: true,
                msg: "Evento eliminado"
            })
        }

    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Error al eliminar evento'
        });
    }
}

module.exports = {
    obtenerEventos,
    crearEvento,
    actualizarEvento,
    eliminarEvento
}