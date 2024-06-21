import { CommentWhereUniqueInput } from "../comment/CommentWhereUniqueInput";
import { CommentCreateNestedManyWithoutTweetsInput } from "./CommentCreateNestedManyWithoutTweetsInput";
import { LikeWhereUniqueInput } from "../like/LikeWhereUniqueInput";
import { LikeCreateNestedManyWithoutTweetsInput } from "./LikeCreateNestedManyWithoutTweetsInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type TweetCreateInput = {
  comment?: CommentWhereUniqueInput | null;
  comments?: CommentCreateNestedManyWithoutTweetsInput;
  content?: string | null;
  like?: LikeWhereUniqueInput | null;
  likes?: LikeCreateNestedManyWithoutTweetsInput;
  user?: UserWhereUniqueInput | null;
};
