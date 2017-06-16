import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { TeamMembersComponent } from './team-members/team-members.component';

const appRoutes: Routes = [
  {
    path: '',
    component: WelcomeComponent
  },
  {
    path: 'team-members',
    component: TeamMembersComponent
  }

];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
