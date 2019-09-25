import React, { useState, useEffect } from 'react';
import ArticleList from './article-list';
import { getArticles, getAuthors } from '../dataApi';

function App() {
  const [data, setData] = useState({
    authors: {},
    articles: {}
  });
  const articleActions = {
    lookupAuthor: authorId => data.authors[authorId]
  };

  useEffect(() => {
    fetch('/data')
      .then(response => response.json())
      .then(data => {
        const authors = getAuthors(data);
        const articles = getArticles(data);
        setData({ authors, articles });
      });
  }, []);

  return (
    <AuthorContext.Provider value={articleActions}>
      <ArticleList articles={data.articles}></ArticleList>
    </AuthorContext.Provider>
  );
}

export default App;
export const AuthorContext = React.createContext({});