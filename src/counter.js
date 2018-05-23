import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Displaycomment} from './displaycomment';
import {DisplayCode} from './displayCode';

class Counter extends Component {
    constructor() {
        super();
        this.state = {
            commentList:[],
            name: '',
            comment: ''
        }
    }


    updateName(value) {
        this.setState({
            name: value
        })
    }

    updateComment(value) {
        this.setState({
            comment: value
        })
    }

    submit() {
        const prevComments = this.state.commentList;

        const updatedComments = [
            ...prevComments, 
            {
                name: this.state.name,
                comment: this.state.comment

        }]
        this.setState({
            commentList:  updatedComments,
            name: '',
            comment: ''
        })

    }


  render() {
    return (
      <div className="App">
      <Displaycomment comment={this.state.commentList}/>
       <h1>{this.props.heading}</h1>
        <div><input type="text" name="name" onChange={(e)=> this.updateName(e.target.value)} value={this.state.name}/>
        </div>  
        <div>
        <textarea type="text" name="comment" onChange={(e)=> this.updateComment(e.target.value)} value={this.state.comment}/>
        </div>
       <button onClick={() => this.submit()}>Add Comment</button>
       
    {this.state.commentList.length > 0 && <DisplayCode code={this.state.commentList[this.state.commentList.length - 1]}/> }
      </div>
    );
  }
}

export default Counter;
