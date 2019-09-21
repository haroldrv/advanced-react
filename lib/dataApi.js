function getArticles(rawData) {
  return mapIntoObject(rawData.articles);
}

function getAuthors(rawData){
  return mapIntoObject(rawData.authors);
}

function mapIntoObject(arr) {
  return arr.reduce((accumulator, curr) => {
    accumulator[curr.id] = curr;
    return accumulator;
  }, {});
}

export { getArticles, getAuthors };