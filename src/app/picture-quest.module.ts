import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { QuestEditComponent } from "./edit-modules/quest-edit.component";
import { QuestViewComponent } from "./view-modules/quest-view.component";

@NgModule({
  declarations: [
       QuestEditComponent,
       QuestViewComponent
  ],
  imports: [
    BrowserModule,
    FormsModule 
  ],
  providers: [],
  bootstrap: [QuestEditComponent, QuestViewComponent]
})
export class PictureQuestModule { }
