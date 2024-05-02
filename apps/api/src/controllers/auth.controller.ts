import { forgotPasswordService } from "@/service/auth/forgot-password.service";
import { loginService } from "@/service/auth/login.service";
import { registerService } from "@/service/auth/register.service";
import { NextFunction, Request, Response } from "express";

export class AuthController {
    async registerController( req: Request, res:Response, next: NextFunction) {
        try {
            const result = await registerService(req.body)
            res.status(200).send(result);
        } catch (error) {
            next (error);
        }
    }

    async loginController( req: Request, res:Response, next: NextFunction ) {
        try {
            const result = await loginService(req.body);
            return res.status(200).send(result);
        } catch (error) {
            next (error);
        }
    }
    async forgotPasswordController( req: Request, res:Response, next: NextFunction ) {
        try {
            const result = await forgotPasswordService(req.body.email);
            return res.status(200).send(result);
        } catch (error) {
            next (error);
        }
    }
}