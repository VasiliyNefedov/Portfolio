
let rerenderEntireTree = () => {
  console.log('state is changed');
}

let state = {
  messageData: [
    { nickname: "John", message: "test text 1" },
    { nickname: "Bob", message: "test text 2" },
    { nickname: "Tim", message: "test text 4" }
  ]
};

export let addPost = (postMess, postName) => {
  let newPost = {
    nickname: postName,
    message: postMess
  };
  state.messageData.push(newPost);
  rerenderEntireTree(state);
};

export const subscribe = (observer) => {
  rerenderEntireTree = observer;
  rerenderEntireTree();
}

export default state;
