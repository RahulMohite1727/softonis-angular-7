import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-team-cards',
  templateUrl: './team-cards.component.html',
  styleUrls: ['./team-cards.component.css']
})
export class TeamCardsComponent implements OnInit {

  constructor() { }
  @Input()
  cardttl:string
  @Input()
  position:string

  @Input()
  imgsrc:string

  ngOnInit() {
    console.log('imgsrc',this.imgsrc);
    
  }


}
