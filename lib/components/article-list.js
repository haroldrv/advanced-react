import React from 'react';
import ArticleContainer from './article';

function ListComponent(props) {
  return (
    <div>
      {Object.values(props.articles).map(article => 
        <ArticleContainer 
          article={article}
          key={article.id}>
        </ArticleContainer>
      )}
    </div>
  );
}

export default ListComponent;