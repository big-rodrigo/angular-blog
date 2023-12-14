import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink, RouterModule } from '@angular/router';
import { mockData } from '../../data/mockData';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-post',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './post.component.html',
  styleUrl: './post.component.css'
})
export class PostComponent implements OnInit {

  title: string = '';

  description: string = '';

  imgUrl: string = '';

  id: number = -1337;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.id = Number(params.get('id'));
    })

    this.seed(this.id);
  }

  seed(id: number): void {
    const postData = mockData.find(post => post.id === id);

    if (!postData) {
      this.id = -1337;
      return;
    };

    this.title = postData.title;
    this.description = postData.description;
    this.imgUrl = postData.imgUrl;
  }
}
