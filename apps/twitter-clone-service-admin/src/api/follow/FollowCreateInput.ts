import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type FollowCreateInput = {
  user?: UserWhereUniqueInput | null;
};
