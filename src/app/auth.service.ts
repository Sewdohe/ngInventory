import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Observable } from 'rxjs';
import { first } from 'rxjs/operators';
import firebase from 'firebase/compat/app';
import { MatDialog } from '@angular/material/dialog';
import { LoginComponent } from './components/login/login.component';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private auth: AngularFireAuth,
    public dialog: MatDialog) {}

  isLoggedIn() {
    return this.auth.authState.pipe(first()).toPromise();
  }

  openLoginDialog() {
    const dialogRefrence = this.dialog.open(LoginComponent, {
      width: '80%',
      height: '50%',
    })
  }

  signOut() {
    this.auth.signOut();
  }

  login() {
    this.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
  }
}
