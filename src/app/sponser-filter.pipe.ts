import { Pipe, PipeTransform } from '@angular/core';
import { TeamMember } from './team-member.model';

@Pipe({
  name: 'sponserFilter'
})
export class SponserFilterPipe implements PipeTransform {

  transform(teamMembers: TeamMember[], desiredFilter?: string) {
    let output: TeamMember[] = [];
    
  }

}
