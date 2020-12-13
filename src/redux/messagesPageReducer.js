const updateMessageTxtType = 'UPDATE-MSG-TXT';
const addMsgType = 'BLL-ADD-MSG';

const initState = {
    user_dialog_data_arr: [
        {
            user_avtr_path: 'https://sun9-1.userapi.com/impf/c847219/v847219442/d9a2c/NlO4bcfVAjU.jpg?size=400x0&quality=90&crop=0,503,1536,1536&sign=6c4caa97f8264d09497534df8803782e&ava=1',
            user_name: 'Eugene',
            user_id: '1',
            user_short_txt: 'Я Женя'
        },
        {
            user_avtr_path: 'https://sun9-9.userapi.com/impf/c841221/v841221586/626bc/t_tDCwQ8vEE.jpg?size=400x0&quality=90&crop=0,0,1623,2160&sign=0e23704faa36d8e8c004862e861a4c6a&ava=1',
            user_name: 'Polya',
            user_id: '2',
            user_short_txt: 'Я Поля'
        },
        {
            user_avtr_path: 'https://sun9-63.userapi.com/impg/c857724/v857724792/13ff4b/gl5rLHn95Bo.jpg?size=400x0&quality=90&crop=0,0,2048,2048&sign=125c3314a41ad8579fae1380cf19b463&ava=1',
            user_name: 'Pasha',
            user_id: '3',
            user_short_txt: 'Я Паша'
        },
        {
            user_avtr_path: 'https://sun1-26.userapi.com/impf/c849032/v849032619/183251/7VDqd-2KlLs.jpg?size=400x0&quality=90&crop=0,1,718,718&sign=ecbff56ea542041970a995485b7a525d&ava=1',
            user_name: 'Egor',
            user_id: '4',
            user_short_txt: 'Здарова'
        }
    ],
    user_msg_data_arr: [
        {
            acc_owner: false,
            msg_id: 1,
            msg_avtr: 'https://sun9-63.userapi.com/impg/c857724/v857724792/13ff4b/gl5rLHn95Bo.jpg?size=400x0&quality=90&crop=0,0,2048,2048&sign=125c3314a41ad8579fae1380cf19b463&ava=1',
            msg_text: 'Привет, друг!'
        },
        {
            acc_owner: true,
            msg_id: 2,
            msg_avtr: 'https://sun9-1.userapi.com/impf/c847219/v847219442/d9a2c/NlO4bcfVAjU.jpg?size=400x0&quality=90&crop=0,503,1536,1536&sign=6c4caa97f8264d09497534df8803782e&ava=1',
            msg_text: 'Здарова'
        },
        {
            acc_owner: false,
            msg_id: 3,
            msg_avtr: 'https://sun9-63.userapi.com/impg/c857724/v857724792/13ff4b/gl5rLHn95Bo.jpg?size=400x0&quality=90&crop=0,0,2048,2048&sign=125c3314a41ad8579fae1380cf19b463&ava=1',
            msg_text: 'Как дела?'
        },
        {
            acc_owner: true,
            msg_id: 4,
            msg_avtr: 'https://sun9-1.userapi.com/impf/c847219/v847219442/d9a2c/NlO4bcfVAjU.jpg?size=400x0&quality=90&crop=0,503,1536,1536&sign=6c4caa97f8264d09497534df8803782e&ava=1',
            msg_text: 'Проверка на длинное сообщение, как оно будет отображаться и какую максимальную ширину иметь'
        },
        {
            acc_owner: true,
            msg_id: 5,
            msg_avtr: 'https://sun9-1.userapi.com/impf/c847219/v847219442/d9a2c/NlO4bcfVAjU.jpg?size=400x0&quality=90&crop=0,503,1536,1536&sign=6c4caa97f8264d09497534df8803782e&ava=1',
            msg_text: 'А у тебя, че, как дела?'
        },
        {
            acc_owner: false,
            msg_id: 6,
            msg_avtr: 'https://sun9-63.userapi.com/impg/c857724/v857724792/13ff4b/gl5rLHn95Bo.jpg?size=400x0&quality=90&crop=0,0,2048,2048&sign=125c3314a41ad8579fae1380cf19b463&ava=1',
            msg_text: 'Да пойдет'
        },
        {
            acc_owner: true,
            msg_id: 7,
            msg_avtr: 'https://sun9-1.userapi.com/impf/c847219/v847219442/d9a2c/NlO4bcfVAjU.jpg?size=400x0&quality=90&crop=0,503,1536,1536&sign=6c4caa97f8264d09497534df8803782e&ava=1',
            msg_text: 'Ну и хорошо'
        },
        {
            acc_owner: true,
            msg_id: 8,
            msg_avtr: 'https://sun9-1.userapi.com/impf/c847219/v847219442/d9a2c/NlO4bcfVAjU.jpg?size=400x0&quality=90&crop=0,503,1536,1536&sign=6c4caa97f8264d09497534df8803782e&ava=1',
            msg_text: 'Проверка прошла хорошо'
        }, {
            acc_owner: true,
            msg_id: 5,
            msg_avtr: 'https://sun9-1.userapi.com/impf/c847219/v847219442/d9a2c/NlO4bcfVAjU.jpg?size=400x0&quality=90&crop=0,503,1536,1536&sign=6c4caa97f8264d09497534df8803782e&ava=1',
            msg_text: 'А у тебя, че, как дела?'
        },
        {
            acc_owner: false,
            msg_id: 6,
            msg_avtr: 'https://sun9-63.userapi.com/impg/c857724/v857724792/13ff4b/gl5rLHn95Bo.jpg?size=400x0&quality=90&crop=0,0,2048,2048&sign=125c3314a41ad8579fae1380cf19b463&ava=1',
            msg_text: 'Да пойдет'
        },
        {
            acc_owner: true,
            msg_id: 7,
            msg_avtr: 'https://sun9-1.userapi.com/impf/c847219/v847219442/d9a2c/NlO4bcfVAjU.jpg?size=400x0&quality=90&crop=0,503,1536,1536&sign=6c4caa97f8264d09497534df8803782e&ava=1',
            msg_text: 'Ну и хорошо'
        },
        {
            acc_owner: true,
            msg_id: 8,
            msg_avtr: 'https://sun9-1.userapi.com/impf/c847219/v847219442/d9a2c/NlO4bcfVAjU.jpg?size=400x0&quality=90&crop=0,503,1536,1536&sign=6c4caa97f8264d09497534df8803782e&ava=1',
            msg_text: 'Проверка прошла хорошо'
        },
        {
            acc_owner: true,
            msg_id: 5,
            msg_avtr: 'https://sun9-1.userapi.com/impf/c847219/v847219442/d9a2c/NlO4bcfVAjU.jpg?size=400x0&quality=90&crop=0,503,1536,1536&sign=6c4caa97f8264d09497534df8803782e&ava=1',
            msg_text: 'А у тебя, че, как дела?'
        },
        {
            acc_owner: false,
            msg_id: 6,
            msg_avtr: 'https://sun9-63.userapi.com/impg/c857724/v857724792/13ff4b/gl5rLHn95Bo.jpg?size=400x0&quality=90&crop=0,0,2048,2048&sign=125c3314a41ad8579fae1380cf19b463&ava=1',
            msg_text: 'Да пойдет'
        },
        {
            acc_owner: true,
            msg_id: 7,
            msg_avtr: 'https://sun9-1.userapi.com/impf/c847219/v847219442/d9a2c/NlO4bcfVAjU.jpg?size=400x0&quality=90&crop=0,503,1536,1536&sign=6c4caa97f8264d09497534df8803782e&ava=1',
            msg_text: 'Ну и хорошо'
        },
        {
            acc_owner: true,
            msg_id: 8,
            msg_avtr: 'https://sun9-1.userapi.com/impf/c847219/v847219442/d9a2c/NlO4bcfVAjU.jpg?size=400x0&quality=90&crop=0,503,1536,1536&sign=6c4caa97f8264d09497534df8803782e&ava=1',
            msg_text: 'Проверка прошла хорошо'
        },
        {
            acc_owner: true,
            msg_id: 5,
            msg_avtr: 'https://sun9-1.userapi.com/impf/c847219/v847219442/d9a2c/NlO4bcfVAjU.jpg?size=400x0&quality=90&crop=0,503,1536,1536&sign=6c4caa97f8264d09497534df8803782e&ava=1',
            msg_text: 'А у тебя, че, как дела?'
        },
        {
            acc_owner: false,
            msg_id: 6,
            msg_avtr: 'https://sun9-63.userapi.com/impg/c857724/v857724792/13ff4b/gl5rLHn95Bo.jpg?size=400x0&quality=90&crop=0,0,2048,2048&sign=125c3314a41ad8579fae1380cf19b463&ava=1',
            msg_text: 'Да пойдет'
        },
        {
            acc_owner: true,
            msg_id: 7,
            msg_avtr: 'https://sun9-1.userapi.com/impf/c847219/v847219442/d9a2c/NlO4bcfVAjU.jpg?size=400x0&quality=90&crop=0,503,1536,1536&sign=6c4caa97f8264d09497534df8803782e&ava=1',
            msg_text: 'Ну и хорошо'
        },
        {
            acc_owner: true,
            msg_id: 8,
            msg_avtr: 'https://sun9-1.userapi.com/impf/c847219/v847219442/d9a2c/NlO4bcfVAjU.jpg?size=400x0&quality=90&crop=0,503,1536,1536&sign=6c4caa97f8264d09497534df8803782e&ava=1',
            msg_text: 'Проверка прошла хорошо'
        },
        {
            acc_owner: true,
            msg_id: 5,
            msg_avtr: 'https://sun9-1.userapi.com/impf/c847219/v847219442/d9a2c/NlO4bcfVAjU.jpg?size=400x0&quality=90&crop=0,503,1536,1536&sign=6c4caa97f8264d09497534df8803782e&ava=1',
            msg_text: 'А у тебя, че, как дела?'
        },
        {
            acc_owner: false,
            msg_id: 6,
            msg_avtr: 'https://sun9-63.userapi.com/impg/c857724/v857724792/13ff4b/gl5rLHn95Bo.jpg?size=400x0&quality=90&crop=0,0,2048,2048&sign=125c3314a41ad8579fae1380cf19b463&ava=1',
            msg_text: 'Да пойдет'
        },
        {
            acc_owner: true,
            msg_id: 7,
            msg_avtr: 'https://sun9-1.userapi.com/impf/c847219/v847219442/d9a2c/NlO4bcfVAjU.jpg?size=400x0&quality=90&crop=0,503,1536,1536&sign=6c4caa97f8264d09497534df8803782e&ava=1',
            msg_text: 'Ну и хорошо'
        },
        {
            acc_owner: true,
            msg_id: 8,
            msg_avtr: 'https://sun9-1.userapi.com/impf/c847219/v847219442/d9a2c/NlO4bcfVAjU.jpg?size=400x0&quality=90&crop=0,503,1536,1536&sign=6c4caa97f8264d09497534df8803782e&ava=1',
            msg_text: 'Проверка прошла хорошо'
        }
    ],
    newMsgText: ''
};

const messagesPageReducer = (state = initState, action) => {

    switch (action.type) {
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