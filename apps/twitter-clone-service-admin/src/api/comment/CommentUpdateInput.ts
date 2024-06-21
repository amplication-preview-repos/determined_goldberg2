import { TweetWhereUniqueInput } from "../tweet/TweetWhereUniqueInput";
import { TweetUpdateManyWithoutCommentsInput } from "./TweetUpdateManyWithoutCommentsInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type CommentUpdateInput = {
  content?: string | null;
  tweet?: TweetWhereUniqueInput | null;
  tweets?: TweetUpdateManyWithoutCommentsInput;
  user?: UserWhereUniqueInput | null;
};
