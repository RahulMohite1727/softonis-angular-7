import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  //var x = document.getElementById("mapholder");


  // getLocation()
  // {
  //   if (navigator.geolocation) {
  //     navigator.geolocation.watchPosition(showPosition);
  //   } else { 
  //    // x.innerHTML = "Geolocation is not supported by this browser.";
  //   }
  // }
      
  showPosition(position) {
     // x.innerHTML="Latitude: " + position.coords.latitude + 
      //"<br>Longitude: " + position.coords.longitude;
      
      var latlon = position.coords.latitude + "," + position.coords.longitude;
  
      var img_url = "https://maps.googleapis.com/maps/api/staticmap?center="+latlon+"&zoom=14&size=400x300&sensor=false&key=YOUR_:KEY";
  
      document.getElementById("mapholder").innerHTML = "<img src='"+img_url+"'>";
  }
  
  
  



}
