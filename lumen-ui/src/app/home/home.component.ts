import { Component, OnInit } from '@angular/core';
import { Module } from '../utils/types';
import { modules } from '../utils/fake-data';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  modules: Module[] = modules;
  breakpoint: number = 0;

  ngOnInit(): void {
    this.breakpoint = (window.innerWidth <= 400) ? 2 : 4;
  }
  
  handleSize(event: any) {
    this.breakpoint = (event.target.innerWidth <= 400) ? 2 : 4;
  }
}
