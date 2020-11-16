import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/service/common.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {
  articles: any[] = [];
  constructor(private service: CommonService) {}

  ngOnInit() {
    this.service.getIndiaNews().subscribe(res => this.getNews(res));
  }

  getNews(res): void {
    this.articles = res.articles;
  }
}
