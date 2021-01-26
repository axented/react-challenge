import React from 'react';
import styled from '@emotion/styled';

const NotificationContainer = styled.div`
    width: 95%;
    height: 70px;
    border-radius: 5px;
    margin-bottom: 5px;
    background-color: ${props => props.background};
    overflow: auto;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
`;

const P = styled.p`
    float: left;
    margin: 5px 0 0 5px;
`;

const Button = styled.button`
    float: right;
    height: 100%;
    width: 15%;
    -webkit-appearance: none;
    border: none;
    background-color: rgba(255,255,255,0.5);
    cursor: pointer;
`;

const Notification = ({ message, background, deleteMessage }) => {
    return (
        <NotificationContainer background={background}>
            <P>{message.message}</P>
            <Button onClick={() => deleteMessage(message.id)}>Clear</Button>
        </NotificationContainer>
    );
}

export default Notification;