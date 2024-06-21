import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { TweetWhereUniqueInput } from "../tweet/TweetWhereUniqueInput";
import { TweetListRelationFilter } from "../tweet/TweetListRelationFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type CommentWhereInput = {
  content?: StringNullableFilter;
  id?: StringFilter;
  tweet?: TweetWhereUniqueInput;
  tweets?: TweetListRelationFilter;
  user?: UserWhereUniqueInput;
};
