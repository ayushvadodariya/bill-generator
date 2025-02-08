import jwt from 'jsonwebtoken';
import User from '../models/user.js'

async function createToken(userId){
  const secret = process.env.JWT_SECRET;
  const user = await User.findById(userId, { password: 0});
  const token = await  jwt.sign(user.toObject(), secret);
  return token;
}

async function validateToken(token){
  const secret = process.env.JWT_SECRET;
  const payload = await jwt.decode(token, secret);
  return payload;
}

export { createToken, validateToken};