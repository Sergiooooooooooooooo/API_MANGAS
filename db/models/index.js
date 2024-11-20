import { defineMangas } from './mangas.model.js'

export function defineModels(sequelize){
    defineMangas(sequelize)

}