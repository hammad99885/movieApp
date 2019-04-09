import { Component, OnInit } from "@angular/core";
import { Parse } from "parse";
import { ToastController, NavController } from "@ionic/angular";
// import { RouterLink } from '@angular/router';
// NavController
// RouterLink
// import { async } from '@angular/core/testing';
import { Router } from "@angular/router";
import { Storage } from "@ionic/storage";

@Component({
  selector: "app-login",
  templateUrl: "./login.page.html",
  styleUrls: ["./login.page.scss"]
})
export class LoginPage implements OnInit {
  constructor(
    private toastCtrl: ToastController,
    public navCtrl: NavController,
    private router: Router,
    private storage: Storage
  ) {}

  redir: boolean = false;
  username: string = "";
  password: string = "";

  async toastLoger(message) {
    const toast = await this.toastCtrl.create({
      message: message,
      duration: 2000
    });
    toast.present();
  }

  signUp() {
    Parse.User.signUp(this.username, this.password).then(
      resp => {
        console.log("Logged in successfully", resp.id);
        console.log("abc",resp.id)
        this.storage.set("UserId", resp.id.toString())
        // Clears up the form
        this.username = "";
        this.password = "";
        // document.lo
        // this.storage.set("UserId", resp.id);
        
        this.redir = true;
        
        this.router.navigateByUrl("/movies");
        this.toastLoger("Succesfully Loggedin");
      },
      err => {
        console.log("Error signing in", err);
        this.toastLoger(err.toString());
      }
    );
  }

  signIn() {
    Parse.User.logIn(this.username, this.password).then(
      resp => {
        console.log("Logged in successfully", resp);
        // console.log("abc",resp.id);
        this.storage.set("UserId", resp.id.toString());
        setTimeout(()=>{
          this.storage.get("UserId").then(val => {
            console.log("Your age is", val);
          });
        },2000)

        this.router.navigateByUrl("/movies");

        this.toastLoger("Succesfully Logged in");
        
      },
      err => {
        console.log("Error logging in", err);
        this.toastLoger(`Error logging in: ${err.toString()}`);
      }
    );
  }

  ngOnInit() {
  }
}
