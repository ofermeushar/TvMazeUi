import { Component, OnInit } from '@angular/core';
import { TvMazeService } from '../services/tv-maze.service';
import { Router } from '@angular/router';
import { IShow } from '../models/IShow';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  private searchValue="girls";
  constructor(private tvMazeService:TvMazeService,private router:Router) { }

  ngOnInit() {
  }
  onSearchClick(){
      this.tvMazeService.getShowByName(this.searchValue).subscribe((shows:Array<IShow>)=>{
        let showsIds= new Array();
        shows.forEach(show => {
          showsIds.push(show.show.id);
        });
        console.log(shows);
        console.log(showsIds);
        
        this.router.navigate(['/searchResultsPage',{showsIds:showsIds}]);
      });
  }
}
