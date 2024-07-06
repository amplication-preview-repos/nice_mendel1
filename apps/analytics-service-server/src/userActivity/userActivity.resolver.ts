import * as graphql from "@nestjs/graphql";
import { UserActivityResolverBase } from "./base/userActivity.resolver.base";
import { UserActivity } from "./base/UserActivity";
import { UserActivityService } from "./userActivity.service";

@graphql.Resolver(() => UserActivity)
export class UserActivityResolver extends UserActivityResolverBase {
  constructor(protected readonly service: UserActivityService) {
    super(service);
  }
}
