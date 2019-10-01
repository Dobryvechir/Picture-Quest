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
import { QuestListComponent } from './view-modules/quest-list/quest-list.component';
import { SearchPipe } from './search.pipe';

@NgModule({
  declarations: [
       QuestEditComponent,
       QuestViewComponent,
       DialogComponent,
       QuestListComponent,
       SearchPipe
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
