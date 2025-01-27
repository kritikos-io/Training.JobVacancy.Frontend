import { Component } from '@angular/core';

@Component({
  selector: 'aa-playground',
  standalone: true,
  imports: [],
  templateUrl: './playground.component.html',
})
export class PlaygroundComponent {
  classContent =
    'aa--justify-left aa--flex aa--hidden aa--grow aa--flex-col aa--gap-5 aa--text-gray-500 md:aa--flex md:aa--flex-row';
  onClick() {
    if (
      this.classContent ==
      'aa--justify-left aa--flex aa--inline-block aa--grow aa--flex-col aa--gap-5 aa--text-gray-500 md:aa--flex md:aa--flex-row'
    ) {
      this.classContent =
        'aa--justify-left aa--flex aa--hidden aa--grow aa--flex-col aa--gap-5 aa--text-gray-500 md:aa--flex md:aa--flex-row';
    } else {
      this.classContent =
        'aa--justify-left aa--flex aa--inline-block aa--grow aa--flex-col aa--gap-5 aa--text-gray-500 md:aa--flex md:aa--flex-row';
    }
  }
}
