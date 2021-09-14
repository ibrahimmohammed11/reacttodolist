import React, { Component, Fragment } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Styles from "./style.module.css";

export default class AddItem extends Component {
    state = {
        task: '',
        time: '',
    }
    handleFormData = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    handleSubmitForm = (e) => {
        e.preventDefault();

        if (e.target.task.value === "" || e.target.time.value === "") {
            toast.error("Please enter your new task and its time")
        } else {
            this.props.AddNewItem(this.state);
            this.setState({  // for reset form with value of each input
                task: '',
                time: '',
            })
        }
    }
    render() {

        return (
            <Fragment>
                <ToastContainer />

                <form className="d-flex" onSubmit={this.handleSubmitForm}>
                    <input onChange={this.handleFormData} value={this.state.task} type="text" id="task" className={Styles.task} placeholder="your task..." />
                    <input onChange={this.handleFormData} value={this.state.time} type="datetime-local" id="time" className={Styles.time} placeholder="Task time..." />
                    <button className={Styles.action}>add</button>
                </form>
            </Fragment>
        )
    }
}
