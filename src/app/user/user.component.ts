import { Component } from '@angular/core';
import { GamesComponent } from '../games/games.component';

@Component({
  selector: 'app-user',
  imports: [GamesComponent],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  username = "LUCHER4321";
  isLoggedIn = false;
  favGame = "";
  getFav = (gameName: string) => this.favGame = gameName;
  greet = () => {
    alert("¡Hola!");
  };
}
