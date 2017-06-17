import { Pipe, PipeTransform } from '@angular/core';
import { TeamMember } from './team-member.model';

@Pipe({
  name: 'sponserFilter',
  pure: false
})
export class SponserFilterPipe implements PipeTransform {

  transform(teamMembers: TeamMember[], desiredFilter?: string) {
    let output: TeamMember[] = [];
    if (desiredFilter === 'all') {
      return teamMembers;
    } else {
      teamMembers.forEach((member) => {
        if (member.sponsers === desiredFilter) {
          output.push(member)
        }
      });
      return output;
    }
  }

}
