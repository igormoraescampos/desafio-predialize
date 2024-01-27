import { Component, OnInit, ViewChild } from "@angular/core";
import { MatPaginator } from "@angular/material/paginator";
import { MatSort } from "@angular/material/sort";
import { MatTableDataSource } from "@angular/material/table";
import { Enterprise } from "src/app/interfaces/Enterprise";
import { Totals } from "src/app/interfaces/Totals";
import { EnterpriseService } from "src/app/services/enterprise.service";

@Component({
  selector: "app-enterprise",
  templateUrl: "./enterprise.component.html",
  styleUrls: ["./enterprise.component.scss"],
})
export class EnterpriseComponent implements OnInit {

  displayedColumns: string[] = ['id', 'image', 'name', 'realties', 'client'];

  dataSource: MatTableDataSource<Enterprise>;

  totals: Totals[] = [];

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  @ViewChild(MatSort, {static: true}) sort: MatSort;

  constructor(private enterpriseService: EnterpriseService) {}

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  ngOnInit(): void {
    this.getall();
  };

  getTotals(): void {
    this.totals.push(
      {
        enterprises: this.dataSource.data.length,
        realties: this.dataSource.data.reduce((a, b) => a + Number(b.realties), 0),
      }
    )
  }

  getall(): void {
    const data = this.enterpriseService.getAll()
    .subscribe((enterprise) => {
      let dataEnterprise = enterprise;
      this.dataSource = new MatTableDataSource(dataEnterprise);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
      this.getTotals();
    })
  }
}
