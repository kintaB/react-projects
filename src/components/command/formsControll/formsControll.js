import React from "react";
import s from "./forms.module.css";

export const Textarea = ({ input, meta, ...props }) => {
  const hasError = meta.touched && meta.error;
  return (
    <>
      <div className={s.formControll}>
        <div className={hasError ? s.error : ""}>
          <textarea {...input} {...props} {...meta}></textarea>
          {hasError && <span className={s.error}>{meta.error}</span>}
        </div>
      </div>
    </>
  );
};

export const Input = ({ input, meta, ...props }) => {
  const hasError = meta.touched && meta.error;
  return (
    <>
      <div className={s.formControll}>
        <div className={hasError ? s.error : ""}>
          <input {...input} {...props} {...meta}></input>
          {hasError && <span className={s.error}>{meta.error}</span>}
        </div>
      </div>
    </>
  );
};
