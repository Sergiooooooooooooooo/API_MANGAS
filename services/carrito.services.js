import { sequelize } from '../libs/sequelize.js';

// Simulando un carrito en memoria, o podrías tener una tabla `carrito` en la base de datos
let carritoEnMemoria = [];

async function carrito() {
    const manga = await sequelize.models.manga.findAll();
    return manga;
}

async function agregar(mangaData) {
    // Este es un ejemplo de cómo podrías almacenar el manga en un "carrito" temporal
    // Si quieres usar una base de datos, deberías agregarlo en una tabla `carrito` relacionada con el usuario
    carritoEnMemoria.push(mangaData);
    return mangaData;
}

async function update(id, manga) {
    const searchedManga = await sequelize.models.manga.findByPk(id);
    if (!searchedManga) {
        return false;
    }
    const [rowsAffected, [updatedManga]] = await sequelize.models.manga.update({
        titulo: manga.titulo,  
        autor: manga.autor,
        genero: manga.genero,
        volumenes: manga.volumenes,
        fechaPublicacion: manga.fechaPublicacion,
        sinopsis: manga.sinopsis,
        calificacion: manga.calificacion,
        editorial: manga.editorial,
        precio: manga.precio,
        imagen: manga.imagen
    }, {
        where: {
            id
        },
        returning: true
    });
    return updatedManga;
}

async function destroy(id) {
    const manga = await sequelize.models.manga.findByPk(id);
    if (!manga) {
        return null;
    }
    await manga.destroy();
    return manga;
}

export {
    carrito,
    agregar,
    update,
    destroy
};
