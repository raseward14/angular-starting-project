import { Component, signal, computed } from '@angular/core';

import { DUMMY_USERS } from '../dummy-users'  

const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length)
// Math.random() generates a random decimal number between 0 (inclusive) and 1 (exclusive)
// Example: 0.734921...

// Math.random() * DUMMY_USERS.length scales this random number to be between 0 and the length of the array
// If DUMMY_USERS has 5 items, this would give a number between 0 and 4.999...
// Example: 0.734921 * 5 = 3.674605...

// Math.floor() rounds this number down to the nearest integer
// Example: Math.floor(3.674605) = 3

// The result is a random integer between 0 and DUMMY_USERS.length - 1, which is a valid index for accessing any element in the array.

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  selectedUser = signal(DUMMY_USERS[randomIndex]);
  imagePath = computed(() =>  'assets/users/' + this.selectedUser().avatar)
  // get imagePath() {
  //   return 'assets/users/' + this.selectedUser.avatar
  // } 

  onSelectUser () {
    const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);
    this.selectedUser.set(DUMMY_USERS[randomIndex]);
  }
}
