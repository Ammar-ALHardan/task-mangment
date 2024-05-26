import { Component , signal , computed, Input , input, Output, EventEmitter, output } from '@angular/core';
import { User } from './user.model';
// type User = {
//   id: string;
//   avatar: string;
//   name: string;
// }



// const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length)

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  // @Input({required: true}) id!: string;
  // @Input({required: true}) avatar!: string ;
  // @Input({required: true}) name!: string ;

  @Input({required: true}) user!: User;
  @Input({required: true}) selected!: boolean;
  @Output() select = new EventEmitter<string>();


    get imagePath() {
    return 'assets/users/' + this.user.avatar;
  }
  onSelectUser() {
    this.select.emit(this.user.id);
  }

  // select = output<string>();
  // avatar = input.required<string>(); 
  // name = input.required<string>(); 
  // imagePath = computed( () => {
  //   'assets/users/' + this.avatar()
  // } );

  // selectedUser = signal(DUMMY_USERS[randomIndex]) ;

  // get imagePath() {
  //   return 'assets/users/' + this.selectedUser().avatar
  // }

  // onSelectUser() {
  //   const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);
  //   this.selectedUser.set(DUMMY_USERS[randomIndex]);
  //   this.selectedUser = DUMMY_USERS[randomIndex];
  // }
}
