import React, { Component } from 'react';
import CommentList from './CommentList';

class Article extends Component {

  constructor(props) {
    super(props);

    this.state = {
      isOpen: false
    }
  }


  render() {
    const { article } = this.props;
    const { isOpen } = this.state;

    return (
      <div >
        <h3>{article.title}</h3>
        <button onClick={this.toggleOpen}>{ this.getTitleButton() } </button>
        <section> {this.getBody()} </section>
        <section className="comments">
          {this.getComment()}
        </section>
      </div>
    );
  }

  getStateIsOpen () {
    return this.state.isOpen;
  }


  getBody() {
    if(!this.getStateIsOpen ()) {
      return null;
    }
    const { article } = this.props;

    return <section>{article.text}</section>;
  }

  getComment() {
    if(!this.getStateIsOpen ()) {
      return null;
    }
    const { article } = this.props;

    return <CommentList comments={article.comments}/>;
  }



  toggleOpen = () => {
    this.setState({
      isOpen:!this.state.isOpen
    });
  }

  getTitleButton () {
    return !this.getStateIsOpen() ? 'Open' : 'Close';
  }

}

export default Article;
