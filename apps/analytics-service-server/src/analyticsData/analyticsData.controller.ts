import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { AnalyticsDataService } from "./analyticsData.service";
import { AnalyticsDataControllerBase } from "./base/analyticsData.controller.base";

@swagger.ApiTags("analyticsData")
@common.Controller("analyticsData")
export class AnalyticsDataController extends AnalyticsDataControllerBase {
  constructor(protected readonly service: AnalyticsDataService) {
    super(service);
  }
}
