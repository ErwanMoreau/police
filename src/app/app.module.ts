import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { AppRoutingModule } from './app-routing.module';
import { IndexComponent } from './index/index.component';
import { InformationGComponent } from './information-g/information-g.component';
import { FreqComponent } from './freq/freq.component';
import { DashRaportComponent } from './dash-raport/dash-raport.component';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { AddRapportComponent } from './Rapport/add-rapport/add-rapport.component';
import { EditRapportComponent } from './Rapport/edit-rapport/edit-rapport.component';
import { ListRapportComponent } from './Rapport/list-rapport/list-rapport.component';
import { ViewRapportComponent } from './Rapport/view-rapport/view-rapport.component';
import { AddCasierComponent } from './casier/add-casier/add-casier.component';
import { ListCasierComponent } from './casier/list-casier/list-casier.component';
import { ViewCasierComponent } from './casier/view-casier/view-casier.component';
import { HierachieComponent } from './hierachie/hierachie.component';
import { LoginComponent } from './login/login.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { AddUserComponent } from './Admin/add-user/add-user.component';
import { ListUserComponent } from './Admin/list-user/list-user.component';
import { EditUserComponent } from './Admin/edit-user/edit-user.component';
import {HttpClientModule} from '@angular/common/http';
import {AuthService} from './auth.service';
import {AuthGuard} from './auth.guard';
import {BackService} from './back.service';



@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    IndexComponent,
    InformationGComponent,
    FreqComponent,
    DashRaportComponent,
    AddRapportComponent,
    EditRapportComponent,
    ListRapportComponent,
    ViewRapportComponent,
    AddCasierComponent,
    ListCasierComponent,
    ViewCasierComponent,
    HierachieComponent,
    LoginComponent,
    ResetPasswordComponent,
    AddUserComponent,
    ListUserComponent,
    EditUserComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CKEditorModule,
  ],
  providers: [AuthService, BackService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
