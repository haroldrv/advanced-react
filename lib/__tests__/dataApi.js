import { getArticles } from '../dataApi';
import data from '../testData';


describe('dataApi', () => {
  it('exposes articles as objects', () => {
    const articles = getArticles(data);
    const articleId = data.articles[0].id;
    expect(articles).not.toBeNull();
    expect(articles).toHaveProperty(articleId);
    //expect(articles[articleId].id).toBe(articleId);

  });
});
