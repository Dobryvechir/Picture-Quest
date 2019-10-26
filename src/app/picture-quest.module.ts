import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule }    from '@angular/common/http';
import {MatButtonModule} from '@angular/material/button';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatSelectModule} from '@angular/material';
import { ReactiveFormsModule } from '@angular/forms';

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
    NgbModule,
    HttpClientModule,
    MatButtonModule,
    MatCheckboxModule,
    MatSelectModule,
    ReactiveFormsModule
    
  ],
  providers: [],
  bootstrap: [QuestEditComponent, QuestViewComponent]
})
export class PictureQuestModule { }
