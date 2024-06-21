import { TweetWhereUniqueInput } from "../tweet/TweetWhereUniqueInput";
import { TweetCreateNestedManyWithoutCommentsInput } from "./TweetCreateNestedManyWithoutCommentsInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type CommentCreateInput = {
  content?: string | null;
  tweet?: TweetWhereUniqueInput | null;
  tweets?: TweetCreateNestedManyWithoutCommentsInput;
  user?: UserWhereUniqueInput | null;
};
