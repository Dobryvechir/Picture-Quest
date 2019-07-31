import { Component, OnInit } from "@angular/core";
import { Quest } from "../models/quest.model";
import { QuestService } from "../services/quest.service";

@Component({
  selector: "quest-edit",
  templateUrl: "./quest-edit.component.html",
  styleUrls: ["./quest-edit.component.css"]
})
export class QuestEditComponent implements OnInit {
  quests: Quest[]=[];

  constructor(private questService: QuestService) { }

  ngOnInit() {
    this.getQuests();
  }

  getQuests(): void {
    this.questService.getQuests()
      .subscribe(quests => this.quests = quests);
  }
  delete(quest: Quest): void {
    this.quests = this.quests.filter(h => h.id !== quest.id);
    this.questService.deleteQuest(quest).subscribe();
  }

  add(name: string, category: string, subcategory: string, description: string): void {
    name = name.trim();
    category = category.trim();
    subcategory = subcategory.trim();
    description = description.trim();
    if (!name) { return; }
    if (!category) {return;}
    if (!subcategory) {return;}
    if (!description) {return;}
    this.questService.addQuest({ name, category, subcategory, description } as Quest)
      .subscribe(quest => {
        this.quests.push(quest);
      });
  }
  
}
