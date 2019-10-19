import { Component, OnInit } from "@angular/core";
import { Quest } from "../models/quest.model";
import { QuestService } from "../services/quest.service";
import { FormBuilder, Validators } from "@angular/forms";

export interface Category {
  value: string;
  viewValue: string;
}

export interface Subcategory extends Category {
}


@Component({
  selector: "quest-edit",
  templateUrl: "./quest-edit.component.html",
  styleUrls: ["./quest-edit.component.css"]
})
export class QuestEditComponent implements OnInit {
  isSubmitted = false;
  quests: Quest[]=[];
  public quest: Quest;
  public formSubmited: boolean;
  
  


  categorys: Category[] = [
  /*  {value: 'None', viewValue: 'None'},*/
    {value: 'Book', viewValue: 'Book'},
    {value: 'Game', viewValue: 'Game'},
    {value: 'Sport', viewValue: 'Sport'},
    {value: 'Your own', viewValue: 'Your own'}
  ];

  subcategorys: Subcategory[] = [
    {value: 'one', viewValue: 'one'},
    {value: 'two', viewValue: 'two'},
    {value: 'three', viewValue: 'three'},
    {value: 'four', viewValue: 'four'}
  ];
  
  constructor(private questService: QuestService, public fb: FormBuilder){ }
 
 
  registrationForm = this.fb.group({
    categoryName: ['', [Validators.required]],
    subcategoryName: ['', [Validators.required]]
  })

  //registrationForm1 = this.fb.group({
    //subcategoryName: ['', [Validators.required]]
  //})

  changeCategory(e) {
    console.log(e.value)
    this.categoryName.setValue(e.target.value, {
      onlySelf: true
    })
  }
  changeSubcategory(e) {
    console.log(e.value)
    this.subcategoryName.setValue(e.target.value, {
      onlySelf: true
    })
  }

  ngOnInit() {
    this.formSubmited = false;  
    this.quest = {
      id: 1,
      name: " ",
      category: " ",
      subcategory: " ",
      description: "",

      }

     
      
    this.getQuests();
    }
    public onSubmited() {
      
      this.formSubmited = true;
      if(!this.registrationForm.valid){
       return false;
      }

    }
    get categoryName() {
      return this.registrationForm.get('categoryName');
    }

    get subcategoryName() {
      return this.registrationForm.get('subcategoryName');
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
