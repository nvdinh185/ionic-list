import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/lists/list/list';
import { AvatarPage } from '../pages/lists/avatar/avatar';
import { DividersPage } from '../pages/lists/dividers/dividers';
import { HeadersPage } from '../pages/lists/headers/headers';
import { IconPage } from '../pages/lists/icon/icon';
import { InsetPage } from '../pages/lists/inset/inset';
import { MultilinePage } from '../pages/lists/multiline/multiline';
import { NoLinesPage } from '../pages/lists/no-lines/no-lines';
import { SlidingPage } from '../pages/lists/sliding/sliding';
import { ThumbnailPage } from '../pages/lists/thumbnail/thumbnail';
import { ReorderPage } from '../pages/reorder-list/reorder';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    AvatarPage,
    DividersPage,
    HeadersPage,
    IconPage,
    InsetPage,
    MultilinePage,
    NoLinesPage,
    SlidingPage,
    ThumbnailPage,
    ReorderPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    AvatarPage,
    DividersPage,
    HeadersPage,
    IconPage,
    InsetPage,
    MultilinePage,
    NoLinesPage,
    SlidingPage,
    ThumbnailPage,
    ReorderPage
  ],
  providers: []
})
export class AppModule {}
