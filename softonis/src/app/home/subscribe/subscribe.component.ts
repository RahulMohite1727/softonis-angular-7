import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-subscribe',
  templateUrl: './subscribe.component.html',
  styleUrls: ['./subscribe.component.css']
})
export class SubscribeComponent implements OnInit {

  title="Subscribe to receive free updates!";
  subtitle="Your email will open up for you the world of great software, made according to the latest technologies.";
  constructor() { }

  ngOnInit() {
  }

}
