const descripcion = {
    demand: true,
    alias: 'd',
    desc: 'Descripción de la tarea por hacer'
};
const completado = {
    default: true,
    alias: 'c',
    desc: 'Marca la tarea como completada o pendiente'
}


const argv = require('yargs')
    .command('crear', 'Crea una nueva tarea por hacer', {
        descripcion
    })
    .command('actualizar', 'Actualiza el estado completado de una tarea', {
        descripcion,
        completado
    })
    .command('borrar', 'Borra una tarea por hacer', {
        descripcion
    })
    .command('listar', 'Muestra todas las tareas', {
        completado: {
            ...completado,
            default: undefined
        }
    })
    .help()
    .argv;

module.exports = {
    argv
}