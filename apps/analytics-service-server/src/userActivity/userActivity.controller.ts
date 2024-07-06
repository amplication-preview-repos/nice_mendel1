import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { UserActivityService } from "./userActivity.service";
import { UserActivityControllerBase } from "./base/userActivity.controller.base";

@swagger.ApiTags("userActivities")
@common.Controller("userActivities")
export class UserActivityController extends UserActivityControllerBase {
  constructor(protected readonly service: UserActivityService) {
    super(service);
  }
}
