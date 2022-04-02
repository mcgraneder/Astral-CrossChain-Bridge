import React, {  useContext, useMemo, useReducer } from 'react';
import Notification from '../components/Notifications/Notification';
import NotificationStyles from '../components/Notifications/NotificationStyles';

export const NotificationContext = React.createContext();
const { NotificationContainerStyled } = NotificationStyles;

const PayloadType = [];

function reducer(state, action) {
    switch (action.type) {
        case 'add_notification':
            return [...state, { ...action.payload }];
        case 'remove_notification':
            console.log('action', action, 'state', state);
            return state.filter((toast) => toast.id !== action.id);
        case 'clear_notifications':
            return [];
        default:
            return state;
    }
}

const NotificationProvider = (props) => {
    const [state, dispatch] = useReducer(reducer, PayloadType);

    const toasts = useMemo(() => {
        const toaster = {
            topR: [],
        };
        state.forEach((toast) =>
            toaster[toast.position].push(toast),
        );

        return (Object.keys(toaster)).map((pos) => {
            return (
                <NotificationContainerStyled
                    position={pos}
                    key={`container-${pos}`}
                >
                    {toaster?.[pos]?.map((toast) => (
                        <Notification
                            key={toast.id}
                            id={toast.id || String(Date.now())}
                            dispatch={dispatch}
                            {...toast}
                        />
                    ))}
                </NotificationContainerStyled>
            );
        });
    }, [state]);

    return (
        <NotificationContext.Provider value={dispatch}>
            {toasts}
            {props.children}
        </NotificationContext.Provider>
    );
};


export default NotificationProvider;