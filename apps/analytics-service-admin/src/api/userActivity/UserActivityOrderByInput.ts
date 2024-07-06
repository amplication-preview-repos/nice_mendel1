import { SortOrder } from "../../util/SortOrder";

export type UserActivityOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  updatedAt?: SortOrder;
};
