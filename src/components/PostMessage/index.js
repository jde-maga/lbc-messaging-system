import React, { Component } from "react";

import { postMessage } from "../../services/api";

import styles from "./styles.css";

class PostMessage extends Component {
  state = {
    res: null
  };

  onSubmit = (e) => {
    e.preventDefault();

    const data = {
      content: e.target.content.value,
      isPublic: e.target.type.value === "1" ? true : false
    }
    const res = postMessage(data);
    if (res.code === "OK") {
      this.setState({ res: res.message });
    }

  }

  render() {
    const { res } = this.state;
    return (
      <div className={styles.container}>
        <form onSubmit={this.onSubmit}>
          <label>Public<input type="radio" name="type" value="1" /></label>
          <label>Private<input type="radio" name="type" value="0" /></label><br />
          <label>Content : <br /><textarea name="content" /></label><br />
          <input type="submit" value="Submit" /><br />
          {res}
        </form>
      </div>
    )
  }
};

export default PostMessage;
