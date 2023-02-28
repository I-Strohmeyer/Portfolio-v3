import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
  year = 2022;

  constructor() {
    this.year = this.getCurrentYear();
  }

  ngOnInit(): void {}

  getCurrentYear() {
    let date = new Date().getFullYear();
    console.log(date);
    return date;
  }
}
