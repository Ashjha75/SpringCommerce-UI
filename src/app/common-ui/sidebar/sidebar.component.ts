import {Component, Input, OnInit} from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
  animations: [
    trigger('slideInOut', [
      state('in', style({transform: 'translateX(0)'})),
      state('out', style({transform: 'translateX(-100%)'})),
      transition('in => out', animate('300ms ease-in-out')),
      transition('out => in', animate('300ms ease-in-out'))
    ])
  ]
})
export class SidebarComponent implements OnInit {
  @Input() direction: 'left' | 'right' = 'left';
  @Input() isOpen: boolean = false;
  @Input() content: any;

  constructor() {
  }

  ngOnInit(): void {
  }

  get sidebarState() {
    return this.isOpen ? 'in' : 'out';
  }
}
