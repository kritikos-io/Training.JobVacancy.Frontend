import { NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'aa-colors',
  imports: [NgFor],
  templateUrl: './colors.component.html',
  styleUrl: './colors.component.scss',
})
export class ColorsComponent {
  colors = ['#2A879B', '#F8FAFD', '#8ADFC4'];
}
