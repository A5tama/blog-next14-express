import { createBlogService } from '@/service/blog/create-blog.service';
import { getBlogService } from '@/service/blog/get-blog.service';
import { getBlogsService } from '@/service/blog/get-blogs.service';
import { updateBlogService } from '@/service/blog/update-blog.service';
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
  async getBlogsController(req: Request, res: Response, next: NextFunction) {
    try {
      const query = {
        take: parseInt(req.query.take as string) || 10,
        page: parseInt(req.query.page as string) || 1,
        sortBy: (req.query.sortBy as string) || 'createdAt',
        sortOrder: (req.query.sortOrder as string) || 'desc',
        search: (req.query.search as string) || '',
      };

      const result = await getBlogsService(query);

      return res.status(200).send(result);
    } catch (error) {
      next(error);
    }
  }
  async updateBlogController(req: Request, res: Response, next: NextFunction) {
    try {
      console.log("isi req files", req.files);
      console.log('isi req body', req.body);
      

      const files = req.files as Express.Multer.File[];

      const result = await updateBlogService(
        Number(req.params.id),
        req.body,
        files[0],
      );

      return res.status(200).send(result);
    } catch (error) {
      next(error);
    }
  }
}
