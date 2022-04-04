
export const IPosition = 'topR' | 'topL' | 'bottomR' | 'bottomL';


export const NotificationActionType = {
    type: 'add_notification' | 'remove_notification' | 'clear_notifications',
    payload: PayloadType,
    id: string,
};

export const PayloadType = {
    id?: string,
    type: notifyType,
    message?: string,
    title?: string,
    icon?: TIconType,
    position: IPosition,
    iconColor?: string,
};

