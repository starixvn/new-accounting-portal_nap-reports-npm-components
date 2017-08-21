import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';
import { ToastService } from './toast.service';
import { MessageType } from './toast.model';

@Component({
    selector: 'nap-toast',
    templateUrl: './toast.component.html'
})

export class ToastComponent implements OnInit {
    message: string;
    type = MessageType.Danger;
    @ViewChild('toast') toast: ElementRef;

    constructor(
        private toastService: ToastService
    ) { }

    ngOnInit() {
        this.toastService.activate = this.activate.bind(this);
        this.toastService.deactivate = this.deactivate.bind(this);
    }

    close() {
        this.message = undefined;
    }

    get alertClass(): string {
        switch (this.type) {
            case MessageType.Success:
                return 'alert-success';
            case MessageType.Info:
                return 'alert-info';
            case MessageType.Warning:
                return 'alert-warning';
            case MessageType.Danger:
                return 'alert-danger';
        }
    }

    private activate(message: string, type: MessageType = MessageType.Danger): void {
        this.message = message;
        this.type = type;
    }

    private deactivate(): void {
        this.close();
    }
}
