import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  public postForm:FormGroup

  constructor(
    public postService: PostService,
    public formBuilder: FormBuilder,
    public router:Router
  ) { 
    this.postForm = this.formBuilder.group({
      title : [''],
      content : [''],
      author : ['']
    })
  }

  onSubmit(){
    this.postService.createPost(this.postForm.value)
    this.router.navigate( [''] )
  }
  
  ngOnInit(): void {
  }
}
