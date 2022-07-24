import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  userEmail: string = 'sewdohe@protonmail.com'
  userPassword: string = 'e4hbpp69n587677$A!~'

  constructor(public auth: AngularFireAuth) { }

  ngOnInit(): void {
  }

  login() {
    this.auth.signInWithEmailAndPassword(this.userEmail, this.userPassword);
  }

  logout() {
    this.auth.signOut();
  }

}
