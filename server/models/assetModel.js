module.exports = (sequelize, DataTypes) => {
    const Asset = sequelize.define('Asset', {
        image: {
            type: DataTypes.STRING,
            allowNull:false
        },
        category: {
            type: DataTypes.STRING,
            allowNull:false
        },
        name: {
            type: DataTypes.STRING,
            allowNull:false
        },
        brand: {
            type: DataTypes.STRING,
            allowNull:false
        },
        acquired_date: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        condition: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        maintenance_date: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        lifespan: {
            type: DataTypes.STRING,
            allowNull:false
        }
    })

    return Asset
}