import classes from './Dialogs.module.css'
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";
import React from "react";



const Dialogs = (props) => {
    let dialogElements = props.dialogsData.map(dialog => <DialogItem profileImage={dialog.profileImage} name={dialog.name} id={dialog.id} className={classes.dialogItem} />)
    let messagesElements = props.messagesData.map(message => <Message className={classes.message} message={message.message}/>)
    let newMessageElement = React.createRef()

    let updateStateMessage = () => {
        let text = newMessageElement.current.value
        props.updateMessageField(text)
    }
    let newMessage = () => {
        props.sendMessage()
    }
    return (
        <div>
            <h1>📝 Сообщения</h1>
            <div className={classes.dialogs}>
                <div >
                    {dialogElements}
                </div>
                <div className={classes.messages}>
                    {messagesElements}
                    <div className={classes.dialTA}>
                        <textarea onChange={updateStateMessage} ref={newMessageElement} value={props.messageFieldContent}></textarea>
                        <button onClick={newMessage}>Отправить</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dialogs