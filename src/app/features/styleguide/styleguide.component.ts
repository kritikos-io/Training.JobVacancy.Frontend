import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'aa-styleguide',
  imports: [CommonModule, RouterModule],
  templateUrl: './styleguide.component.html',
  styleUrl: './styleguide.component.scss',
})
export class StyleguideComponent {}
