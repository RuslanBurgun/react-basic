import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CommentList from './CommentList';
import toggleOpen from '../decorators/toggleOpen';

class Article extends Component {

  static propTypes = {
    article: PropTypes.shape({
      id:PropTypes.number.isRequired,
      title:PropTypes.string.isRequired,
      text:PropTypes.string.isRequired,
    }).isRequired
  };

  constructor(props) {
    super(props);
  }


  render() {
    const { article, isOpen, toggleOpen } = this.props;

    return (
      <div >
        <h3>{article.title}</h3>
        <button onClick={toggleOpen}>{ this.getTitleButton() } </button>
        <section>
            { this.getBody() }
        </section>
      </div>
    );
  }

  getStateIsOpen () {
    const { isOpen } = this.props;
    return isOpen;
  }

  getBody() {
    if(!this.getStateIsOpen ()) {
      return null;
    }
    const { article } = this.props;

    return (
    <section>
        {article.text}
      <hr/>
      <CommentList comments = {article.comments}/>
    </section>)
  }

  getTitleButton () {
    return !this.getStateIsOpen() ? 'Open' : 'Close';
  }

}

export default toggleOpen(Article);
