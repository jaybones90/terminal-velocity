import { Component, OnInit, Input } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-edit-member',
  templateUrl: './edit-member.component.html',
  styleUrls: ['./edit-member.component.css']
})
export class EditMemberComponent implements OnInit {
  @Input() childSelectedMember;
  editForm = null;


  constructor(private dataService: DataService) { }

  ngOnInit() {
  }

  showEditForm() {
    this.editForm = true;
  }

  beginUpdatingMember(memberToUpdate) {
    this.dataService.updateMember(memberToUpdate);
  }

  beginDeletingMember(memberToDelete) { 
    this.dataService.deleteMember(memberToDelete);
  }



}
