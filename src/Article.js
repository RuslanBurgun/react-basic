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
        <section>
            {this.getBody()}
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

    return (
    <section>
        {article.text}
      <hr/>
      <CommentList comments = {article.comments}/>
    </section>)
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
