import React from 'react';
import ArticleList from '../article-list';
import ShallowRenderer from 'react-test-renderer/shallow';

describe('article list', () => {
  it('renders correctly', () => {
    const testProps = {
      articles: {
        a: { id: 'a' },
        b: { id: 'b' }
      },
      articleActions: {
        lookupAuthor: jest.fn(() => ({}))
      }
    };
    const renderer = new ShallowRenderer();
    renderer.render(<ArticleList {...testProps}></ArticleList>);
    const result = renderer.getRenderOutput();

    console.log(result);
    expect(result.props.children.length).toBe(2);
    //expect(tree).toMatchSnapshot();
  });
});