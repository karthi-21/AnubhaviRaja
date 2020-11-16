import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonService } from '../service/common.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {
movies: any;

  constructor(private service: CommonService, private router: Router) {}

  ngOnInit(): void {
    this.service.getMockJson().subscribe(res => {
      this.movies = res;
    });
  }

  onMovieClick(movie): void {
    this.router.navigate(['/tabs/tab1/movie', movie.utubeId]);
  }

}
