import { UserActivity as TUserActivity } from "../api/userActivity/UserActivity";

export const USERACTIVITY_TITLE_FIELD = "id";

export const UserActivityTitle = (record: TUserActivity): string => {
  return record.id?.toString() || String(record.id);
};
