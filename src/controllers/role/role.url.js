exports.roleUrls = {
  LIST_ROLES: `roles`,
  ADD_ROLES: `roles`,
  EDIT_ROLES: ({ id }) => {
    return `roles/${id}`;
  },
  DELETE_ROLES: ({ id }) => {
    return `roles/${id}`;
  },
};
