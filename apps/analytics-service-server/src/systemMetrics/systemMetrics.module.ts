import { Module } from "@nestjs/common";
import { SystemMetricsModuleBase } from "./base/systemMetrics.module.base";
import { SystemMetricsService } from "./systemMetrics.service";
import { SystemMetricsController } from "./systemMetrics.controller";
import { SystemMetricsResolver } from "./systemMetrics.resolver";

@Module({
  imports: [SystemMetricsModuleBase],
  controllers: [SystemMetricsController],
  providers: [SystemMetricsService, SystemMetricsResolver],
  exports: [SystemMetricsService],
})
export class SystemMetricsModule {}
