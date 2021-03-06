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

   addNewMember(newMember) {
     this.teamMembers.push(newMember);
   }

   updateMember(memberToUpdate) {
     let memberFromFirebase = this.getMemberById(memberToUpdate.$key);
     memberFromFirebase.update({name: memberToUpdate.name, nickName: memberToUpdate.nickName, age: memberToUpdate.age, sex: memberToUpdate.sex, height: memberToUpdate.height, weight: memberToUpdate.weight, hometown: memberToUpdate.hometown, jumps: memberToUpdate.jumps, sponsors: memberToUpdate.sponsors, image: memberToUpdate.image, bio: memberToUpdate.bio, 
     });
   }

   deleteMember(memberToDelete) {
     let memberFromFirebase = this.getMemberById(memberToDelete.$key);
     memberFromFirebase.remove();
   }


}
