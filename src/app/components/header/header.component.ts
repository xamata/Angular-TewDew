import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatButton } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, FormsModule, MatButton, MatIconModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  items: string[] = [];
  newItem: string = '';
  clickMessage: string = '';
  public addItem() {
    console.log('addItem');
    if (this.newItem.trim() !== '') {
      this.items.push(this.newItem.trim());
      this.newItem = '';
    }
  }
  public removeItem(item: string) {
    console.log('removeitem');
    this.items = this.items.filter((i) => i !== item);
  }
}
