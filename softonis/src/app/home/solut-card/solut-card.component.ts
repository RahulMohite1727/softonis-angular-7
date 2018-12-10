import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-solut-card',
  templateUrl: './solut-card.component.html',
  styleUrls: ['./solut-card.component.css']
})
export class SolutCardComponent implements OnInit {

@Input('cardTtl')
  CardTitle= String;

@Input('cardTxt')
  CardText:string;

  constructor() { }

  ngOnInit() {
  }

}
