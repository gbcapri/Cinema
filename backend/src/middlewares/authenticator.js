import { verifyToken } from '../utils/jwt-service.js';

const authenticator = (req, res, next) => {
  const token = req.headers['authorization']?.split(' ')[1];

  if (!token) {
    return res.status(403).json({ message: 'Token não fornecido' });
  }

  try {
    const decoded = verifyToken(token); // Verifica e decodifica o token
    req.user = decoded; // Armazena os dados do usuário no objeto `req`
    next(); // Chama o próximo middleware ou rota
  } catch (err) {
    return res.status(401).json({ message: 'Token inválido ou expirado' });
  }
};

export default authenticator; 