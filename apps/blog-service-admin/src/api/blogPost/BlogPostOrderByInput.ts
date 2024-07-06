import { SortOrder } from "../../util/SortOrder";

export type BlogPostOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  updatedAt?: SortOrder;
};
