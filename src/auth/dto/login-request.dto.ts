import { PickType } from "@nestjs/mapped-types";
import { Users } from "src/entity/user.entity";

export class LoginRequestDto extends PickType(Users, ["email", "password"] as const) {

}