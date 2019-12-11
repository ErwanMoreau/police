import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {IndexComponent} from './index/index.component';
import {EditRapportComponent} from './Rapport/edit-rapport/edit-rapport.component';
import {AddRapportComponent} from './Rapport/add-rapport/add-rapport.component';
import {ListRapportComponent} from './Rapport/list-rapport/list-rapport.component';
import {ListUserComponent} from './Admin/list-user/list-user.component';
import {AddUserComponent} from './Admin/add-user/add-user.component';
import {EditUserComponent} from './Admin/edit-user/edit-user.component';
import {ListCasierComponent} from './casier/list-casier/list-casier.component';
import {ViewCasierComponent} from './casier/view-casier/view-casier.component';
import {AddCasierComponent} from './casier/add-casier/add-casier.component';
import {HierachieComponent} from './hierachie/hierachie.component';
import {ResetPasswordComponent} from './reset-password/reset-password.component';
import {LoginComponent} from './login/login.component';
const routes: Routes = [
  {
    path: '',
    component: IndexComponent,
    data: { title: 'index' }
  },
  {
    path: 'add-rapport',
    component: AddRapportComponent,
    data: { title: 'Add-Rapport' }
  },
  {
    path: 'edit-rapport',
    component: EditRapportComponent,
    data: { title: 'Edit-Rapport' }
  },
  {
    path: 'list-rapport',
    component: ListRapportComponent,
    data: { title: 'list-Rapport' }
  },
  {
    path: 'admin/list-user',
    component: ListUserComponent,
    data: { title: 'User List' }
  },
  {
    path: 'admin/add-user',
    component: AddUserComponent,
    data: { title: ' Add User List' }
  },
  {
    path: 'admin/edit-user',
    component: EditUserComponent,
    data: { title: ' edit User List' }
  },
  {
    path: 'list-casier',
    component: ListCasierComponent,
    data: { title: ' list casier' }
  },
  {
    path: 'view-casier',
    component: ViewCasierComponent,
    data: { title: ' view casier' }
  },
  {
    path: 'add-casier',
    component: AddCasierComponent,
    data: { title: ' add new casier' }
  },
  {
    path: 'hierachie',
    component: HierachieComponent,
    data: { title: ' view Hierachie' }
  },
  {
    path: 'reset-password',
    component: ResetPasswordComponent,
    data: { title: ' reset-password' }
  },
  {
    path: 'login',
    component: LoginComponent,
    data: { title: ' Login' }
  }

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
