import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { SystemMetricsServiceBase } from "./base/systemMetrics.service.base";

@Injectable()
export class SystemMetricsService extends SystemMetricsServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
