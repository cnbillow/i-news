import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-news-detail',
  templateUrl: './news-detail.page.html',
  styleUrls: ['./news-detail.page.scss'],
})
export class NewsDetailPage implements OnInit {

  // 存储newsId
  public newsId: string;
  // 存储news数据
  public newsData = {};

  constructor(
    public http: HttpClient,
    public route: ActivatedRoute
  ) { }

  ngOnInit() {
    // 从路由中获取id
    this.route.params.subscribe((data: any) => {
      this.newsId = data.id;
    });
    // 获取数据
    this.fetchNDData();
  }

  // 获取新闻详情数据
  fetchNDData() {
    this.http.get<any>("../../../assets/data/news-detail.json").subscribe((data: any) => {
      if (data.statusText === 'OK') {
        let res = data.data;
        res.forEach((item: any) => {
          if (item.id === this.newsId) {
            this.newsData = item;
          }
        });
      } else {
        throw new Error('data有误');
      }
    }, err => {
      throw new Error(err);
    });
  }

}
