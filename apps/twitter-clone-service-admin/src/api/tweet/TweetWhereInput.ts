import { CommentWhereUniqueInput } from "../comment/CommentWhereUniqueInput";
import { CommentListRelationFilter } from "../comment/CommentListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { LikeWhereUniqueInput } from "../like/LikeWhereUniqueInput";
import { LikeListRelationFilter } from "../like/LikeListRelationFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type TweetWhereInput = {
  comment?: CommentWhereUniqueInput;
  comments?: CommentListRelationFilter;
  content?: StringNullableFilter;
  id?: StringFilter;
  like?: LikeWhereUniqueInput;
  likes?: LikeListRelationFilter;
  user?: UserWhereUniqueInput;
};
