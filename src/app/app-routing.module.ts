// import { NgModule } from '@angular/core';
// import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

// const routes: Routes = [
//   { path: '', redirectTo: 'login', pathMatch: 'full' },
//   { path: 'movies', loadChildren: './pages/movies/movies.module#MoviesPageModule' },
//   { path: 'movies/:id', loadChildren: './pages/movie-details/movie-details.module#MovieDetailsPageModule' },
//   { path: 'movie-details', loadChildren: './pages/movie-details/movie-details.module#MovieDetailsPageModule' },
//   { path: 'login', loadChildren: './pages/login/login.module#LoginPageModule' }
// ];

// @NgModule({
//   imports: [
//     RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
//   ],
//   exports: [RouterModule]
// })
// export class AppRoutingModule { }

import { NgModule } from "@angular/core";
import { PreloadAllModules, RouterModule, Routes } from "@angular/router";

const routes: Routes = [
  {
    path: "",
    redirectTo: "loader",
    pathMatch: "full"
  },
  {
    path: "movies",
    loadChildren: "./pages/movies/movies.module#MoviesPageModule"
  },
  {
    path: "movies/:id",
    loadChildren:
      "./pages/movie-details/movie-details.module#MovieDetailsPageModule"
  },
  { path: "login", loadChildren: "./pages/login/login.module#LoginPageModule" },
  { path: 'loader', loadChildren: './pages/loader/loader.module#LoaderPageModule' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
