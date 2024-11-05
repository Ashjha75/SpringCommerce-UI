import {NgClass} from '@angular/common';
import {Component, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './button.component.html',
  styleUrl: './button.component.css'
})
export class ButtonComponent {
  @Input() label: string = 'Click Me';
  @Input() type: string = 'primary'; // For example: 'primary', 'secondary'
  @Output() onClick = new EventEmitter<void>();

  handleClick() {
    this.onClick.emit();
  }
}


