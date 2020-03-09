import { Component, OnInit } from '@angular/core';
import { Quest } from "src/app/models/quest.model";
import { QuestService } from "src/app/services/quest.service";
import { FormBuilder, Validators } from "@angular/forms";
import { NgIf } from '@angular/common';

export interface Category {
  value: string;
  viewValue: string;
}

export interface Subcategory extends Category {
}

@Component({
  selector: 'app-quest-list',
  templateUrl: './quest-list.component.html',
  styleUrls: ['./quest-list.component.css', '../../style.css']
})
export class QuestListComponent implements OnInit {

  start: number;
  finish: number;
  public search: any = '';
  Quest: any[] = [];
  isSubmitted = false;
  quests: Quest[] = [];
  public quest: Quest;
  public formSubmited: boolean;
  isCollapsed: boolean = true;
  lenr: number;
  questLength: number;


  categorys: Category[] = [
    { value: 'Book', viewValue: 'Book' },
    { value: 'Game', viewValue: 'Game' },
    { value: 'Sport', viewValue: 'Sport' },
    { value: 'Your own', viewValue: 'Your own' }
  ];

  subcategorys: Subcategory[] = [
    { value: 'one', viewValue: 'one' },
    { value: 'two', viewValue: 'two' },
    { value: 'three', viewValue: 'three' },
    { value: 'four', viewValue: 'four' }
  ];


  constructor(private questService: QuestService, public fb: FormBuilder) {
  }

  toggleCollapse() {
    this.isCollapsed = !this.isCollapsed;
  }
  registrationForm = this.fb.group({
    categoryName: ['', [Validators.required]],
    subcategoryName: ['', [Validators.required]]
  })

  ngOnInit() {
    this.getQuests();
    this.start = 0;
    this.finish = 5;
    this.formSubmited = false;
    this.quest = {
      id: 1,
      name: " ",
      category: " ",
      subcategory: " ",
      description: " ",

    }
  }
  public onSubmited() {

    this.formSubmited = true;
    if (!this.registrationForm.valid) {
      return false;
    }

  }
  get categoryName() {
    return this.registrationForm.get('categoryName');
  }

  get subcategoryName() {
    return this.registrationForm.get('subcategoryName');
  }

  add(name: string, category: string, subcategory: string, description: string): void {
    name = name.trim();
    category = category.trim();
    subcategory = subcategory.trim();
    description = description.trim();
    if (!name) { return; }
    if (!category) { return; }
    if (!subcategory) { return; }
    if (!description) { return; }
    this.questService.addQuest({ name, category, subcategory, description } as Quest)
      .subscribe(quest => {
        this.quests.push(quest);
      });


  }
  closed() {

  }
  getQuests(): void {
    this.questService.getQuests()
      .subscribe(quests => {
        this.quests = quests;
        this.questLength = quests.length
      });
  }

  delete(quest: Quest): void {
    this.quests = this.quests.filter(h => h.id !== quest.id);
    this.questService.deleteQuest(quest).subscribe();
  }
  next() {
    this.finish += 5;
    this.start += 5;
  }

  previous() {
    this.finish -= 5;
    this.start -= 5;
  }
  // не работает поиск
  find() {
    if (document.getElementById('proverka') == null) {
      document.getElementById('one').innerHTML = 'not found';
    }
    else
      document.getElementById('one').innerHTML = null;
  }


}