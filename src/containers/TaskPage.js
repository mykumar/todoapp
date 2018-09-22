import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { getAndSetValues } from "../actions";
import _ from "underscore";
import AddForm from "../components/AddForm";
import TaskFilters from "../components/task-filters";
import TaskForm from "../components/task-form";
import TaskList from "../components/task-list";

class TaskPage extends Component {
  state = {
    taskList: [],
    filter: null
  };

  componentWillMount() {
    this.setState({
      taskList: this.props.data.taskList
    });
  }

  componentWillReceiveProps(props) {
    console.log(props);
    if (props.location.search !== this.props.location.search) {
      console.log(this.getFilterParam(props.location.search));
      const filter = this.getFilterParam(props.location.search);
      let filterData = props.data.taskList;
      if (filter === "active") {
        filterData = filterData.filter(k => !k.completed);
      } else if (filter === "completed") {
        filterData = filterData.filter(k => k.completed);
      }
      this.setState({
        filter: this.getFilterParam(props.location.search),
        taskList: filterData
      });
    } else {
      this.setState({
        taskList: props.data.taskList
      });
    }
  }

  getFilterParam(search) {
    const params = new URLSearchParams(search);
    return params.get("filter");
  }

  handleSubmit = data => {
    let originalData = this.props.data.taskList;
    let arr = originalData;
    let newData = {
      title: data,
      completed: false
    };
    arr.push(newData);
    this.props.getAndSetValues("taskList", arr);
  };

  handleUpdate = (key, data) => {
    let originalData = this.props.data.taskList;
    let arr = originalData;
    if (data.title) {
      arr[key].title = data.title;
    } else {
      arr[key].completed = data.completed;
    }
    this.props.getAndSetValues("taskList", arr);
  };

  handleRemove = key => {
    let originalData = this.props.data.taskList;
    let arr = originalData;
    arr = arr.filter((d, i) => i !== key);
    console.log(key, arr);

    this.props.getAndSetValues("taskList", arr);
  };

  render() {
    const { taskList, modalIsOpen, editData, dataKey, edit } = this.state;
    return (
      <div>
        <div className="row m-0 page-container main-container">
          <div className="g-row">
            <div className="g-col">
              <TaskForm handleSubmit={this.handleSubmit} />
            </div>

            <div className="g-col">
              <TaskFilters filter={this.state.filter} />
              <TaskList
                removeTask={this.handleRemove}
                tasks={taskList}
                updateTask={this.handleUpdate}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const stateToProps = state => {
  return {
    data: state.taskData
  };
};
const actionCreators = {
  getAndSetValues: getAndSetValues
};

export default withRouter(connect(stateToProps, actionCreators)(TaskPage));
