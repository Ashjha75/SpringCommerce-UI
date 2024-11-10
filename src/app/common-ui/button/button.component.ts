import {NgClass, NgIf} from '@angular/common';
import {Component, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [
    NgClass, NgIf
  ],
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent {
  @Input() label: string = 'Click Me';
  @Input() type: string = 'secondary'; // 'primary', 'secondary', 'quantity'
  @Output() onClick = new EventEmitter<void>();

  quantity: number = 1;

  handleClick() {
    this.onClick.emit();
  }

  increaseQuantity() {
    this.quantity++;
    this.onClick.emit();
  }

  decreaseQuantity() {
    if (this.quantity > 1) {
      this.quantity--;
      this.onClick.emit();
    }
  }
}
