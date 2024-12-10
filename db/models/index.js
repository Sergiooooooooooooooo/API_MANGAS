import { defineMangas } from './mangas.model.js'
import { defineUsers } from './users.model.js'
import { defineFormularios } from './formulario.model.js'
import { defineCategorias } from './categoria.model.js'


export function defineModels(sequelize){
    const Manga = defineMangas(sequelize);
    const Categoria = defineCategorias(sequelize);
    const User = defineUsers(sequelize);
    const Formulario = defineFormularios(sequelize);

     // Configurar asociaciones
    Manga.belongsToMany(Categoria, { through: 'MangaCategoria' });
    Categoria.belongsToMany(Manga, { through: 'MangaCategoria' });

    Categoria.associate({ Manga });

    // Retornar modelos definidos (opcional, pero útil)
    return {
        Manga,
        User,
        Formulario,
        Categoria,
    };
}
