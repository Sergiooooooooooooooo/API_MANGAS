import { DataTypes } from "sequelize";

export function defineMangas(sequelize){
    sequelize.define('manga', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        titulo: {
            type: DataTypes.STRING,
            allowNull: false
        },
        autor: {
            type: DataTypes.STRING,
            allowNull: false
        },
        genero: {
            type: DataTypes.STRING,
            allowNull: false
        },
        volumenes: {
            type: DataTypes.INTEGER,
            allowNull: false 
        },
        fechaPublicacion: {
            type: DataTypes.DATE,
            allowNull: false
        },
        sinopsis: {
            type: DataTypes.TEXT,
            allowNull: false 
        },
        calificacion: {
            type: DataTypes.DECIMAL(3, 2), 
            allowNull: false 
        },
        editorial: {
            type: DataTypes.STRING,
            allowNull: false
        }
    })
}
