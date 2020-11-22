const updateMessageTxtType = 'UPDATE-MSG-TXT';
const addMsgType = 'BLL-ADD-MSG';

const messagesPageReducer = (state, action) => {

    switch(action.type) {
        case updateMessageTxtType:
            state.newMsgText = action.text;
            return state;

        case addMsgType:
            if (state.newMsgText) {
                const newMsg = {
                    acc_owner: true,
                    msg_id: Math.floor(Math.random() * 10000000),
                    msg_avtr: 'https://sun9-1.userapi.com/impf/c847219/v847219442/d9a2c/NlO4bcfVAjU.jpg?size=400x0&quality=90&crop=0,503,1536,1536&sign=6c4caa97f8264d09497534df8803782e&ava=1',
                    msg_text: state.newMsgText
                };
                state.user_msg_data_arr.push(newMsg);
                state.newMsgText = '';
            }
            return state;

        default:
            return state;
    }

 };

export const updateMsgActionCreator = (newMsgTxt) => ({
    type: updateMessageTxtType,
    text: newMsgTxt
});
export const addMsgActionCreator = () => ({
    type: addMsgType
});

export default messagesPageReducer;