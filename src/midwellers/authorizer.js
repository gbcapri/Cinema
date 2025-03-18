export default (roles = []) => (req, res, next) => {
  if (roles.includes(req.user.role)) {
    next();
  } else {
    res.status(403).json({ message: 'Acesso negado. Permissões insuficientes.' });
  }
};
