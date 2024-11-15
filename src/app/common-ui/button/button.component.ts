import {Component, EventEmitter, Input, Output} from '@angular/core';


@Component({
  selector: 'app-button',

  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent {

  @Input() label: string = 'Click Me';
  @Input() type: string = 'primary'; // 'primary', 'secondary', 'quantity'
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
