import { ADD_POST, ADD_COMMENT } from '../actions/actionTypes'

const initialState = {
    posts: [{
        id: Math.random(),
        nickname: 'Rafael Pereira Filho',
        email: 'rafaelprrflh@gmail.com',
        image: require('../../../assets/imgs/fence.jpg'),
        comments: [{
            nickname: 'John Ray Sheldon',
            comment: 'Stunning!'
        }, {
            nickname: 'Ana Julia Arruda',
            comment: 'Foto linda! Onde foi tirada?'
        }]
    }, {
        id: Math.random(),
        nickname: 'Otaviano Costa',
        email: 'otcosta@gmail.com',
        image: require('../../../assets/imgs/bw.jpg'),
        comments: [{
            nickname: 'Junior da Sandy',
            comment: 'Ai sim em mano! Top demais!'
        }, {
            nickname: 'Francisco Lima',
            comment: 'Sensacional mano!!'
        }]
    }]
}


const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            return {
                ...state,
                posts: state.posts.concat({
                    ...action.payload
                })
            }
        case ADD_COMMENT:
            return {
                ...state,
                posts: state.posts.map(post => {
                    if (post.id === action.payload.postId) {
                        if (post.comments) {
                            post.comments = post.comments.concat(
                                action.payload.comment
                            )
                        } else {
                            post.comments = [action.payload.comment]
                        }
                    }
                    return post
                })
            }
        default:
            return state
    }
}

export default reducer