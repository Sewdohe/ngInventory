import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AngularFireModule} from '@angular/fire/compat';
import {AngularFirestoreModule} from '@angular/fire/compat/firestore';
import {environment} from '../../../environments/environment';
import {MatTableModule} from "@angular/material/table";
import {MatIconModule} from "@angular/material/icon";
import {MatListModule} from "@angular/material/list";
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatButtonModule} from "@angular/material/button";
import {LayoutModule} from "@angular/cdk/layout";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {BrowserModule} from "@angular/platform-browser";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import {FormsModule} from "@angular/forms";
import {MatInputModule} from "@angular/material/input";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatSnackBarModule} from "@angular/material/snack-bar";
import {MatSelectModule} from "@angular/material/select";
import {MultiWindowModule} from "ngx-multi-window";
import {MiddleclickDirective} from "../../directives/middleclick.directive";
import {MatSlideToggleModule} from "@angular/material/slide-toggle";
import {MatTooltipModule} from "@angular/material/tooltip";
import {MatDialogModule} from '@angular/material/dialog'; 


@NgModule({
  declarations: [MiddleclickDirective],
  imports: [
    CommonModule,
    AngularFirestoreModule,
    AngularFireModule.initializeApp(environment.firebase),
    MatTableModule,
    MatIconModule,
    MatListModule,
    MatSidenavModule,
    MatToolbarModule,
    MatButtonModule,
    LayoutModule,
    BrowserAnimationsModule,
    BrowserModule,
    MatProgressSpinnerModule,
    FormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatSnackBarModule,
    MatSelectModule,
    MultiWindowModule,
    MatSlideToggleModule,
    MatTooltipModule,
    MatDialogModule
  ],
  exports: [
    AngularFirestoreModule,
    AngularFireModule,
    MatTableModule,
    MatIconModule,
    MatListModule,
    MatSidenavModule,
    MatToolbarModule,
    MatButtonModule,
    LayoutModule,
    BrowserAnimationsModule,
    BrowserModule,
    MatProgressSpinnerModule,
    FormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatSnackBarModule,
    MatSelectModule,
    MultiWindowModule,
    MiddleclickDirective,
    MatSlideToggleModule,
    MatTooltipModule,
    MatDialogModule
  ],
  providers: []
})
export class SharedModule {
}
