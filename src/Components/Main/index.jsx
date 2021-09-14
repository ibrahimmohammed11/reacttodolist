import React, { Component, Fragment } from 'react';
import AddItem from '../AddItem';
import ToDoList from '../ToDoList';
import Styles from "./style.module.css";
export default class Main extends Component {
    state = {
        items: [
            // { id: 1, task: "football", time: "10" },
            // { id: 2, task: "swimming", time: "11" },
            // { id: 3, task: "playstation", time: "12" },
            // { id: 4, task: "javascript", time: "13" },
        ]
    }
    addToLocalStorage = (items) => {
        localStorage.setItem("items", JSON.stringify(items));
    };
    componentDidMount() {
        let items = JSON.parse(localStorage.getItem("items"));
        if (items !== null) {
            this.setState({ items });
        }
    }
    deleteTask = (id) => {
        let items = [...this.state.items];
        // items = items.filter((item) => item.id !== id);
        // this.setState({
        //     items
        // })
        let index = items.findIndex((item) => item.id === id);
        items.splice(index, 1);
        this.setState({
            items
        })
        this.addToLocalStorage(items);

    }
    AddNewItem = (item) => {
        item.id = Math.random().toFixed(4);
        let items = [...this.state.items];
        items.push(item);
        this.setState({ items });
        this.addToLocalStorage(items);

    }
    render() {
        let { items } = this.state;
        return (
            <Fragment>
                <div className={Styles.container1}>
                    <div className={Styles.formStyle}>
                        <h1>Todo List</h1>
                        <div className={Styles.listItems}>
                            <div>
                                <span className={`${Styles.title} ${Styles.task}`}>task</span>
                                <span className={`${Styles.title} ${Styles.time}`}>time</span>
                                <span className={`${Styles.title} ${Styles.action}`}>action</span>
                            </div>
                            {items.length > 0 ? items.map((item, key) => {
                                return <ToDoList key={key} item={item} deleteTask={this.deleteTask} />
                            }) : <div className="py-4"><b>You don't have tasks to show</b></div>}
                            <AddItem AddNewItem={this.AddNewItem} />



                        </div>

                    </div>

                </div>

            </Fragment>
        )
    }
}
