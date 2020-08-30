import React from 'react';
import cssCls from './Dialogs.module.css';
import {NavLink} from "react-router-dom";


const Dialog_user_item = (props) => {

    let userAvtrPath = props.userAvtrPath;
    let userName = props.userName;
    let userShortTxt = props.userShortTxt;
    let userId = '/dialogs/' + props.userId;

    return (
        <NavLink to={userId} className={cssCls.user_item}>
            <div className={cssCls.avatar_wrapper}>
                <img src={userAvtrPath} alt=""/>
            </div>
            <div className={cssCls.short_inf_wrapper}>
                <span className={cssCls.user_item_name}>{userName}</span>
                <span className={cssCls.user_item_shortText}>{userShortTxt}</span>
            </div>
        </NavLink>
    )
};

const Msg_item = (props) => {

    let avtrPath = props.avtr_path;
    let msgText = props.message_text;
    let msg_class = () => {
        if(props.acc_owner) {
            return `${cssCls.msg_item} ${cssCls.myMsg}`
        }
        else {
            return `${cssCls.msg_item}`
        }
    };

    return (
        <div className={msg_class()}>
            <div className={cssCls.msg_avtr_wrapper}>
                <img src={avtrPath} alt=""/>
            </div>
            <span className={cssCls.msg_text_wrapper}>{msgText}</span>
        </div>
    )
};

// ${cssCls.myMsg}

const Dialogs = (props) => {

    const user_dialog_data_arr = [
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
        }
    ];

    const user_msg_data_arr = [
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
        }
    ];


    const user_dialogs = user_dialog_data_arr
        .map(dialog => <Dialog_user_item
        userAvtrPath={dialog.user_avtr_path}
        userName={dialog.user_name}
        userId={dialog.user_id}
        userShortTxt={dialog.user_short_txt}
    />);

    const user_messages = user_msg_data_arr
        .map(message => <Msg_item
            avtr_path={message.msg_avtr}
            message_text={message.msg_text}
            acc_owner={message.acc_owner}
        />);

    return(
        <div className={cssCls.dialogs_wrapper}>
            <div className={cssCls.dialog_users}>
                {user_dialogs}
            </div>

            <div className={cssCls.dialog_messages}>
                {user_messages}
            </div>
        </div>
    )
};

export default Dialogs;