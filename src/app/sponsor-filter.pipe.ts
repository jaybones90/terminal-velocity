import { Pipe, PipeTransform } from '@angular/core';
import { TeamMember } from './team-member.model';

@Pipe({
  name: 'sponsorFilter',
  pure: false
})
export class sponsorFilterPipe implements PipeTransform {

  transform(teamMembers: TeamMember[], desiredFilter?: string) {
    let output: TeamMember[] = [];
    if (desiredFilter === 'all') {
      return teamMembers;
    } else {
      teamMembers.forEach((member) => {
        if (member.sponsors === desiredFilter) {
          output.push(member)
        }
      });
      return output;
    }
  }

}
