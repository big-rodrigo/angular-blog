import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-post',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './post.component.html',
  styleUrl: './post.component.css'
})
export class PostComponent {

  @Input()
  id: number = -1337;
  
  @Input()
  title: string = '';

  @Input()
  imgUrl: string = '';
}
