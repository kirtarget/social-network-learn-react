import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from "react-router-dom";
import store from "./Redux/state";

const root = ReactDOM.createRoot(document.getElementById('root'));

export const renderEntireTree = () => {
    root.render(
        <React.StrictMode>
            <BrowserRouter>
                <App state={store.getState()}
                     createPost={store.createPost.bind(store)}
                     updateNewPostText={store.updateNewPostText.bind(store)}
                     sendMessage={store.sendMessage.bind(store)}
                     updateMessageField={store.updateMessageField.bind(store)}

                />
            </BrowserRouter>
        </React.StrictMode>
    )
}

renderEntireTree(store.getState())

store.subscribe(renderEntireTree)


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();