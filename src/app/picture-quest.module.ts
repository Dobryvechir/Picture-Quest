import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSelectModule } from '@angular/material';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';


import { QuestViewComponent } from "./view-modules/quest-view.component";
import { DialogComponent } from './edit-modules/dialog/dialog.component';
import { QuestListComponent } from './view-modules/quest-list/quest-list.component';
import { SearchPipe } from './search.pipe';
import { HomePageComponent } from './home-page/home-page.component';
import { EditDetailComponent } from './edit-modules/edit-detail/edit-detail.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/list', pathMatch: 'full' },
  { path: 'list', component: QuestListComponent },
  { path: 'edit/:id', component: EditDetailComponent },



];

@NgModule({
  declarations: [

    QuestViewComponent,
    DialogComponent,
    QuestListComponent,
    SearchPipe,
    HomePageComponent,
    EditDetailComponent
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
    ReactiveFormsModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )

  ],
  providers: [],
  bootstrap: [HomePageComponent]
})
export class PictureQuestModule { }
