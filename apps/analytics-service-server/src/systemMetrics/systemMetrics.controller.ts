import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { SystemMetricsService } from "./systemMetrics.service";
import { SystemMetricsControllerBase } from "./base/systemMetrics.controller.base";

@swagger.ApiTags("systemMetrics")
@common.Controller("systemMetrics")
export class SystemMetricsController extends SystemMetricsControllerBase {
  constructor(protected readonly service: SystemMetricsService) {
    super(service);
  }
}
