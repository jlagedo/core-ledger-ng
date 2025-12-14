export interface Notification {
    id: string;
    message: string;
    title: string;
    icon: string;
    time: Date;
    timestamp: Date;
    read: boolean;
    type?: 'info' | 'warning' | 'error' | 'success';
}
