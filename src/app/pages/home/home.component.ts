import { Component, OnInit } from '@angular/core';
import { TitleComponent } from './components/title/title.component';
import { MainPostComponent } from './components/main-post/main-post.component';
import { PostComponent } from './components/post/post.component';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { mockData } from '../../data/mockData';

interface Post {
  id: number;
  description: string;
  title: string;
  imgUrl: string;
}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink, TitleComponent, MainPostComponent, PostComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  posts: Post[] = [];
  
  constructor() {
    this.posts = mockData;
  }
}
