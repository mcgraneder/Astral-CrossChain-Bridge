import React, { useContext } from "react";
import { NotificationContext } from "../contexts/NotificationsContext";

export const useNotification = () => {
    const dispatch = useContext(NotificationContext);

    if (dispatch === undefined) {
        throw new Error(
            'useNotification hook must be used within a NotificationProvider',
        );
    }

    return (props) => {
        dispatch({
            type: 'add_notification',
            payload: {
                id: String(Date.now()),
                ...props,
            },
        });
    };
};