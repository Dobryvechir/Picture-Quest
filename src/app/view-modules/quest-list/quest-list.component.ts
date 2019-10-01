import { Component, OnInit } from '@angular/core';
import { Quest } from "src/app/models/quest.model";
import { QuestService } from "src/app/services/quest.service";


@Component({
  selector: 'app-quest-list',
  templateUrl: './quest-list.component.html',
  styleUrls: ['./quest-list.component.css']
})
export class QuestListComponent implements OnInit {
  quests: Quest[]=[];
  start: number;
  finish: number;
  public search:any = '';
  Quest: any[] = [];
  
  constructor(private questService: QuestService) {

   }
  
  ngOnInit() {
    this.getQuests();
    this.start=0;
    this.finish=25;
  }
  getQuests(): void {
    this.questService.getQuests()
      .subscribe(quests => this.quests = quests);
     
  }
  delete(quest: Quest): void {
    this.quests = this.quests.filter(h => h.id !== quest.id);
    this.questService.deleteQuest(quest).subscribe();
  }
 next(){
  this.finish+=25;
  this.start+=25;
 }
}