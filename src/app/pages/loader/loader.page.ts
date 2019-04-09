import { Component, OnInit } from "@angular/core";

import { Storage } from "@ionic/storage";
import { Router } from "@angular/router";

@Component({
  selector: "app-loader",
  templateUrl: "./loader.page.html",
  styleUrls: ["./loader.page.scss"]
})
export class LoaderPage implements OnInit {
  constructor(private storage: Storage, private router: Router) {}

  ngOnInit() {
    setTimeout(() => {
      this.storage.get("UserId").then(val => {
        console.log("user id", val);
        if(val!==null){
          this.router.navigateByUrl('/movies')
        }else{
          this.router.navigateByUrl('/login')
        }
      });
    }, 2000);
  }
}
