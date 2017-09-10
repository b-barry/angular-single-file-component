import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inline',
  template: `
    <p>
      inline Works!
    </p>
  `,
  styles: []
})
export class InlineComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
