import React, { useEffect, useState } from 'react';
import NotificationStyles from './NotificationStyles';
import { CheckCircle, X, Ale, AlertCircle } from 'react-feather';
import styled from 'styled-components';

export const CloseIcon = styled(X)`

   
    color:White;
    z-index: 10;
    &:hover {

        cursor: pointer;
    }
`

const {
    BarStyled,
    CloseWrapperStyled,
    IconWrapperStyled,
    NotificationStyled,
    SpanStyled,
    TextContentStyled,
    TitleStyled,
} = NotificationStyles;

const Notification = ({
    dispatch,
    id,
    message="view on explorer",
    title = 'Deposited Exactly 2 Ren BTC at a price of $200',
    type = 'info',
    position = 'topR',
    success
}) => {
    const [isClosing, setIsClosing] = useState(false);
    const [barWidth, setBarWidth] = useState(0);

    const notificationWidth = 320;

    const startTimer = () => {
        if (isClosing) return;
        const idInt = setInterval(() => {
            setBarWidth((prev) => {
                if (prev < notificationWidth) return prev + 1;

                clearInterval(idInt);
                return prev;
            });
        }, 65);
    };

    useEffect(() => {
        if (isClosing) return;
        if (barWidth === notificationWidth) closeNotification();
    }, [barWidth, isClosing]);

    useEffect(() => startTimer(), []);

    const closeNotification = () => {
        setIsClosing(true);
        setTimeout(() => {
            // @ts-ignore
            dispatch({
                type: 'remove_notification',
                id,
            });
        }, 400);
    };

    return (
        <NotificationStyled
            data-testid={'test-notification-id'}
            id={id}
            isClosing={isClosing}
            type={type}
            position={position}
        >
            <IconWrapperStyled data-testid={'test-notification-icon-wrapper'}>
                   {success ? <CheckCircle 
                        strokeWidth={1.5} 
                        size="35" 
                        color={"rgb(38,162,91)"} />
                    : <AlertCircle size="35" strokeWidth={1.5} color={"red"} />}
            </IconWrapperStyled>
            <TextContentStyled>
                <TitleStyled data-testid={'test-notification-title'}>
                    {title}
                </TitleStyled>
                <CloseWrapperStyled
                    onClick={closeNotification}
                    data-testid={'test-notification-x'}
                >
                    <CloseIcon
                    strokeWidth={1.5} 
                />
                </CloseWrapperStyled>
                <SpanStyled data-testid={'test-notification-message'}>
                    {message}
                </SpanStyled>
            </TextContentStyled>
            <BarStyled style={{ width: barWidth }} colour={success ? "rgb(23,104,219)" : "red" } />
        </NotificationStyled>
    );
};

export default Notification;