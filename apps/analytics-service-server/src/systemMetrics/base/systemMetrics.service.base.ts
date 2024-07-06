/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, SystemMetrics as PrismaSystemMetrics } from "@prisma/client";

export class SystemMetricsServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.SystemMetricsCountArgs, "select">
  ): Promise<number> {
    return this.prisma.systemMetrics.count(args);
  }

  async systemMetricsItems(
    args: Prisma.SystemMetricsFindManyArgs
  ): Promise<PrismaSystemMetrics[]> {
    return this.prisma.systemMetrics.findMany(args);
  }
  async systemMetrics(
    args: Prisma.SystemMetricsFindUniqueArgs
  ): Promise<PrismaSystemMetrics | null> {
    return this.prisma.systemMetrics.findUnique(args);
  }
  async createSystemMetrics(
    args: Prisma.SystemMetricsCreateArgs
  ): Promise<PrismaSystemMetrics> {
    return this.prisma.systemMetrics.create(args);
  }
  async updateSystemMetrics(
    args: Prisma.SystemMetricsUpdateArgs
  ): Promise<PrismaSystemMetrics> {
    return this.prisma.systemMetrics.update(args);
  }
  async deleteSystemMetrics(
    args: Prisma.SystemMetricsDeleteArgs
  ): Promise<PrismaSystemMetrics> {
    return this.prisma.systemMetrics.delete(args);
  }
}