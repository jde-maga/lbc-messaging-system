import mock from "./mock";

const postMessage = ({ content, isPublic }) => {
  console.log(`posting message\ncontent : ${content}\nispublic : ${isPublic}`);
  return { code: "OK", message: "Message sent" };
};

const getMessages = () => {
  return mock;
};

export {
  postMessage,
  getMessages
}
