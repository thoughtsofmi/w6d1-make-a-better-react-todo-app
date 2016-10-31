import React, { Component } from 'react'


const TodoItem = (props) => (
    <div className="row">
        <div className="col-sm-12" onClick={props.markDone}>
            <input type="checkbox" checked={props.item.done}/>
                <span style={{textDecoration:props.item.done?'line-through':''}}>{props.item.text}</span>

        </div>
    </div>
)//item, key, markdone is an object that goes into this prop words.  props is an object.

export default TodoItem
