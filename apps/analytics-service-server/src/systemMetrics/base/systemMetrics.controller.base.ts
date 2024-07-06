/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import { SystemMetricsService } from "../systemMetrics.service";
import { SystemMetricsCreateInput } from "./SystemMetricsCreateInput";
import { SystemMetrics } from "./SystemMetrics";
import { SystemMetricsFindManyArgs } from "./SystemMetricsFindManyArgs";
import { SystemMetricsWhereUniqueInput } from "./SystemMetricsWhereUniqueInput";
import { SystemMetricsUpdateInput } from "./SystemMetricsUpdateInput";

export class SystemMetricsControllerBase {
  constructor(protected readonly service: SystemMetricsService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: SystemMetrics })
  async createSystemMetrics(
    @common.Body() data: SystemMetricsCreateInput
  ): Promise<SystemMetrics> {
    return await this.service.createSystemMetrics({
      data: data,
      select: {
        createdAt: true,
        id: true,
        updatedAt: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [SystemMetrics] })
  @ApiNestedQuery(SystemMetricsFindManyArgs)
  async systemMetricsItems(
    @common.Req() request: Request
  ): Promise<SystemMetrics[]> {
    const args = plainToClass(SystemMetricsFindManyArgs, request.query);
    return this.service.systemMetricsItems({
      ...args,
      select: {
        createdAt: true,
        id: true,
        updatedAt: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: SystemMetrics })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async systemMetrics(
    @common.Param() params: SystemMetricsWhereUniqueInput
  ): Promise<SystemMetrics | null> {
    const result = await this.service.systemMetrics({
      where: params,
      select: {
        createdAt: true,
        id: true,
        updatedAt: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: SystemMetrics })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateSystemMetrics(
    @common.Param() params: SystemMetricsWhereUniqueInput,
    @common.Body() data: SystemMetricsUpdateInput
  ): Promise<SystemMetrics | null> {
    try {
      return await this.service.updateSystemMetrics({
        where: params,
        data: data,
        select: {
          createdAt: true,
          id: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: SystemMetrics })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteSystemMetrics(
    @common.Param() params: SystemMetricsWhereUniqueInput
  ): Promise<SystemMetrics | null> {
    try {
      return await this.service.deleteSystemMetrics({
        where: params,
        select: {
          createdAt: true,
          id: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }
}
