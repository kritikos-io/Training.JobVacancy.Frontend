import { NgClass, NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'aa-textsizes',
  imports: [NgFor, NgClass],
  templateUrl: './textsizes.component.html',
  styleUrl: './textsizes.component.scss',
})
export class TextsizesComponent {
  textSizes = [
    { size: 'small', class: 'aa--text-sm' },
    { size: 'medium', class: 'aa--text-base' },
    { size: 'large', class: 'aa--text-lg' },
  ];
}
