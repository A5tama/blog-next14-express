import { comparePassword } from '@/lib/bcrypt';
import prisma from '@/prisma';
import { User } from '@prisma/client';
import { sign } from 'jsonwebtoken';
import { JWT_SECRET } from '@/config';

export const loginService = async (body: Pick<User, 'email' | 'password'>) => {
  try {
    const { email, password } = body;

    const user = await prisma.user.findFirst({
      where: { email },
    });

    if (!user) {
      throw new Error('Email is invalid');
    }

    const isPasswordValid = await comparePassword(password, user.password);
    

    if (!isPasswordValid) {
      throw new Error('password is incorrect');
    }

    const token = sign({id: user.id}, JWT_SECRET, {
      expiresIn: '2h'
    });

    return {
      message: 'login success',
      data: user,
      token,
    };
  } catch (error) {
    throw error;
  }
};
