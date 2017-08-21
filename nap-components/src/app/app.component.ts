import { Component } from '@angular/core';
import { FilterModel } from './filter';

@Component({
  selector: 'nap-root',
  templateUrl: './app.component.html',
  styleUrls: [
    './app.component.css',
    '../../node_modules/nap-theme/scss/header.scss'
  ]
})
export class AppComponent {
  isShowFilter = true;
  filterModel: FilterModel;
}
