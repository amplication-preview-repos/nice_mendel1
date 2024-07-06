import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { AnalyticsDataServiceBase } from "./base/analyticsData.service.base";

@Injectable()
export class AnalyticsDataService extends AnalyticsDataServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
