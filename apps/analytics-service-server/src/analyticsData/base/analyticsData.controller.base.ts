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
import { AnalyticsDataService } from "../analyticsData.service";
import { AnalyticsDataCreateInput } from "./AnalyticsDataCreateInput";
import { AnalyticsData } from "./AnalyticsData";
import { AnalyticsDataFindManyArgs } from "./AnalyticsDataFindManyArgs";
import { AnalyticsDataWhereUniqueInput } from "./AnalyticsDataWhereUniqueInput";
import { AnalyticsDataUpdateInput } from "./AnalyticsDataUpdateInput";

export class AnalyticsDataControllerBase {
  constructor(protected readonly service: AnalyticsDataService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: AnalyticsData })
  async createAnalyticsData(
    @common.Body() data: AnalyticsDataCreateInput
  ): Promise<AnalyticsData> {
    return await this.service.createAnalyticsData({
      data: data,
      select: {
        createdAt: true,
        id: true,
        updatedAt: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [AnalyticsData] })
  @ApiNestedQuery(AnalyticsDataFindManyArgs)
  async analyticsDataItems(
    @common.Req() request: Request
  ): Promise<AnalyticsData[]> {
    const args = plainToClass(AnalyticsDataFindManyArgs, request.query);
    return this.service.analyticsDataItems({
      ...args,
      select: {
        createdAt: true,
        id: true,
        updatedAt: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: AnalyticsData })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async analyticsData(
    @common.Param() params: AnalyticsDataWhereUniqueInput
  ): Promise<AnalyticsData | null> {
    const result = await this.service.analyticsData({
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
  @swagger.ApiOkResponse({ type: AnalyticsData })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateAnalyticsData(
    @common.Param() params: AnalyticsDataWhereUniqueInput,
    @common.Body() data: AnalyticsDataUpdateInput
  ): Promise<AnalyticsData | null> {
    try {
      return await this.service.updateAnalyticsData({
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
  @swagger.ApiOkResponse({ type: AnalyticsData })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteAnalyticsData(
    @common.Param() params: AnalyticsDataWhereUniqueInput
  ): Promise<AnalyticsData | null> {
    try {
      return await this.service.deleteAnalyticsData({
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
