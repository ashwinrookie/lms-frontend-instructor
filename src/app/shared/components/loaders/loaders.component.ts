import { Component } from '@angular/core';
import { LoadingServiceService } from 'src/app/core/services/loading-service.service';

@Component({
  selector: 'app-loaders',
  templateUrl: './loaders.component.html',
  styleUrls: ['./loaders.component.scss'],
})
export class LoadersComponent {
  isLoading$ = this.loadingService.loading$;

  constructor(private loadingService: LoadingServiceService) {}
}
