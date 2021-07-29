import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
} from '@nestjs/common';
import { Article } from 'src/dummy';
import { ArticlesService } from './articles.service';

@Controller('articles')
export class ArticlesController {
  constructor(private readonly articlesService: ArticlesService) {}

  @Get()
  getArticles() {
    return this.articlesService.getArticles();
  }

  @Get(':id')
  getArticle(@Param('id', ParseIntPipe) id: number) {
    return this.articlesService.getArticle(id);
  }

  @Post()
  addArticle(@Body() article: Article) {
    return this.articlesService.addArticle(article);
  }

  @Delete(':id')
  deleteArticle(@Param('id', ParseIntPipe) id: number) {
    this.articlesService.deleteArticle(id);
  }
}
