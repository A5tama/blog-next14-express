import { JWT_SECRET, NEXT_BASE_URL } from '@/config';
import { transporter } from '@/lib/nodemailer';
import prisma from '@/prisma';
import { sign } from 'jsonwebtoken';

export const forgotPasswordService = async (email: string) => {
  try {
    const user = await prisma.user.findFirst({
      where: { email },
    });

    if (!user) {
      throw new Error('Email is invalid');
    }

    const token = sign({id: user.id}, JWT_SECRET, {
      expiresIn: '30m'
    });

    const link = NEXT_BASE_URL + `reset-password?token=${token}`;

    await transporter.sendMail({
        from: 'Admin',
        to: email,
        subject: 'Link Reset Password',
        html: `<a herf="${link}" target=""_blank">Reset Password Here</a>`
    });
  } catch (error) {
    throw error;
  }
};
