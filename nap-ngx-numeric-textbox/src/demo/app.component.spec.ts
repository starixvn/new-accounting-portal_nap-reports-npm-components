import { TestBed, waitForAsync } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { BasicModule } from './basic';
import { AdvancedModule } from './advanced';

describe('AppComponent', () => {
  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        BasicModule,
        AdvancedModule
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  }));
});
