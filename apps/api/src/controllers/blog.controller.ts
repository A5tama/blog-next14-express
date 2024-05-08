import { createBlogService } from '@/service/blog/create-blog.service';
import { getBlogService } from '@/service/blog/get-blog-.service';
import { NextFunction, Request, Response } from 'express';

export class BlogController {
  async createBlogController(req: Request, res: Response, next: NextFunction) {
    try {
      const files = req.files as Express.Multer.File[];

      if (!files?.length) {
        throw new Error('no file uploaded');
      }

      const result = await createBlogService(req.body, files[0]);

      return res.status(200).send(result);
    } catch (error) {
      next(error);
    }
  }

  async getBlogController(req: Request, res: Response, next: NextFunction) {
    try {
      console.log('execccc');
      
      const id = req.params.id;
      const result = await getBlogService(Number(id));

      return res.status(200).send(result);
    } catch (error) {
      next(error);
    }
  }
}
