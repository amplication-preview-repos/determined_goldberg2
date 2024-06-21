import { Comment } from "../comment/Comment";
import { Follow } from "../follow/Follow";
import { Like } from "../like/Like";
import { JsonValue } from "type-fest";
import { Tweet } from "../tweet/Tweet";

export type User = {
  comments?: Array<Comment>;
  createdAt: Date;
  email: string | null;
  firstName: string | null;
  follows?: Array<Follow>;
  id: string;
  lastName: string | null;
  likes?: Array<Like>;
  roles: JsonValue;
  tweets?: Array<Tweet>;
  updatedAt: Date;
  username: string;
};
