import { StringFilter } from "../../util/StringFilter";
import { TweetWhereUniqueInput } from "../tweet/TweetWhereUniqueInput";
import { TweetListRelationFilter } from "../tweet/TweetListRelationFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type LikeWhereInput = {
  id?: StringFilter;
  tweet?: TweetWhereUniqueInput;
  tweets?: TweetListRelationFilter;
  user?: UserWhereUniqueInput;
};
