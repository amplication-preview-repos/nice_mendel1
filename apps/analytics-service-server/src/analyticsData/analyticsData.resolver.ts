import * as graphql from "@nestjs/graphql";
import { AnalyticsDataResolverBase } from "./base/analyticsData.resolver.base";
import { AnalyticsData } from "./base/AnalyticsData";
import { AnalyticsDataService } from "./analyticsData.service";

@graphql.Resolver(() => AnalyticsData)
export class AnalyticsDataResolver extends AnalyticsDataResolverBase {
  constructor(protected readonly service: AnalyticsDataService) {
    super(service);
  }
}
