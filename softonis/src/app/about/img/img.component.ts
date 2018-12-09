import { Component, OnInit ,Input } from '@angular/core';

@Component({
  selector: 'app-img',
  templateUrl: './img.component.html',
  styleUrls: ['./img.component.css']
})
export class ImgComponent implements OnInit {

  @Input()

  imgsrc:string
   @Input()
  header:string
   @Input()
  msg:string

  constructor() { }

  ngOnInit() {
    console.log('imgsrc',this.imgsrc);
  }

}
