import { Component, OnInit } from '@angular/core';
import { TvMazeService } from '../services/tv-maze.service';
import { IEpisode } from '../models/IEpisode';
import { Route } from '@angular/compiler/src/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  episodesSorted: IEpisode[];
  constructor(private tvMazeService: TvMazeService,private router:Router) { }

  ngOnInit() {

    let today = new Date().toISOString().split("T")[0];

    this.tvMazeService.getScheduleEpisodesListByDate(today).subscribe((episodes: IEpisode[]) => {
      this.episodesSorted = episodes.sort((a, b) => {
        if (a.show.rating.average < b.show.rating.average) {
          return 1;
        }
        if (a.show.rating.average > b.show.rating.average) {
          return -1;
        }
        return 0;
      });
      let idsList=new Array();
      this.episodesSorted.forEach((episode:IEpisode)=>{
        idsList.push(episode.show.id);
      });
      idsList=Array.from(new Set(idsList));
      console.log(idsList);
      
       this.router.navigate(['/searchResultsPage',{showsIds:idsList}])
    });



  }

}
