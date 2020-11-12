import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  rutas=[
    {
      name:'Home',
      path: '/home'
    },
    {
      name: 'About',
      path: '/about'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
