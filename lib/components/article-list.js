import React from 'react';
import Article from './article';

function ListComponent(props) {
  return (
    <div>
      {Object.values(props.articles).map(article => 
        <Article 
          article={article}
          key={article.id}
          articleActions={props.articleActions}>
        </Article>
      )}
    </div>
  );
}

export default ListComponent;