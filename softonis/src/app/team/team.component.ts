import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {

  teamTtl = `Our team maintains an effective mix of 
  development experience and seasoned leadership.`
  teamsubttl = 'Connect with your clients in a different way'

  constructor() { }

  ngOnInit() {
  }

}
