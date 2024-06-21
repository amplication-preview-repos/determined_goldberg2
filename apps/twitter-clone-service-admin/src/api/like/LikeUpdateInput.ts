import { TweetWhereUniqueInput } from "../tweet/TweetWhereUniqueInput";
import { TweetUpdateManyWithoutLikesInput } from "./TweetUpdateManyWithoutLikesInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type LikeUpdateInput = {
  tweet?: TweetWhereUniqueInput | null;
  tweets?: TweetUpdateManyWithoutLikesInput;
  user?: UserWhereUniqueInput | null;
};
