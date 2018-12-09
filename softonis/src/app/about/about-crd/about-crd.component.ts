import { Component, OnInit ,Input} from '@angular/core';

@Component({
  selector: 'app-about-crd',
  templateUrl: './about-crd.component.html',
  styleUrls: ['./about-crd.component.css']
})
export class AboutCrdComponent implements OnInit {

  @Input()

  imgsrc:string
   @Input()
  header:string
   @Input()
  msg:string

  constructor() { }

  ngOnInit() {
  }

}
