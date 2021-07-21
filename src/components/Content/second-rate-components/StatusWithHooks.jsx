import React, { useState, useEffect } from "react";
import s from "../Content.module.css";

const StatusWithHooks = (props) => {
  let [editMode, setEditMode] = useState(false);
  let [status, setStatus] = useState(props.status);

  useEffect(() => {
    setStatus(props.status);
  }, [props.status]);

  let activateEditMode = () => {
    setEditMode(true);
  };

  let deactivateEditMode = () => {
    setEditMode(false);
    props.updateUserStatus(status);
  };

  let onStatusChange = (e) => {
    setStatus(e.target.value);
  };

  return (
    <div>
      {!editMode && (
        <div className={s.status}>
          <span onDoubleClick={activateEditMode}>{props.status}</span>
        </div>
      )}
      {editMode && (
        <div className={s.status}>
          <input
            onChange={onStatusChange}
            onBlur={deactivateEditMode}
            autoFocus={true}
            value={status}
          />
        </div>
      )}
    </div>
  );
};

export default StatusWithHooks;
