import { Component, OnInit, ViewChild } from "@angular/core";
import { MatPaginator } from "@angular/material/paginator";
import { MatSort } from "@angular/material/sort";
import { MatTableDataSource } from "@angular/material/table";
import { ClientDetail } from "src/app/interfaces/Client-Detail";
import { Totals } from "src/app/interfaces/Totals";
import { ClientService } from "src/app/services/client.service";

@Component({
  selector: "app-client",
  styleUrls: ["./client.component.scss"],
  templateUrl: "./client.component.html",
})

export class ClientComponent implements OnInit {

  displayedColumns: string[] = ['id', 'image', 'name', 'enterprises', 'realties', 'details'];
  
  dataSource: MatTableDataSource<ClientDetail>;

  totals: Totals[] = [];

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  @ViewChild(MatSort, {static: true}) sort: MatSort;

  constructor(private clientService: ClientService) {}

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  ngOnInit(): void {
    this.getGeneralTotals();
    
  };

  getTotals(): void {
    this.totals.push(
      {
        clients: this.dataSource.data.length,
        enterprises: this.dataSource.data.reduce((a, b) => a + b.enterprises, 0),
        realties: this.dataSource.data.reduce((a, b) => a + b.realties, 0),
      }
    )
  }

  getGeneralTotals(): void {
    const data = this.clientService.getGeneralTotals()
    .subscribe((clients) => {
      let dataClient = clients;
      this.dataSource = new MatTableDataSource(dataClient);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
      this.getTotals();
    })
  }
}
