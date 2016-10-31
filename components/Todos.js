import React, { Component } from 'react'
import TodoItem from './TodoItem' //importing the list item.  what we wrote.


class Todos extends Component {
    constructor(props) {
        super(props)
        this.typing = this.typing.bind(this)
        this.enter = this.enter.bind(this)
        this.markDone = this.markDone.bind(this)

        this.state= {
            newTodo: '',
            todos: []
        }
    } //methods we build to bind on the constructor.  last is setting the intitial starting state.
    typing(e) {
        this.setState({
            newTodo: e.target.value
        })
    }//tell react to setState newTodo
    enter(e){
        if (e.key === "Enter"){
            let updatedTodos = this.state.todos //can't modify directly. this basically a copy.  mutating that let.  we have to do it like this in react.
            updatedTodos.push({
                text: e.target.value,
                done: false //tells us when the item is done
            })
            this.setState({
                newTodo: '', //we don't have to copy this one.
                todos: updatedTodos //need to make a new array to push it on
            })
        }
    }
    markDone(currentTodoIndex) {
    let updatedTodos = this.state.todos
    //updatedTodos[currentTodoIndex].done = !updatedTodos[currentTodoIndex].done //change the done property.  first is the path to get to the object and set it tup updated todos that are not done. toggling back and forth the true and false value
    if(updatedTodos[currentTodoIndex].done === false) {
        updatedTodos[currentTodoIndex].done = true
    }
    else {
        updatedTodos[currentTodoIndex].done = false
    }
    this.setState({
        todos:updatedTodos
    })
    }
    render(){
        var todoListOfComponents= this.state.todos.map((todoItem, i) => {
            return <TodoItem item={todoItem} key={i} markDone={()=> this.markDone(i)} /> //i passed in the i, because i needed to know which item number in the array to be done. onClick is when it runs that code.  
        }) //this is mapping to rearray the items.  todoItem is an object. i is the index number.  number of loops it goes through. every component i.  item, key, markDone are properties = arbituary.

        return <div>
        <input type="text" className="form-control" placeholder="Never Ending Todos...." value={this.state.newTodo} onChange={this.typing} onKeyPress={this.enter}/>
        <div> {todoListOfComponents} </div>
        </div>

    }
} // component
/// have to have a render method.  and render has to return jsx code
/// any time set state happens. it reruns render

export default Todos
