import { Component, OnInit } from '@angular/core';
import { FirebaseListObservable } from 'angularfire2/database';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { DataService } from '../data.service';
import { TeamMember } from '../team-member.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
  providers: [DataService]
})
export class ProfileComponent implements OnInit {
  memberId: string;
  memberToDisplay: TeamMember;

  constructor(private route: ActivatedRoute, private dataService: DataService, private location: Location) { }

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
    this.memberId = urlParameters['id'];
  });
   this.dataService.getMemberById(this.memberId).subscribe(dataLastEmittedFromObserver => {this.memberToDisplay = dataLastEmittedFromObserver});
  }

}
