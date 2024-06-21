import { CommentUpdateManyWithoutUsersInput } from "./CommentUpdateManyWithoutUsersInput";
import { FollowUpdateManyWithoutUsersInput } from "./FollowUpdateManyWithoutUsersInput";
import { LikeUpdateManyWithoutUsersInput } from "./LikeUpdateManyWithoutUsersInput";
import { InputJsonValue } from "../../types";
import { TweetUpdateManyWithoutUsersInput } from "./TweetUpdateManyWithoutUsersInput";

export type UserUpdateInput = {
  comments?: CommentUpdateManyWithoutUsersInput;
  email?: string | null;
  firstName?: string | null;
  follows?: FollowUpdateManyWithoutUsersInput;
  lastName?: string | null;
  likes?: LikeUpdateManyWithoutUsersInput;
  password?: string;
  roles?: InputJsonValue;
  tweets?: TweetUpdateManyWithoutUsersInput;
  username?: string;
};
