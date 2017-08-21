import { Component, Input, TemplateRef, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'nap-breadcrumb',
    templateUrl: './breadcrumb.component.html',
    styleUrls: ['./breadcrumb.component.scss']
})
export class BreadcrumbComponent {
    @Input() toolboxTemplate: TemplateRef<any>;
    @Input() items: string[];
    @Output() itemClick = new EventEmitter<number>();

    onItemClick(index: number) {
        this.itemClick.emit(index);
    }
}
