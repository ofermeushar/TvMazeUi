import { NgModule } from "@angular/core";
import { Routes,RouterModule } from "@angular/router";
import { SearchResultsPageComponent } from "./search-results-page/search-results-page.component";
import { HomePageComponent } from "./home-page/home-page.component";
import { ShowPageComponent } from "./show-page/show-page.component";
import { PesronProfilePageComponent } from "./pesron-profile-page/pesron-profile-page.component";
import { SeasonPageComponent } from "./season-page/season-page.component";
import { EpisodePageComponent } from "./episode-page/episode-page.component";

const routes:Routes=[
    {path: '',component:HomePageComponent},
    {path: 'searchResultsPage',component:SearchResultsPageComponent},
    {path: 'showPage/:id',component:ShowPageComponent},
    {path: 'person/:id',component:PesronProfilePageComponent},
    {path: 'season/:id',component:SeasonPageComponent},
    {path: 'episode',component:EpisodePageComponent},
    

];

@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]
})

export class AppRoutingModule{}
export const routingComponents =[
    HomePageComponent,
    SearchResultsPageComponent,
    ShowPageComponent,
    PesronProfilePageComponent,
    SeasonPageComponent,
    EpisodePageComponent,
]