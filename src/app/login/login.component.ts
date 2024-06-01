import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  template: `
    <form (ngSubmit)="onSubmit()">
      <input [(ngModel)]="username" placeholder="Username" name="username" />
      <input [(ngModel)]="password" type="password" placeholder="Password" name="password" />
      <button type="submit">Login</button>
    </form>
  `
})
export class LoginComponent {
  username: string = '';
  password: string = '';

  onSubmit() {
    console.log('Login attempt', this.username, this.password);
  }
}
