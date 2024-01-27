import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Client } from 'src/app/interfaces/Client';
import { ClientDetail } from 'src/app/interfaces/Client-Detail';
import { Enterprise } from 'src/app/interfaces/Enterprise';
import { ClientService } from 'src/app/services/client.service';

@Component({
  selector: 'app-details',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

  id!: number;

  clientData!: Client;

  clientDetail: ClientDetail[] = [{
    _id: 0,
    name: '',
    image_src: '',
    enterprises: 0,
    realties: 0,
  }];

  enterprises!: Enterprise[];

  constructor(private clientService: ClientService, private route: ActivatedRoute) { }
  
  ngOnInit(): void {
    this.id = Number(this.route.snapshot.paramMap.get('id'));
    this.getById();
  }

  getById(): void {
    this.clientService.getById(this.id)
    .subscribe((client) => {
      this.clientData = client;
      // preenchendo detalhes do cliente
      this.clientDetail[0]._id = client[0]._id;
      this.clientDetail[0].name = client[0].name;
      this.clientDetail[0].image_src = client[0].image_src;
      this.clientDetail[0].enterprises = client[0].enterprises.length;
      this.clientDetail[0].realties = client[0].enterprises.reduce((a: number, b: any) => a + Number(b.realties), 0);
      // preenchendo detalhes dos empreendimentos
      this.enterprises = client[0].enterprises;
    })
  }
}
