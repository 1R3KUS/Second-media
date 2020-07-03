import { rerenderPage } from "../render"

let state = {
  profilePage: {
    posts: [
      { id: 1, text: 'Hello world! I\'m Front-End developer', imgs: ['https://sun6-13.userapi.com/5rNccB_u5xfef0Cl1PPlyaIrtdaGagfsgPPFiA/6Hm3AJ0gMkQ.jpg', 'https://sun6-13.userapi.com/nkvFauLAcz6UYz4aLeNXv40S9SmWJIE8QFoNWw/ibC_nZiNvYA.jpg'] },
      { id: 2, text: 'This is my second post', imgs: ['https://sun9-26.userapi.com/c543108/v543108915/5c8a4/HkjtjNinRok.jpg'] },
      { id: 3, text: 'This is my third post in this media', imgs: ['https://sun9-30.userapi.com/c855024/v855024320/1e0991/ujFhw9Fk8VQ.jpg', 'https://sun9-59.userapi.com/c857220/v857220399/1c93ac/b8Hcdr9TwSI.jpg'] }
    ],
    textValue: 'Hello world'
  },

  friendsList: {
    friends: [
      { id: 1, name: 'Abdulla', ava: 'https://sun6-13.userapi.com/O0Na3WVaHQB_7aRecI5toH5oMSOV7S9kZ26_Vw/t_KO61pRHvk.jpg' },
      { id: 2, name: 'Abu', ava: 'https://sun6-16.userapi.com/8njGxoctKyLCaN_b4gTl4Gv4x_hmrI5qjncwKw/RvKXTHoir1M.jpg' },
      { id: 3, name: 'Shamil', ava: 'https://image.flaticon.com/icons/svg/847/847969.svg' },
      { id: 4, name: 'Halid', ava: 'https://image.flaticon.com/icons/svg/847/847969.svg' },
      { id: 5, name: 'Adam', ava: 'https://image.flaticon.com/icons/svg/847/847969.svg' },
      { id: 6, name: 'Seyf', ava: 'https://image.flaticon.com/icons/svg/847/847969.svg' },
      { id: 7, name: 'Imran', ava: 'https://image.flaticon.com/icons/svg/847/847969.svg' },
      { id: 8, name: 'Ali', ava: 'https://image.flaticon.com/icons/svg/847/847969.svg' },
    ]
  },

  messagesList: {
    message: [
      { id: 1, message: 'Hi! How are you?' },
      { id: 2, message: 'Hi! i\'m fine. And you?' },
      { id: 3, message: 'i\'m fine too' },
      { id: 4, message: 'What do you do?' },
      { id: 5, message: 'I\'m working' }
    ]
  }
}


export let newPostAdd = () => {
  let newPost = {
    id: 4,
    text: state.profilePage.textValue,
    imgs: ['dada']
  }
  state.profilePage.posts.push(newPost)
  state.profilePage.textValue =''
  rerenderPage(state)
};

export let changeTextArea = TextArea => {
  state.profilePage.textValue = TextArea;
  rerenderPage(state)
}





export default state;