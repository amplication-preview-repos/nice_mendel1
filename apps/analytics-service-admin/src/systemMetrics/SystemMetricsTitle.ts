import { SystemMetrics as TSystemMetrics } from "../api/systemMetrics/SystemMetrics";

export const SYSTEMMETRICS_TITLE_FIELD = "id";

export const SystemMetricsTitle = (record: TSystemMetrics): string => {
  return record.id?.toString() || String(record.id);
};
