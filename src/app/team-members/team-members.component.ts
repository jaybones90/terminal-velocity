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
  currentRoute: string = this.router.url;
  uniquesponsors: string[] = [];
  desiredFilter: string = 'all';

  constructor(private dataService: DataService, private router: Router) { }

  ngOnInit() {
   this.dataService.getTeamMembers().subscribe(dataLastEmittedFromObserver => { this.teamMembers = dataLastEmittedFromObserver;
   this.teamMembers.forEach((member) => {
      if (this.uniquesponsors.includes(member.sponsors)) {
      } else {
        this.uniquesponsors.push(member.sponsors);
        }
      });
    });
  }


  goToProfilePage(member) {
    this.router.navigate(['profile', member.$key])
  }

  onChange(filter) {
    this.desiredFilter = filter;
  }






}
