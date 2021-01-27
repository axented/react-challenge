import React from 'react';
import styled from '@emotion/styled';
import Notification from './Notification';
import PropTypes from 'prop-types';

const GridContainer = styled.div`
    display: flex;
    justify-content: center;
`;

const Column = styled.div`
    display: flex;
    flex-direction: column;
    width: 25%;
`;

const P = styled.p`
    margin-bottom: 5px;
`;
const Grid = ({ messages, deleteMessage }) => {

    const messagesType1 = messages.filter(m => (m.priority === 1));
    const messagesType2 = messages.filter(m => (m.priority === 2));
    const messagesType3 = messages.filter(m => (m.priority === 3));

    return (
        <GridContainer>
            <Column>
                <h2>Error Type 1</h2>
                <P>Count: {messagesType1.length}</P>
                {
                    messagesType1.map(message => (
                        <Notification key={message.id} message={message} background="#F56236" deleteMessage={deleteMessage} />
                    ))
                }
            </Column>
            <Column>
                <h2>Warning Type 2</h2>
                <P>Count: {messagesType2.length}</P>
                {
                    messagesType2.map(message => (
                        <Notification key={message.id} message={message} background="#FCE788" deleteMessage={deleteMessage} />
                    ))
                }
            </Column>
            <Column>
                <h2>Warning Type 3</h2>
                <P>Count: {messagesType3.length}</P>
                {
                    messagesType3.map(message => (
                        <Notification key={message.id} message={message} background="#88FCA3" deleteMessage={deleteMessage} />
                    ))
                }
            </Column>

        </GridContainer>
    );
}

Grid.propTypes = {
    messages: PropTypes.array.isRequired,
    deleteMessage: PropTypes.func.isRequired
}

export default Grid;