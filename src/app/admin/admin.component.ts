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
  newMemberForm = null;
  editOptions = null;

  constructor(private dataService: DataService, private router: Router) { }

  ngOnInit() {
  }

  showNewMemberForm() {
    this.newMemberForm = true;
  }

  hideNewMemberForm() {
    this.newMemberForm = null;
  }

  showEditOptions() {
    this.editOptions = true;
  }

  hideEditOptions() {
    this.editOptions = null;
  }

  submitForm(name, nickname, age, sex, height, weight, hometown, jumps, sponsers, bio, image) {
    const newMember = new TeamMember(name,nickname, age, sex, height, weight, hometown, jumps, sponsers, bio, image)
    this.dataService.addNewMember(newMember);
    this.router.navigate(['']);
  }

}
