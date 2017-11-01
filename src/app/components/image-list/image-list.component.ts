import { Component, OnInit } from '@angular/core';
import { ImagesService } from '../../services/images.service';  
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import 'hammerjs';


@Component({
  selector: 'app-image-list',
  templateUrl: './image-list.component.html',
  styleUrls: ['./image-list.component.css']
})
export class ImageListComponent implements OnInit {
  images: any[];
  imagesFound: boolean = false;
  searching: boolean = false;
  limit: string;
  EyeClicked:boolean = false;

  isClicked(){
    this.EyeClicked = !this.EyeClicked;
  }

  handleSuccess(data){
    this.imagesFound = true;
    this.images = data.hits;
    console.log(data.hits);
  }

  handleError(error){
    console.log(error);
  }

  constructor(private _imagesService: ImagesService) { }

  searchImages(query:string, picslimit:string){
    this.searching = true;
    if(this.EyeClicked == true){
      this.limit = picslimit;
    }else{
      this.limit = "10";
    }
    return this._imagesService.getImage(query,this.limit).subscribe(
      data => this.handleSuccess(data),
      error => this.handleError(error),
      () => this.searching = false
    )
  }

  ngOnInit() {
  }

}
