import {
  Component,
  computed,
  DestroyRef,
  inject,
  input,
  OnInit,
} from '@angular/core';
import { UsersService } from '../users.service';
import {
  ActivatedRoute,
  Router,
  RouterOutlet,
  RouterLink,
} from '@angular/router';

@Component({
  selector: 'app-user-tasks',
  standalone: true,
  templateUrl: './user-tasks.component.html',
  styleUrl: './user-tasks.component.css',
  imports: [RouterOutlet, RouterLink],
})
export class UserTasksComponent implements OnInit {
  userId = input.required<string>();
  userName = '';
  private usersService = inject(UsersService);
  private activatedRoute = inject(ActivatedRoute);
  destroyRef = inject(DestroyRef);

  // userName = computed(() => {
  //   return this.usersService.users.find((user) => user.id === this.userId())
  //     ?.name;
  // });

  ngOnInit(): void {
    // Alternative way to get the route parameter using ActivatedRoute
    console.log(this.activatedRoute);

    const subscription = this.activatedRoute.paramMap.subscribe({
      next: (params) => {
        this.userName =
          (this.usersService.users.find(
            (user) => user.id === params.get('userId')
          )?.name as string) || '';
      },
    });
    this.destroyRef.onDestroy(() => {
      subscription.unsubscribe();
    });
  }
}
