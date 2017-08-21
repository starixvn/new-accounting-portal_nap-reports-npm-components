export interface ConfirmationSetting {
    content: string;
    okCallback?: () => void;
    cancelCallback?: () => void;
}
