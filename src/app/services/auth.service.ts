import { Injectable, NgZone } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { auth } from 'firebase';
import { User } from '../models/user';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  userData: any;
  currentUser: Observable<User>;
  user:User;

  constructor(
    public afs: AngularFirestore,
    public afAuth: AngularFireAuth,
    public router: Router,
    public ngZone: NgZone
  ) {
    this.afAuth.authState.subscribe(user => {
      if(user){
        this.userData = user;
        localStorage.setItem('user',JSON.stringify(this.userData));
        JSON.parse(localStorage.getItem('user'));
      }else{
        localStorage.setItem('user',null);
        JSON.parse(localStorage.getItem('user'));
      }
    })
   }

   SignIn(email, password){
     return this.afAuth.auth.signInWithEmailAndPassword(email,password).then((result) => {
       this.ngZone.run(() => {
         this.router.navigate(['dashboard'])
       });
       this.SetUserData(result.user);
       window.alert('login success')
     }).catch((error)=>{ 
       window.alert(error.message)
     })
   }

   SignUp(email, password){
     return this.afAuth.auth.createUserWithEmailAndPassword(email,password).then((result) => {
       this.SendVerificationMail();
       this.SetUserData(result.user);
       window.alert('User registered Successfully')
     }).catch((error) => {
       window.alert(error.message);
     })
   }

   SendVerificationMail() {
     return this.afAuth.auth.currentUser.sendEmailVerification().then(() => {
       this.router.navigate(['verify-email-address'])
     })
   }

   ForgotPassword(passwordResetEmail){
     return this.afAuth.auth.sendPasswordResetEmail(passwordResetEmail).then(() => {
       window.alert('Password rest email sent, Please check your inbox');
     }).catch((error) => {
       window.alert(error);
     })
   }

   get isLoggedIn(): boolean {
     const user = JSON.parse(localStorage.getItem('user'));
     return(user!==null && user.emailVerified!==false)? true:false;
   }

   GoogleAuth(){
     return this.AuthLogin(new auth.GoogleAuthProvider());
   }

   AuthLogin(provider){
     return this.afAuth.auth.signInWithPopup(provider)
     .then((result) => {
        this.ngZone.run(() => {
          this.router.navigate(['dashboard']);
        })
        this.SetUserData(result.user);
     }).catch((error)=>{
       window.alert(error);
     })
   }

   SetUserData(user){
     const userRef:AngularFirestoreDocument<any> = this.afs.doc(`user/${user.uid}`);
     const userData: User ={
        uid: user.uid,
        email: user.email,
        displayName: user.displayName,
        photoURL: user.photoURL,
        emailVerified: user.emailVerified,
     }
     return userRef.set(userData,{
       merge: true
     })
   }

   SignOut(){
     return this.afAuth.auth.signOut().then(() => {
       localStorage.removeItem('user');
       this.router.navigate(['']);
     })
   }

   getUserData(){
     return this.userData;
   }

   UpdateUserData(user: User){
    const userRef:AngularFirestoreDocument<any> = this.afs.doc(`user/${user.uid}`);
    const userData: User ={
       uid: user.uid,
       email: user.email,
       displayName: user.displayName,
       photoURL: user.photoURL,
       emailVerified: user.emailVerified,
    }
    return userRef.set(userData,{
      merge: true
    })
  }

  // getUser(): Observable<User> { 
  //   if(this.currentUser){
  //     return this.currentUser
  //   }
  //   if(this.userData){
  //     const userRef:AngularFirestoreDocument<User> = this.afs.doc<User>(`user/${this.userData.uid}`);
  //     return userRef.valueChanges();
  //   }
  // }
}