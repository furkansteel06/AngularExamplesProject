import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lists-home',
  templateUrl: './lists-home.component.html',
  styleUrls: ['./lists-home.component.css']
})
export class ListsHomeComponent implements OnInit {

  numbers = [
    { value: 50, label: 'Müşteri' },
    { value: '3500 TL', label: 'Ciro' },
    { value: 65, label: 'Yorumlar' }
  ]

  constructor() { }

  ngOnInit() {
  }

}
