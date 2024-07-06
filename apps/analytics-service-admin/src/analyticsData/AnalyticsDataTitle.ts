import { AnalyticsData as TAnalyticsData } from "../api/analyticsData/AnalyticsData";

export const ANALYTICSDATA_TITLE_FIELD = "id";

export const AnalyticsDataTitle = (record: TAnalyticsData): string => {
  return record.id?.toString() || String(record.id);
};
