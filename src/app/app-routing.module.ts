import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then(m => m.LoginPageModule)
  },
  {
    path: 'tabs',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: '',
    loadChildren: () => import('./login/login.module').then(m => m.LoginPageModule)
  },
  {
    path: 'newsDetails',
    loadChildren: () => import('./subPages/news-detail/news-detail.module').then(m => m.NewsDetailPageModule)
  },
  {
    path: 'classSubNews',
    loadChildren: () => import('./subPages/class-sub-news/class-sub-news.module').then(m => m.ClassSubNewsPageModule)
  },
  {
    path: 'userinfo',
    loadChildren: () => import('./subPages/user-info/user-info.module').then(m => m.UserInfoPageModule)
  },
  {
    path:'message',
    loadChildren: () => import('./subPages/message/message.module').then(m => m.MessagePageModule)
  },
  {
    path: 'contact',
    loadChildren: () => import('./subPages/contact/contact.module').then( m => m.ContactPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
