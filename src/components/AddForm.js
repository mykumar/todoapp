import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import { quizForm } from "./Constants";

export default class AddForm extends React.Component {
  state = {
    Title: "",
    Option_1: "",
    Option_2: "",
    Option_3: "",
    Option_4: ""
  };

  componentWillReceiveProps(props) {
    console.log(props);
    this.setState({
      Title: props.data.title ? props.data.title : "",
      Option_1: props.data.options ? props.data.options[0] : "",
      Option_2: props.data.options ? props.data.options[1] : "",
      Option_3: props.data.options ? props.data.options[2] : "",
      Option_4: props.data.options ? props.data.options[3] : ""
    });
  }

  renderForm() {
    let data = quizForm;
    return data.map((k, i) => (
      <div key={i} style={{ fontSize: "20px", marginRight: "20px" }}>
        <TextField
          autoFocus
          margin="dense"
          id="name"
          label={k.replace("_", " ")}
          type="text"
          fullWidth
          value={this.state[k]}
          onChange={e => {
            this.setState({ [k]: e.target.value });
          }}
        />
      </div>
    ));
  }

  render() {
    return (
      <div>
        <Dialog
          open={this.props.open}
          onClose={this.props.handleClose}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">
            Add/Edit Question{this.props.edit && (
              <i
                className="fa fa-trash"
                onClick={() => {
                  this.props.handleRemove(this.props.dataKey);
                }}
              />
            )}
          </DialogTitle>

          <DialogContent>
            <DialogContentText>
              To Add a question, please enter your the Title of the Question
              here and its options.
            </DialogContentText>
            {this.renderForm()}
          </DialogContent>
          <DialogActions>
            <Button onClick={this.props.handleClose} color="primary">
              Cancel
            </Button>
            <Button
              onClick={() => {
                this.props.handleSubmit(this.state, this.props.dataKey);
              }}
              color="primary"
            >
              Submit
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}
