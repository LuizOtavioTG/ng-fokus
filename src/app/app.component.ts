import { Component } from '@angular/core';
import { BannerComponent } from './shared/components/banner/banner.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { TaskManagerComponent } from './shared/components/task-manager/task-manager.component';
import { TimerControlComponent } from './shared/components/timer-control/timer-control.component';
import { UpdateService } from './shared/services/update.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    HeaderComponent,
    BannerComponent,
    TimerControlComponent,
    TaskManagerComponent,
    FooterComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  constructor(
        private updateService: UpdateService
    ) {
    }
    
    async ngOnInit() {
        const hasUpdate = await this.updateService.checkForUpdate();
        
        if(hasUpdate) {
            console.log('Atualização encontrada durante a inicialização')
        }
    }
}
