import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FilterComponent } from './filter';
import { NumberFormatComponent } from './number-format';
import { GridComponent } from './grid';

const routes: Routes = [
    { path: '', redirectTo: 'form', pathMatch: 'full' },
    { path: 'form', component: FilterComponent },
    { path: 'number-format', component: NumberFormatComponent },
    { path: 'grid', component: GridComponent }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes, { useHash: true })
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule { }