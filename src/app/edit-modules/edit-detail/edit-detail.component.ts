import { Component, OnInit, Input } from '@angular/core';
import { Quest } from '../../models/quest.model';
import { QuestService } from 'src/app/services/quest.service';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-detail',
  templateUrl: './edit-detail.component.html',
  styleUrls: ['./edit-detail.component.css']
})
export class EditDetailComponent implements OnInit {
  @Input() quest: Quest;
  constructor(
    private questService: QuestService,
    private route: ActivatedRoute,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.getQuest();
  }

  getQuest(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.questService.getQuest(id)
      .subscribe(quest => this.quest = quest);
  }
  goBack(): void {
    this.location.back();
  }
  save(): void {
    this.questService.updateQuest(this.quest)
      .subscribe(() => this.goBack());
  }
}
