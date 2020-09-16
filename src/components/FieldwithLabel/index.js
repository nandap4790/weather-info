import React from "react";
import { string } from "prop-types";

import styles from "./FieldWithLabel.module.css";

const FieldWithlabel = ({
  wrapperClass,
  label,
  value1,
  value2,
  value1Class,
}) => {
  const wrapperClassName = wrapperClass || "field-wrapper";
  const value1ClassName = value1Class || "field-val";

  return (
    <div className={styles[wrapperClassName]}>
      <span className={styles["field-label"]}>{label}: </span>
      {value1 && <span className={styles[value1ClassName]}>{value1}</span>}
      {value2 && <span className={styles["field-val"]}>{value2}</span>}
    </div>
  );
};

FieldWithlabel.propTypes = {
  wrapperClass: string,
  label: string,
  value1: string,
  value2: string,
  value1Class: string,
};

export default FieldWithlabel;
