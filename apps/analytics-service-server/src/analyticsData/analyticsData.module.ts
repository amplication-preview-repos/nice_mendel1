import { Module } from "@nestjs/common";
import { AnalyticsDataModuleBase } from "./base/analyticsData.module.base";
import { AnalyticsDataService } from "./analyticsData.service";
import { AnalyticsDataController } from "./analyticsData.controller";
import { AnalyticsDataResolver } from "./analyticsData.resolver";

@Module({
  imports: [AnalyticsDataModuleBase],
  controllers: [AnalyticsDataController],
  providers: [AnalyticsDataService, AnalyticsDataResolver],
  exports: [AnalyticsDataService],
})
export class AnalyticsDataModule {}
