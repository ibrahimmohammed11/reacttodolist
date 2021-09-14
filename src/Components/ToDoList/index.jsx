import React, { Component, Fragment } from 'react'
import Styles from "./style.module.css";

export default class ToDoList extends Component {
    render() {
        let { id, task, time } = this.props.item;
        return (
            <Fragment>
                <div>
                    <span className={Styles.task}>{task}</span>
                    <span className={Styles.time}>{time}</span>
                    <span className={Styles.action} onClick={() => this.props.deleteTask(id)}><i className={`${Styles.closeSt} far fa-times-circle`}></i></span>
                </div>
            </Fragment>
        )
    }
}
