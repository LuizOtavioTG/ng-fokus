import { Component, effect, inject, OnInit } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './shared/components/header/header.component.js';
import { BannerComponent } from './shared/components/banner/banner.component.js';
import { TimerControlComponent } from './shared/components/timer-control/timer-control.component.js';
import { TaskManagerComponent } from './shared/components/task-manager/task-manager.component.js';
import { FooterComponent } from './shared/components/footer/footer.component.js';
import { UpdateService } from './shared/services/update.service.js';
import { NotificationService } from './shared/services/notification.service.js';
import { ConnectivityService } from './shared/services/connectivity.service.js';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    HttpClientModule,
    HeaderComponent,
    BannerComponent,
    TimerControlComponent,
    TaskManagerComponent,
    FooterComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit{

  private updateService = inject(UpdateService);
  private notificationService = inject(NotificationService);
  private connectivityService = inject(ConnectivityService);

  constructor() {
    effect(() => {
      if (!this.connectivityService.isOnline) { 
        this.notificationService.showNotification('Notificação', { body: 'Você está offline 😞' });
        return;
      }

      this.notificationService.showNotification('Notificação', {
        body: 'Você está online 😊'
      });
    });
  }

  async ngOnInit() {
    const hasUpdate = await this.updateService.checkForUpdate();

    if (hasUpdate) {
      console.log('Atualização encontrada durante a inicialização')
    }
  }
}
