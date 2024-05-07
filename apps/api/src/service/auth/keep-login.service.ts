import prisma from "@/prisma";

export const KeepLoginService = async (id: number) => {
    try {

        const user = await prisma.user.findFirst({
            where: { id },
        });

        if(!user) {
            throw new Error ("userId is invalid");
        }

        return {
            message: "keep login success",
            data: user,
            
        }
    } catch (error) {
        throw error;
    }
}