import React from "react";
import s from "../Content.module.css";

class Status extends React.Component {
  state = {
    editMode: false,
    status: this.props.status,
  };
  activateEditMode = () => {
    this.setState({
      editMode: true,
    });
  };
  deactivateEditMode = () => {
    this.setState({
      editMode: false,
    });
  };

  onStatusChange = (e) => {
    this.setState({
      status: e.target.value,
    });
    this.props.updateUserStatus(this.state.status);
  };

  render() {
    return (
      <div>
        {!this.state.editMode && (
          <div className={s.status}>
            <span onDoubleClick={this.activateEditMode}>
              {this.props.status}
            </span>
          </div>
        )}
        {this.state.editMode && (
          <div className={s.status}>
            <input
              onChange={this.onStatusChange}
              autoFocus={true}
              onBlur={this.deactivateEditMode}
              value={this.state.status}
            />
          </div>
        )}
      </div>
    );
  }
}

export default Status;
