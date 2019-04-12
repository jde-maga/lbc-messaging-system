import React, { Component } from "react";
import PropTypes from "prop-types";

import styles from "./styles.css";

console.log(styles);

class Message extends Component {
  static propTypes = {
    content: PropTypes.string.isRequired,
    isPublic: PropTypes.bool.isRequired,
  }

  render() {
    const { content, isPublic } = this.props;

    return (
      <div className={styles.container}>
        <div>Message type : {isPublic ? "Public" : "Private"}</div>
        <div>Message content : {content} </div>
      </div>
    )
  }
};

export default Message;