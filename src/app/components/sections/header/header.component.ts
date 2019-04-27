import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.global-nav');

    burger.addEventListener('click', () => {
      nav.classList.toggle('global-nav_opened');
    });
  }

}
