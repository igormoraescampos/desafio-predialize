import { NgModule } from "@angular/core";

import { ClientModule } from "./client/client.module";
import { EnterpriseModule } from "./enterprise/enterprise.module";
import { DetailModule } from "./detail/detail.module";

@NgModule({
  imports: [ClientModule, EnterpriseModule, DetailModule],
})
export class PagesModule {}
