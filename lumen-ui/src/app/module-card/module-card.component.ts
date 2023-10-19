import { Component, Input } from '@angular/core';
import { Module } from '../utils/types';

@Component({
  selector: 'app-module-card',
  templateUrl: './module-card.component.html',
  styleUrls: ['./module-card.component.css']
})
export class ModuleCardComponent {
  @Input() width!: number;
  @Input() module!: Module;
}
