import React, { Component } from 'react';


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
        const   comment   = this.props.article;
        console.log(comment);
        //return null;
        return <section>{comment.text}</section>;
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
