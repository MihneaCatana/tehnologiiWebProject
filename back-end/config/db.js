const Sequelize = require("sequelize");
const sequelize = new Sequelize("tw-db", "root", "", {
  host: "localhost",
  dialect: "mysql",
  define: {
    timestamps: true,
  },
});

module.exports = sequelize;
