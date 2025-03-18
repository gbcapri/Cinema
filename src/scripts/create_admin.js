import bcrypt from 'bcrypt';
import User from './models/user.js';

const createAdminUser = async () => {
  const passwordHash = await bcrypt.hash('admin', 10);
  
  const adminUser = new User({
    username: 'admin',
    password: passwordHash,
    role: 'admin',
  });

  await adminUser.save();
  console.log('Admin user created!');
};

createAdminUser();
