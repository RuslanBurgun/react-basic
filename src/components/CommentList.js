import React, { Component } from 'react';
import Comment from "./Comment";
import toggleOpen from '../decorators/toggleOpen';


class CommentList extends Component {
    static defaultProps = {
        comments:[]
    };

    render() {
        return (
            <div >
                <button onClick={this.props.toggleOpen}>{ this.getTitleButton() } button</button>
                <section> {this.getBody()} </section>
            </div>
        );
    }

    getStateIsOpen () {
        return this.props.isOpen;
    }

    getBody() {
        if(!this.getStateIsOpen ()) {
            return null;
        }

        const { comments }  = this.props;
        let answer;

        if(!comments.length>0){
          answer =  <p>No comments found</p>;
        }else{
          answer = (
              <ul>
                   {comments.map(comment=><li key = {comment.id}> <Comment comment = {comment}/></li>)}
             </ul>)
        }

        return answer;
    }

    toggleOpen = () => {
        this.setState({
            isOpen:!this.state.isOpen
        });
    };

    getTitleButton () {
        return !this.getStateIsOpen() ? 'Show comment' : 'Hide comment';
    }

}

export default toggleOpen(CommentList);