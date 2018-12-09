import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-features',
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.css']
})
export class FeaturesComponent implements OnInit {
  

  title='Compare All Features of Our Product'
  subtit = 'Connect with your clients in a different way'

  constructor() { }

  ngOnInit() {
  }

}
