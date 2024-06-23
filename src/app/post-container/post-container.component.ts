import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-post-container',
  templateUrl: './post-container.component.html',
  styleUrls: ['./post-container.component.css'],
})
export class PostContainerComponent implements OnInit {
  constructor(private httpClient: HttpClient) {}

  data: any[] = [];

  ngOnInit(): void {
    this.httpClient
      .get('https://jsonplaceholder.typicode.com/posts')
      .subscribe((response: any) => {
        this.data = response;
      });
  }

  title: string = 'Test Title';
  description: string = 'Test Description';
}
