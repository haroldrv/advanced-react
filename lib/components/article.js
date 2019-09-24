import React from 'react';
import PropTypes from 'prop-types';

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

Article.propTypes = {
  article: PropTypes.shape({
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
  })
};

export default Article;