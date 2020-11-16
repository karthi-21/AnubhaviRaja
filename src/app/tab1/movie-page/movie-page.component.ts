import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonService } from 'src/app/service/common.service';

@Component({
  selector: 'app-movie-page',
  templateUrl: './movie-page.component.html',
  styleUrls: ['./movie-page.component.scss'],
})
export class MoviePageComponent implements OnInit {
videoId: any;
movie: any;
  constructor(private service: CommonService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe((params) => this.videoId = params.movie);
    this.service.getMockJson().subscribe(res => this.getMovieDetail(res));
  }

  getMovieDetail(responce): void {
    this.movie = responce.find(x => x.utubeId === this.videoId);
    console.log(this.movie);
  }

}
