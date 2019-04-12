import React, { Component } from "react";

import { getMessages } from "./services/api";

import Message from "./components/Message";
import PostMessage from "./components/PostMessage";

class App extends Component {

  render() {
    return (
      <div>
        <div>
          <h2>Post a message :</h2>
          <PostMessage />
        </div>
        <div>
          <h2>Messages :</h2>
          {getMessages().map((message, index) => (
            <Message
              key={`message_${index}`}
              isPublic={message.isPublic}
              content={message.content}
            />
          ))}
        </div>
      </div>
    )
  }
};

export default App;
