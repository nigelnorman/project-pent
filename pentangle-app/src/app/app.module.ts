import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { ClarityModule } from '@clr/angular';

import { AppComponent } from './app.component';
import { BroadcasterService } from './core/services/broadcaster.service';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app.routing.module';
import { ProjectsComponent } from './featured/projects/projects.component';
import { ArtworkComponent } from './featured/artwork/artwork.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    HomeComponent,
    ProjectsComponent,
    ArtworkComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ClarityModule,
    AppRoutingModule
  ],
  providers: [
    BroadcasterService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
