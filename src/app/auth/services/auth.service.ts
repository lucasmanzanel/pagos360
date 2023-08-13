import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth'

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loggedIn = false;


  constructor(private auth:AngularFireAuth) {}

  login(email:string,password:string){
    this.loggedIn = true;
    return this.auth.signInWithEmailAndPassword(email,password);
  }


  logout() {
    this.loggedIn = false;
  }

  isLoggedIn(): boolean {
    return this.loggedIn;
  }


}
