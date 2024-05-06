module.exports = {
    up: (queryInterface, Sequelize) => queryInterface.createTable('departments', {
        deptno: {
            allowNull: false,
            primaryKey: true,
            type: Sequelize.INTEGER,
        },
        dname: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        loc: {
            type: Sequelize.STRING,
            allowNull: true,
        },
        created_at: {
            allowNull: false,
            type: Sequelize.DATE,
        },
        updated_at: {
            allowNull: false,
            type: Sequelize.DATE,
        },
    }),
    down: (queryInterface) => queryInterface.dropTable('departments'),
};
