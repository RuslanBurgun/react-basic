import React from 'react';
import ReactDOM from 'react-dom';
import ArticleList from './components/ArticleList';
import  articles  from './fixtures';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<ArticleList articles = {articles} />, document.getElementById('root'));
registerServiceWorker();
