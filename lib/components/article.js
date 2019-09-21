import React from 'react';

function Article(props) {
  const { articleActions, article } = props;
  const author = articleActions.lookupAuthor(article.authorId);
  return (
    <>
      <div>{article.title}</div>
      <div>{article.data}</div>
      <br />
      <div>
        <div>
          <a href={author.website}>{author.firstName}</a>
        </div>
      </div>
    </>
  );
}

export default Article;