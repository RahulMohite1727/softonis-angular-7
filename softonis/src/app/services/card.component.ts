import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input()
  imgUrl: string
  @Input()
  ttl: string
  @Input()
  msg: string

  constructor() { }

  ngOnInit() {
  }

}
