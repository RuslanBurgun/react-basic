import React from 'react';
import ReactDOM from 'react-dom';
import ArticleList from './ArticleList';
import  articles  from './fixtures';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<ArticleList articles = {articles} />, document.getElementById('root'));
registerServiceWorker();
