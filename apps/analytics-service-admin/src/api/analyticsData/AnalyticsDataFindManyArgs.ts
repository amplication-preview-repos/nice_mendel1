import { AnalyticsDataWhereInput } from "./AnalyticsDataWhereInput";
import { AnalyticsDataOrderByInput } from "./AnalyticsDataOrderByInput";

export type AnalyticsDataFindManyArgs = {
  where?: AnalyticsDataWhereInput;
  orderBy?: Array<AnalyticsDataOrderByInput>;
  skip?: number;
  take?: number;
};
