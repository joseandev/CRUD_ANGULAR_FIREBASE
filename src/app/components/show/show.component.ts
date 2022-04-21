import { Component, OnInit } from '@angular/core';

//Importamos nuestro modelo
import { Post } from 'src/app/post.model';
//Importamos nuestro servicio
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css']
})
export class ShowComponent implements OnInit {
  Posts:Post[];

  constructor(private postService:PostService) { }

  ngOnInit(): void {
    this.postService.getPosts().subscribe( (res) => {
      this.Posts = res.map( (e) => {
        return {
          id: e.payload.doc.id,
          ...(e.payload.doc.data() as Post)
        }
      })
    })
  }

  deleteRow = (id:string) => this.postService.deletePost(id)

}

