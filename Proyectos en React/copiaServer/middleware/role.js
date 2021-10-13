const verifyRole = (roles) => {
  return async = (req, res, next) => {
    const rol = req.user.role
    if (!roles.includes(rol)) {
      return res.status(401).json({ message: 'No tienes permiso para hacer esto' });
    }
    return next();
  };
};

module.exports = verifyRole;