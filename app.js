const argv = require('./config/yargs.js').argv;
const porHacer = require('./por-hacer/por-hacer.js');
const colors = require('colors');

let comando = argv._[0];

switch (comando) {
    case 'crear':
        let tarea = porHacer.crear(argv.descripcion);
        console.log(tarea);
        break;
    case 'listar':
        let listado = porHacer.getListado(argv.completado);
        listado.forEach(e => {
            console.log('=====Por Hacer====='.green);
            console.log(e.descripcion);
            console.log('Estado: ', e.completado);
            console.log('==================='.green);
        });
        break;
    case 'actualizar':
        let actualizado = porHacer.actualizar(argv.descripcion, argv.completado);
        console.log(actualizado);
        break;
    case 'borrar':
        console.log(porHacer.borrar(argv.descripcion));
        break;
    default:
        console.log('Comando no reconocido');
        break;
}