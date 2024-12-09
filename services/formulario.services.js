
import { sequelize } from '../libs/sequelize.js';

async function formulario(){
    const formularios = await sequelize.models.formulario.findAll()
    return formularios
}

async function create(formulario){
    const newFormulario = await sequelize.models.formulario.create({
        nombre: formulario.nombre,
        documento: formulario.documento,
        apellido: formulario.apellido,
        direccion: formulario.direccion,
        telefono: formulario.telefono,


    });
    
    return newFormulario
}


     
export {
    formulario,
    create,
}
