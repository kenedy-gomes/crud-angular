import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { ButtonModule } from 'primeng/button';
import { RegisterComponent } from './pages/register/register.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { ListagemComponent } from './pages/listagem/listagem.component';
import { NgToastModule } from 'ng-angular-popup';
import { OrderListModule } from 'primeng/orderlist';
import { DataViewModule } from 'primeng/dataview';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    ListagemComponent,
  ],
  imports: [
    NgToastModule,
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    InputTextModule,
    ButtonModule,
    PasswordModule,
    FormsModule,
    ToastrModule,
    OrderListModule,
    DataViewModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
