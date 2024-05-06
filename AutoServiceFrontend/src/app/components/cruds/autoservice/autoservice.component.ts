import { Component, OnInit } from '@angular/core';
import { AutoServiceModel } from '../../models/models/AutoServiceModels/AutoService';
import { ResponceModel } from '../../models/models/ResponceModels/responcemodel';
import { AutoserviceService } from '../../services/Autoservice/autoservice.service';
import { GetAll } from '../../models/viewmodels/getAllOnlyByPage';
import { CreateAutoServiceCommand } from '../../models/models/AutoServiceModels/CreateAutoServiceCommand';

@Component({
  selector: 'app-autoservice',
  templateUrl: './autoservice.component.html',
  styleUrls: ['./autoservice.component.scss'] // Corrected 'styleUrl' to 'styleUrls'
})
export class AutoserviceComponent implements OnInit {
  autoServices: AutoServiceModel[] = [];
  response: ResponceModel | undefined;
  
  setValue: CreateAutoServiceCommand = {
    Id: "",
    Location: "",
    WebsitePath: "",
    PhoneNumber: "",
    Email: "",
    ServiceId: [] // Corrected to initialize as an array
  };

  constructor(private autoService: AutoserviceService) {}

  ngOnInit(): void {
    this.loadAutoServices({ PageIndex: 1, Size: 10 });
  }

  loadAutoServices(data: GetAll): void {
    this.autoService.getAll(data).subscribe({
      next: (services) => {
        this.autoServices = services;
        console.log('Auto services loaded successfully');
      },
      error: (error) => console.error('Failed to load auto services', error)
    });
  }

  createAutoService(): void { // Removed the parameter to use the component's property directly
    this.autoService.create(this.setValue).subscribe({
      next: (res) => {
        console.log('Auto service created successfully', res);
        this.loadAutoServices({ PageIndex: 1, Size: 10 });
      },
      error: (error) => console.error('Failed to create auto service', error)
    });
  }

  deleteAutoService(id: string): void {
    this.autoService.delete(id).subscribe({
      next: (res) => {
        console.log('Auto service deleted successfully', res);
        this.loadAutoServices({ PageIndex: 1, Size: 10 });
      },
      error: (error) => console.error('Failed to delete auto service', error)
    });
  }
}
