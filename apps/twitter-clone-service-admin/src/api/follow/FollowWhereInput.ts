import { StringFilter } from "../../util/StringFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type FollowWhereInput = {
  id?: StringFilter;
  user?: UserWhereUniqueInput;
};
