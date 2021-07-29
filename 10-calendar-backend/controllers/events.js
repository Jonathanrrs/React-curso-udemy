const { response } = require('express');
const Evento = require('../models/Evento');

const getEventos = async (req, res = response) => {
    
    const eventos = await Evento.find()
    /* para mostrar otra referencia, de este caso el usuario */
        .populate('user', 'name');

    res.json({
        ok: true,
        eventos
    });
};

const crearEvento = async (req, res = response) => {

    const evento = new Evento(req.body);

    try {

        evento.user = req.uid

        const eventoGuardado = await evento.save();

        res.json({
            ok: true,
            eventoGuardado
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Hable con el administrador'
        })
    }
};

const actualizarEvento = async (req, res = response) => {

    const eventoId = req.params.id;
    const uid = req.uid;

    try {
        
        const evento = await Evento.findById(eventoId);
        if(!evento) {
            return res.status(404).json({
                ok: false,
                msg: 'Evento no existe por ese id'
            });
        }

        /* necesario hacer el toString */
        if(evento.user.toString() !== uid) {
            return res.status(401).json({
              ok: false,
              msg: 'No tiene privilegio de editar este evento'  
            });
        }

        const nuevoEvento = {
            ...req.body,
            user: uid
        }

        /* que retorne los datos actualizados nuevos, por eso el new */
        const eventoActualizado = await Evento.findByIdAndUpdate(eventoId, nuevoEvento, {new: true});

        res.json({
            ok: true,
            evento: eventoActualizado
        })

    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Hable con el administrador'
        });
    }

};

const eliminarEvento = async (req, res = response) => {
    const eventoId = req.params.id;
    const uid = req.uid;

    try {
        
        const evento = await Evento.findById(eventoId);
        if(!evento) {
            return res.status(404).json({
                ok: false,
                msg: 'Evento no existe por ese id'
            });
        }

        /* necesario hacer el toString */
        if(evento.user.toString() !== uid) {
            return res.status(401).json({
              ok: false,
              msg: 'No tiene privilegio de eliminar este evento'  
            });
        }

    
        /* que retorne los datos actualizados nuevos, por eso el new */
         await Evento.findByIdAndDelete(eventoId);

        res.json({
            ok: true,
        })

    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Hable con el administrador'
        });
    }
};

module.exports = {
    getEventos,
    crearEvento,
    actualizarEvento,
    eliminarEvento
}