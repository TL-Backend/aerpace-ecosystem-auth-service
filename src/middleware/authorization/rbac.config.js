const {
  aergov_roles,
} = require('../../services/aerpace-ecosystem-backend-db/src/databases/postgresql/models'); // Import your Sequelize roles model
const { logger } = require('../../utils/logger');

module.exports = async () => {
  try {
    const allRoles = await aergov_roles.findAll({ raw: true }); // Retrieve all roles from the database
    const rbacConfig = {};

    allRoles.forEach((role) => {
      rbacConfig[role.role_name] = {};
      rbacConfig[role.role_name]['can'] = role.permission_list; // Use the permission_list column to define permissions for each role
    });

    return rbacConfig;
  } catch (err) {
    logger.error('RBAC configuration error:', err.message);
    throw err;
  }
};
