import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HttpClientModule }    from '@angular/common/http';



import { QuestEditComponent } from "./edit-modules/quest-edit.component";
import { QuestViewComponent } from "./view-modules/quest-view.component";
import { DialogComponent } from './edit-modules/dialog/dialog.component';

@NgModule({
  declarations: [
       QuestEditComponent,
       QuestViewComponent,
       DialogComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule
    
  ],
  providers: [],
  bootstrap: [QuestEditComponent, QuestViewComponent]
})
export class PictureQuestModule { }
