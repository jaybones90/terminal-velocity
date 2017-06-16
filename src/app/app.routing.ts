import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { TeamMembersComponent } from './team-members/team-members.component';
import { ProfileComponent } from './profile/profile.component';
import { AboutComponent } from './about/about.component';

const appRoutes: Routes = [
  {
    path: '',
    component: WelcomeComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'team-members',
    component: TeamMembersComponent
  },
  {
    path: 'profile/:id',
    component: ProfileComponent
  }

];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
