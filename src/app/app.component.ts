import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  styles: [
      `
      .center-text {
        text-align: center
      }
    `
  ],
  template: `
    <!--Replacing the inline style by center class-->
    <div class="center-text">
      <h1>
        Welcome to {{title}}!
      </h1>
    </div>
    <h2>Here are some links to help you start: </h2>
    <ul>
      <li>
        <h2><a target="_blank" href="https://angular.io/tutorial">Tour of Heroes</a></h2>
      </li>
      <li>
        <h2><a target="_blank" href="https://github.com/angular/angular-cli/wiki">CLI Documentation</a></h2>
      </li>
      <li>
        <h2><a target="_blank" href="https://blog.angular.io//">Angular blog</a></h2>
      </li>
    </ul>

  `,
})
export class AppComponent {
  title = 'app';
}
