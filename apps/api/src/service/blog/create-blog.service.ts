import prisma from "@/prisma";
import { Blog } from "@prisma/client"
interface CreateBlogBody extends Omit<Blog, "id" | "deletedAt" | "updatedAt" | "tumbnail"> {}

export const createBlogService = async (
    body: CreateBlogBody,
    file: Express.Multer.File,

) => {
    try {
        const {title, userId} = body;

        const existingTitle = await prisma.blog.findFirst({
            where: { title }
        })

        if(existingTitle) {
            throw new Error('title is already used')
        }

        const user = await prisma.user.findFirst({ where: {id: Number(userId) } });

        if(!user) {
            throw new Error ('user is not found')
        }

        return await prisma.blog.create({
            data: {
                ...body,
                thumbnail: `/images/${file.filename}`,
                userId: Number(userId)
            }
        })
    } catch (error) {
        throw error;
    }
}