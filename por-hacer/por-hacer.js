const fs = require('fs');

let listPorHacer = [];

const guardarDB = () => {
    let data = JSON.stringify(listPorHacer);
    fs.writeFile('db/data.json', data, err => {
        if (err)
            throw new Error('Fallo al guardar');
    });
}

const cargarDB = () => {
    try {
        listPorHacer = require('../db/data.json');
    } catch (error) {
        listPorHacer = [];
    }
}

const crear = descripcion => {
    cargarDB();
    let porHacer = {
        descripcion,
        completado: false,
    };

    listPorHacer.push(porHacer);
    guardarDB();
    return porHacer;
}

const getListado = (completado) => {
    cargarDB();
    if (completado === undefined)
        return listPorHacer;

    else {
        let newList = listPorHacer.filter(e => {
            return String(e.completado) == completado;
        });
        return newList;
    }
}

const actualizar = (descripcion, completado = true) => {
    cargarDB();
    let index = listPorHacer.findIndex(e => {
        return e.descripcion === descripcion;
    });
    if (index >= 0) {
        listPorHacer[index].completado = completado;
        guardarDB();
        return true;
    }
    return false;
}

const borrar = (descripcion) => {
    cargarDB();
    // let index = listPorHacer.findIndex(e => {
    //     return e.descripcion === descripcion;
    // });
    // if (index != -1) {
    //     listPorHacer.splice(index, 1);
    //     guardarDB();
    //     return true;
    // }
    let newList = listPorHacer.filter((e) => {
        return e.descripcion != descripcion;
    });
    if (listPorHacer.length == newList.length)
        return false;

    listPorHacer = newList;
    guardarDB();
    return true;
}

module.exports = {
    crear,
    getListado,
    actualizar,
    borrar
}