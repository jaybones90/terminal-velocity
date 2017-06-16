import { Component, OnInit } from '@angular/core';
import { FirebaseListObservable } from 'angularfire2/database';
import { DataService } from '../data.service';
import { TeamMember } from '../team-member.model';
import { Router } from '@angular/router';



@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
  providers: [DataService]
})
export class AdminComponent implements OnInit {
  showNewMemberForm = null;
  editOptions = null;

  constructor(private dataService: DataService, private router: Router) { }

  ngOnInit() {
  }

  showForm() {
    this.showNewMemberForm = true;
  }

  showEditOptions() {
    this.editOptions = true;
  }

  submitForm(name, nickname, age, sex, height, weight, homeTown, jumps, sponsers, bio, image) {
    const newMember = new TeamMember(name,nickname, age, sex, height, weight, homeTown, jumps, sponsers, bio, image)
    this.dataService.addNewMember(newMember);
    this.router.navigate(['']);
  }

}
