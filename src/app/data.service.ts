import { Injectable } from '@angular/core';
import { TeamMember } from './team-member.model';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class DataService {
  teamMembers: FirebaseListObservable<any[]>;

  constructor(private database: AngularFireDatabase) {
    this.teamMembers = database.list('teamMembers');
   }

   getTeamMembers() {
     return this.teamMembers;
   }

   getMemberById(memberId: string) {
     return this.database.object('teamMembers/' + memberId);
   }


}
