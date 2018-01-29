import React, { Component, PropTypes } from 'react'

export default class AddTodo extends Component {
   render() {
      return (
         <div>
            <input type = 'text' ref = 'input' />
            <h1 ref='myH1' ></h1>

            <button onClick = { (e) => this.handleClick(e) }>
               Add
            </button>
         </div>
      )
   }
   handleClick(e) {
    //   console.log(this.refs.myH1);
      const node = this.refs.input
      const text = node.value.trim()
      console.log(text);
      this.props.onAddClick(text)
      node.value = ''
   }
}
