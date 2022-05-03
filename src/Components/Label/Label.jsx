import React from "react";
import styles from "./Label.module.css";
import PropTypes from "prop-types";
function Label({ text }) {
  return <label className={styles.label}>{text}</label>;
  
}
export default Label;
Label.propTypes = {
  text: PropTypes.string,
};
