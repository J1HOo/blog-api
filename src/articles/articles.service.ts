import { Injectable } from '@nestjs/common';
import { articles, Article } from 'src/dummy';

@Injectable()
export class ArticlesService {
  getArticles() {
    return articles;
  }

  getArticle(id: number) {
    return articles.find((article) => article.id === id);
  }

  addArticle(article: Article) {
    articles.push(article);
  }
}
