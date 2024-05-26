import { Component , signal , computed, Input , input, Output, EventEmitter, output } from '@angular/core';
import { DUMMY_USERS } from '../dummy-users';

// const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length)

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  @Input({required: true}) id!: string;
  @Input({required: true}) avatar!: string ;
  @Input({required: true}) name!: string ;
  @Output() select = new EventEmitter();
  // select = output<string>();
  // avatar = input.required<string>(); 
  // name = input.required<string>(); 
  // imagePath = computed( () => {
  //   'assets/users/' + this.avatar()
  // } );

    get imagePath() {
    return 'assets/users/' + this.avatar;
  }
  onSelectUser() {
    this.select.emit(this.id);
  }



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
