import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { AppRoutingModule, routingComponents } from './app-routing.module';
import { HeaderComponent } from './header/header.component';
import { ShowPageComponent } from './show-page/show-page.component';
import { SearchResultsPageComponent } from './search-results-page/search-results-page.component';
import {FormsModule} from '@angular/forms';
import { TvMazeService } from "./services/tv-maze.service";
import { HomePageComponent } from './home-page/home-page.component';
import { HttpClientModule } from '@angular/common/http';
import { ShowCardComponent } from './show-card/show-card.component';
import { ShowSeasonsComponent } from './show-seasons/show-seasons.component';
import { ShowCastComponent } from './show-cast/show-cast.component';
import { ShowCrewComponent } from './show-crew/show-crew.component';
import { PesronProfilePageComponent } from './pesron-profile-page/pesron-profile-page.component';
import { ArrayDisplayComponent } from './array-display/array-display.component';
import { PersonCastComponent } from './person-cast/person-cast.component';
import { PersonCrewComponent } from './person-crew/person-crew.component';
import { SeasonPageComponent } from './season-page/season-page.component';
import { EpisodePageComponent } from './episode-page/episode-page.component';

@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    HeaderComponent,
    ShowPageComponent,
    SearchResultsPageComponent,
    HomePageComponent,
    ShowCardComponent,
    ShowSeasonsComponent,
    ShowCastComponent,
    ShowCrewComponent,
    PesronProfilePageComponent,
    ArrayDisplayComponent,
    PersonCastComponent,
    PersonCrewComponent,
    SeasonPageComponent,
    EpisodePageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [TvMazeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
