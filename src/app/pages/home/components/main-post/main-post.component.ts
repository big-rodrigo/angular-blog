import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-main-post',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './main-post.component.html',
  styleUrl: './main-post.component.css'
})
export class MainPostComponent {
  
  @Input()
  id: number = -1337;

  @Input()
  title: string = '';
  
  @Input()
  description: string = '';
  
  @Input()
  imgUrl: string = '';
}
