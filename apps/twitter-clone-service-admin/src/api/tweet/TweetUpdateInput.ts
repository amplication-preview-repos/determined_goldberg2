import { CommentWhereUniqueInput } from "../comment/CommentWhereUniqueInput";
import { CommentUpdateManyWithoutTweetsInput } from "./CommentUpdateManyWithoutTweetsInput";
import { LikeWhereUniqueInput } from "../like/LikeWhereUniqueInput";
import { LikeUpdateManyWithoutTweetsInput } from "./LikeUpdateManyWithoutTweetsInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type TweetUpdateInput = {
  comment?: CommentWhereUniqueInput | null;
  comments?: CommentUpdateManyWithoutTweetsInput;
  content?: string | null;
  like?: LikeWhereUniqueInput | null;
  likes?: LikeUpdateManyWithoutTweetsInput;
  user?: UserWhereUniqueInput | null;
};
