import axios from "axios";
import { Request, Response } from "express";
import { Controller, Get, Req, Res } from "routing-controllers";

@Controller("/api")
export class HelloWorld {
  @Get("/")
  async helloWorld(): Promise<string> {
    return "hello world";
  }

  @Get("/posts")
  async getPosts(@Req() req: Request, @Res() res: Response): Promise<any> {
    const result = await axios.get(
      "https://jsonplaceholder.typicode.com/posts"
    );

    return res.status(201).json(result.data).end();
  }
}
