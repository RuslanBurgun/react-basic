import React, { Component } from 'react';
import Comment from "./Comment";


class CommentList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isOpen: true
        }
    }


    render() {
        return (
            <div >
                <button onClick={this.toggleOpen}>{ this.getTitleButton() } button</button>
                <section> {this.getBody()} </section>
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

        const { comments }  = this.props;

        if(!comments || !comments.length){
            return <p>No comments found</p>
        }
        return(
              <ul>
                 {comments.map(comment=><li key = {comment.id}> <Comment comment = {comment}/></li>)}
               </ul>
             )
    }


    toggleOpen = () => {
        this.setState({
            isOpen:!this.state.isOpen
        });
    };

    getTitleButton () {
        return !this.getStateIsOpen() ? 'Open comment' : 'Close comment';
    }

}

export default CommentList;