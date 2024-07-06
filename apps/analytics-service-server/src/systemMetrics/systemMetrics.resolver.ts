import * as graphql from "@nestjs/graphql";
import { SystemMetricsResolverBase } from "./base/systemMetrics.resolver.base";
import { SystemMetrics } from "./base/SystemMetrics";
import { SystemMetricsService } from "./systemMetrics.service";

@graphql.Resolver(() => SystemMetrics)
export class SystemMetricsResolver extends SystemMetricsResolverBase {
  constructor(protected readonly service: SystemMetricsService) {
    super(service);
  }
}
