let store = {
  _state: {
    messageData: [
      { nickname: "John", message: "test text 1" },
      { nickname: "Bob", message: "test text 2" },
      { nickname: "Tim", message: "test text 4" }
    ]
  },
  getState() {
    return this._state;
  },
  _callSubscriber() {
    console.log("state is changed");
  },
  subscribe(observer) {
    this._callSubscriber = observer;
    this._callSubscriber();
  },
  dispatch(action) {
    // { type: 'ADD-POST'}
    if (action.type === "ADD-POST") {
      let newPost = {
        nickname: action.postName,
        message: action.postMess
      };
      this._state.messageData.push(newPost);
      this._callSubscriber(this._state);
    };
  }
};

const ADD_POST  = "ADD-POST";

export const addPostActionCreator = (text, name) => {
  return {
    type: ADD_POST,
    postMess: text,
    postName: name
  };
};

export default store;

window.store = store;
