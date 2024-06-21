import { TweetWhereUniqueInput } from "../tweet/TweetWhereUniqueInput";
import { TweetCreateNestedManyWithoutLikesInput } from "./TweetCreateNestedManyWithoutLikesInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type LikeCreateInput = {
  tweet?: TweetWhereUniqueInput | null;
  tweets?: TweetCreateNestedManyWithoutLikesInput;
  user?: UserWhereUniqueInput | null;
};
