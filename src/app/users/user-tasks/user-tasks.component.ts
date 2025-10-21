import { Component, computed, inject, input } from '@angular/core';
import { UsersService } from '../users.service';
import { User } from '../user/user.model';

@Component({
  selector: 'app-user-tasks',
  standalone: true,
  templateUrl: './user-tasks.component.html',
  styleUrl: './user-tasks.component.css',
})
export class UserTasksComponent {
  userId = input.required<string>();
  private usersService = inject(UsersService);

  userName = computed(() => {
    return this.usersService.users.find((user) => user.id === this.userId())
      ?.name;
  });
}

// Extracting Dynamic Route Parameters via @Input()

// You don't have to extract dynamic route parameters via signal-based inputs - you can also use @Input()-based inputs!

// To do this, you can define the input like this:

// @Input({required: true}) userId!: string;
// You can then use this input in any way needed - for example inside of a getter function.

// If you want to run some code whenever the input value changes, you can also define an extra setter function that contains the to-be-executed code. Like this:

// @Input()
// set userId(uid: string) {
//   console.log(uid);
// }
