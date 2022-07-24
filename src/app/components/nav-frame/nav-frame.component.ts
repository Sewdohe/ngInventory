import {Component, ViewChild} from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import {MatSidenav} from "@angular/material/sidenav";
import { AuthService } from 'src/app/auth.service';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { LoginComponent } from '../login/login.component';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Component({
  selector: 'app-nav-frame',
  templateUrl: './nav-frame.component.html',
  styleUrls: ['./nav-frame.component.scss']
})
export class NavFrameComponent {
  @ViewChild('sidenav')
  sidenav!: MatSidenav;
  reason = '';
  userAuthed = false;

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  close(reason: string) {
    this.reason = reason;
    this.sidenav.close();
  }

  constructor(private breakpointObserver: BreakpointObserver, private authService: AuthService, public dialog: MatDialog, public auth: AngularFireAuth) {
  }

  login() {
    this.authService.login();
  }

  logout() {
    this.authService.signOut();
  }

  openLoginDialog() {
    this.authService.openLoginDialog()
  }

  async checkLogin() {
    const user = await this.authService.isLoggedIn();
    if (user) {
      this.userAuthed = true;
    } else this.userAuthed = false;
  }

}
