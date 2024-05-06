module.exports = {
    up: (queryInterface, Sequelize) => queryInterface.createTable('employees', {
        empno: {
            allowNull: false,
            primaryKey: true,
            type: Sequelize.INTEGER,
        },
        ename: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        job: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        mgr: {
            type: Sequelize.INTEGER,
            allowNull: false,
        },
        hiredate: {
            type: Sequelize.DATE,
            allowNull: false,
        },
        sal: {
            type: Sequelize.DECIMAL,
            allowNull: false,
        },
        comm: {
            type: Sequelize.DECIMAL,
            allowNull: true,
        },
        deptno: {
            type: Sequelize.INTEGER,
            allowNull: false,
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
    down: (queryInterface) => queryInterface.dropTable('employees'),
};
