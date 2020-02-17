import React from "react";
import "./Messages.css";
import ShowMessages from "./ShowMessages/ShowMessages";

const Messages = props => {
  let newPostText = React.createRef();
  let newPostName = React.createRef();

  let addPost = () => {
    let text = newPostText.current.value;
    let name = newPostName.current.value;
    props.addPost(text, name);
    newPostText.current.value = '';
    newPostName.current.value = '';
  };

  return (
    <div className="messages">
      <div className="decor">
        <div className="send-message-form">
          <div className="send-message-form__title">
            Здесь вы можете отправить мне сообщение, свои отзывы и пожелания.
          </div>
          <div className="send-message-form__container">
            <div className="send-message-form__text">
              <textarea
                ref={newPostText}
                placeholder=" Введите ваше сообщение"
                className="send-message-form__text decor-text-forms"
                tabIndex="1"
                maxLength="500"
              ></textarea>
            </div>
            <div className="send-message-form__name">
              <input
                ref={newPostName}
                placeholder="  Введите ваше имя"
                className="send-message-form__name decor-text-forms"
                tabIndex="2"
                maxLength="30"
              ></input>
            </div>
            <div className="send-message-form__button">
              <button onClick={addPost} className="send-message-form__button">
                Отправить
              </button>
            </div>
          </div>
        </div>
      </div>
      <ShowMessages messageData={props.messageData} />
    </div>
  );
};

export default Messages;
