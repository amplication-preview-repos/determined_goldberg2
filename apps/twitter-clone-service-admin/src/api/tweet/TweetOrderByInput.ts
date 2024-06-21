import { SortOrder } from "../../util/SortOrder";

export type TweetOrderByInput = {
  commentId?: SortOrder;
  content?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  likeId?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
};
