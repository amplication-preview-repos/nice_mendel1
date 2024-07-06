import { UserActivityWhereInput } from "./UserActivityWhereInput";
import { UserActivityOrderByInput } from "./UserActivityOrderByInput";

export type UserActivityFindManyArgs = {
  where?: UserActivityWhereInput;
  orderBy?: Array<UserActivityOrderByInput>;
  skip?: number;
  take?: number;
};
