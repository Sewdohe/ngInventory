import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NavFrameComponent } from './components/nav-frame/nav-frame.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import {ProductsModule} from "./modules/products/products.module";
import {DataService} from "./services/data.service";
import {SharedModule} from "./modules/shared/shared.module";
import {ToastService} from "./services/toast.service";
import {WindowService} from "./services/window.service";
import { MiddleclickDirective } from './directives/middleclick.directive';
import {InvoicesModule} from "./modules/invoices/invoices.module";
import {InvoiceService} from "./services/invoice.service";
import { LoginComponent } from './components/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    NavFrameComponent,
    DashboardComponent,
    LoginComponent,
  ],
  imports: [
    AppRoutingModule,
    ProductsModule,
    InvoicesModule,
    SharedModule
  ],
  providers: [DataService, ToastService, WindowService, InvoiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
