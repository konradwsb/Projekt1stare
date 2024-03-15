import { Component } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: 'app-logowanie',
  templateUrl: './logowanie.component.html',
  styleUrls: ['./logowanie.component.css']
})
export class LogowanieComponent {
  formData = {
    username: '',
    password: ''
  };

  constructor(private router: Router) {} // Wstrzykiwanie routera

  logowanie() {
    // Tutaj można zaimplementować logikę logowania
    if (this.formData.username === 'user' && this.formData.password === 'password') {
      console.log('Zalogowano pomyślnie');
      this.router.navigate(['/powitanie']); // Przeniesienie do komponentu powitanie
    } else {
      console.log('Błąd logowania. Sprawdź dane.');
    }
  }
}
