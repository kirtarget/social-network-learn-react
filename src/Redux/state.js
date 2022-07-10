let store = {
    _state: {
        profilePage: {
            posts: [
                {message: 'Hi! How are you all?', id: 1, likesCount: 12},
                {message: 'It\'s my first post', id: 2, likesCount: 8},
            ],
            newPostText: '',
        },
        messagesPage: {
            newMessageText: '',
            messages: [
                {id: 1, message: 'Дон ли Волга ли течёт'},
                {id: 2, message: 'катомку на плечо'},
                {id: 3, message: 'Боль в груди - там тайничок'},
                {id: 4, message: 'Открытый фомкой, не ключом'},
                {id: 5, message: 'Сколько миль ещё?'},
                {id: 6, message: 'Перелёт короткий был не в счёт'},
            ],
            dialogs: [
                {
                    name: 'Кирилл',
                    id: "1",
                    profileImage: `https://i.pinimg.com/originals/e5/06/cf/e506cfcd9f85b11eefd590f871db9784.png`
                },
                {
                    name: 'Димон',
                    id: "2",
                    profileImage: `https://ezoco.org/bigstakes/wp-content/uploads/sites/2274/2022/02/La-subasta-de-Sothebys-Bored-Monkey-NFT-atrae-casi.png`
                },
                {
                    name: 'Славик',
                    id: "3",
                    profileImage: `https://lh6.googleusercontent.com/ztVy8k9oxBFN9ZUFeqgONrWTtCcyNBpa5Nm3oZrvVligScn6jyam2zMHMV7e7bIdHkR75LqGZ01aC3g3RsJuKE9d0zB5r4UBhPUyIHIKlPF87smD_eLF490TH9gItYa8dmN1uRM`
                },
                {
                    name: 'Барук-хан',
                    id: "4",
                    profileImage: `data:image/jpeg;base64,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`
                },
                {
                    name: 'Сёмыч',
                    id: "5",
                    profileImage: `https://uploads-ssl.webflow.com/5ead65b4cd1146b85071bfdf/608ff1624f685407965b0180_Bored%20Ape%200-%20Image%201.png`
                },
                {
                    name: 'Герыч',
                    id: "6",
                    profileImage: `https://dgbijzg00pxv8.cloudfront.net/3e68d4f4-bffd-46e6-8353-d2dca4b4d0b4/000000-000-0000-ba26-0000000000/3482/ITEM_PREVIEW1.png`
                },
            ]
        },
        navbar: {
            sbFriends: [
                {
                    id: 1,
                    name: 'Кислый',
                    profilePic: 'https://sunrift.com/wp-content/uploads/2014/12/Blake-profile-photo-square.jpg'

                },
                {
                    id: 2,
                    name: 'Ржавый',
                    profilePic: 'https://profilemagazine.com/wp-content/uploads/2020/04/Ajmere-Dale-Square-thumbnail.jpg'

                },
                {
                    id: 3,
                    name: 'Малая',
                    profilePic: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRh9bkbF9tE8v1HAWyvOa5sFPW-RbuwZq7J21cfojAsVIwNLskF-ea48-QJAFqNexLdUyE&usqp=CAU'

                }
            ],
            navLinks: [

                {
                    name: 'Профиль',
                    link: '/profile'
                },
                {
                    name: 'Сообщения',
                    link: '/dialogs'
                },
                {
                    name: 'Новости',
                    link: '/news'
                },
                {
                    name: 'Музыка',
                    link: '/music'
                },
                {
                    name: 'Настройки',
                    link: '/settings'
                },
            ]
        }
    },

    _callSubscriber() {
        console.log('hi')
    },
    getState(){
        return this._state
    },
    createPost() {
        let newPost = {
            message: this._state.profilePage.newPostText,
            id: 12,
            likesCount: 0
        }
        this._state.profilePage.posts.unshift(newPost)
        this._state.profilePage.newPostText = ''
        this._callSubscriber(this._state)
    },
    updateNewPostText(newText) {
        this._state.profilePage.newPostText = newText
        this._callSubscriber(this._state)
    },
    updateMessageField(newText) {
        this._state.messagesPage.newMessageText = newText
        this._callSubscriber(this._state)
    },
    sendMessage() {
        let newMessage = {
            id: 7,
            message: this._state.messagesPage.newMessageText
        }
        this._state.messagesPage.messages.push(newMessage)
        this._state.messagesPage.newMessageText = ''
        this._callSubscriber(this._state)
    },
    subscribe(observer) {
        this._callSubscriber = observer
        console.log('done')
    }
}

window.state = store._state

export default store
