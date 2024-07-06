import { SystemMetricsWhereInput } from "./SystemMetricsWhereInput";
import { SystemMetricsOrderByInput } from "./SystemMetricsOrderByInput";

export type SystemMetricsFindManyArgs = {
  where?: SystemMetricsWhereInput;
  orderBy?: Array<SystemMetricsOrderByInput>;
  skip?: number;
  take?: number;
};
