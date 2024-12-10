import { sequelize } from '../libs/sequelize.js';

async function categoria(){
    const categorias = await sequelize.models.Categoria.findAll()
    return categorias
}

async function create(Categoria){
    const newcategoria = await sequelize.models.Categoria.create({
        nombre: Categoria.nombre,
    });
    return newcategoria
}

async function show(id){
    const categoria = await sequelize.models.Categoria.findByPk(id)
    return categoria
}

async function update(id, categoria){
    const searchedCategoria = await sequelize.models.Categoria.findByPk(id)
    if(!searchedCategoria) {
        return false
    }
   const [rowsAffected, [updatedCategoria]] = await sequelize.models.Categoria.update({
    nombre: categoria.nombre  
    }, {
        where: {
            id
        },
        returning: true
    })
    return updatedCategoria
}

async function destroy(id) {
    const categoria = await sequelize.models.Categoria.findByPk(id);

    if (!categoria) {
        return null;
    }
    await categoria.destroy();
    return categoria;
}


        
export {
    categoria,
    create,
    show,
    update,
    destroy
}