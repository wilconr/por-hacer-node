const descripcion = {
    alias: 'd',
    demand: true,
    desc: 'Descripcion de la tarea por hacer'
};
const completado = {
    alias: 'c',
    default: true,
    desc: 'Marca como completado o pendiente una tarea por hacer'
};

const argv = require('yargs')
    .command('crear', 'Crea una tarea por hacer', { descripcion })
    .command('actualizar', 'Actualiza el estado de una tarea por hacer', { descripcion, completado })
    .command('borrar', 'Borrar una tarea por hacer', { descripcion })
    .help().argv;

module.exports = {
    argv
}