import { Injectable } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ConfirmationModalComponent } from './confirmation-modal.component';
import { ConfirmationSetting } from './confirmation.model';

@Injectable()
export class ConfirmationService {
    constructor(
        private modalService: NgbModal
    ) { }

    openContent(content: string, okCallback: () => void, cancelCallback?: () => void) {
        const setting: ConfirmationSetting = {
            content: content,
            okCallback: okCallback,
            cancelCallback: cancelCallback
        };
        this.open(setting);
    }

    open(setting: ConfirmationSetting) {
        const modalRef = this.modalService.open(ConfirmationModalComponent);
        const componentInstance: ConfirmationModalComponent = modalRef.componentInstance;
        componentInstance.content = setting.content;
        modalRef.result.then(() => {
            setting.okCallback();
        }, () => {
            if (setting.cancelCallback) {
                setting.cancelCallback();
            }
        });
    }
}
