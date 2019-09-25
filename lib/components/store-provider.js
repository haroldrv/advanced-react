import React, { useContext } from 'react';
import { AuthorContext } from './app';

const withStore = Component => props => {
  const authorContext = useContext(AuthorContext);
  return <Component {...props} authorContext={authorContext} />;
};

export default withStore;