import { Injectable } from '@angular/core';
import { MessageType } from './toast.model';

@Injectable()
export class ToastService {
    activate(message: string, type: MessageType = MessageType.Danger, autoCloseAfterSeconds?: number) { }

    deactivate() { }
}
