import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-edit-member',
  templateUrl: './edit-member.component.html',
  styleUrls: ['./edit-member.component.css']
})
export class EditMemberComponent implements OnInit {
  @Input() childSelectedMember;
  editForm = null;


  constructor() { }

  ngOnInit() {
  }

  showEditForm() {
    this.editForm = true;
  }



}
