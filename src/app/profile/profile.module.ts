import { CommonModule } from '@angular/common'
import { HttpClientModule } from '@angular/common/http'
import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { SharedModule } from 'shared'
import { ProfileComponent } from './profile.component'
import { FormBuilder } from '@angular/forms'
import { FormsModule } from '@angular/forms'


const routes: Routes = [
    { path: '', component: ProfileComponent},
    { path: '**', redirectTo: '', pathMatch: 'full' }
];


@NgModule({
    imports: [
        HttpClientModule,
        SharedModule,
        RouterModule.forChild(routes),
        CommonModule,
        FormsModule
    ],
    declarations: [
       ProfileComponent
    ],
    providers: [FormBuilder]
})
export class ProfileModule { }
