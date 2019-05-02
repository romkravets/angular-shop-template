import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {
  titleBtn: string = 'Sign up now';

  constructor() { }

  ngOnInit() {
  }

}
