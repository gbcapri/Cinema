import jwt from 'jsonwebtoken';

// Chave secreta para assinar o token (deve ser mantida em segredo)
const JWT_SECRET = process.env.JWT_SECRET || 'secreta_uma_chave_forte';

// Função para gerar o token JWT
const generateToken = (userId, role) => {
  const payload = {
    userId,
    role,
  };

  // Expiração do token (opcional)
  const options = {
    expiresIn: '1h', // Token expira em 1 hora
  };

  // Gera e retorna o token JWT
  return jwt.sign(payload, JWT_SECRET, options);
};

// Função para verificar se o token JWT é válido
const verifyToken = (token) => {
  try {
    return jwt.verify(token, JWT_SECRET);
  } catch (err) {
    throw new Error('Token inválido ou expirado');
  }
};

export { generateToken, verifyToken };
