import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";

import { AboutComponent } from "./about/about.component";

import { HomeComponent } from "./home/home.component";

import { RouterModule, Routes } from "@angular/router";

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
