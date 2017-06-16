import { Component, OnInit } from '@angular/core';
import { FirebaseListObservable } from 'angularfire2/database';
import { DataService } from '../data.service';
import { TeamMember } from '../team-member.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-team-members',
  templateUrl: './team-members.component.html',
  styleUrls: ['./team-members.component.css'],
  providers: [DataService]
})
export class TeamMembersComponent implements OnInit {
  teamMembers: TeamMember[];

  constructor(private dataService: DataService, private router: Router) { }

  ngOnInit() {
   this.dataService.getTeamMembers().subscribe(dataLastEmittedFromObserver => { this.teamMembers = dataLastEmittedFromObserver;})
  }

  goToProfilePage(member) {
    this.router.navigate(['profile', member.$key])
  }




}
