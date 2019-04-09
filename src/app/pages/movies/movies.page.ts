import { MovieService, SearchType } from "./../../services/movie.service";
import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { Parse } from "parse";
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';

@Component({
  selector: "app-movies",
  templateUrl: "./movies.page.html",
  styleUrls: ["./movies.page.scss"]
})
export class MoviesPage implements OnInit {
  results: Observable<any>;
  searchTerm: string = "";
  type: SearchType = SearchType.all;

  /**
   * Constructor of our first page
   * @param movieService The movie Service to get data
   */
  constructor(
    private movieService: MovieService,
    private toastCtrl: ToastController,
    private router: Router,
    private storage: Storage
  ) {}

  async toastLoger(message) {
    const toast = await this.toastCtrl.create({
      message: message,
      duration: 2000
    });
    toast.present();
  }

  ngOnInit() {
  }

  logOut() {
    Parse.User.logOut().then(
      resp => {
        console.log("Logged out successfully", resp);
        this.router.navigateByUrl('/login');
        this.storage.clear();
        this.toastLoger("Logedout Successfully")

      },
      err => {
        console.log("Error logging out", err);
        this.toastLoger(`can't logout:${err.toString()}`)
      }
    );
  }

  searchChanged() {
    // Call our service function which returns an Observable
    this.results = this.movieService.searchData(this.searchTerm, this.type);
    console.log(this.results)
  }
}
