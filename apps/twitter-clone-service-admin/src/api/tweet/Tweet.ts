import { Comment } from "../comment/Comment";
import { Like } from "../like/Like";
import { User } from "../user/User";

export type Tweet = {
  comment?: Comment | null;
  comments?: Array<Comment>;
  content: string | null;
  createdAt: Date;
  id: string;
  like?: Like | null;
  likes?: Array<Like>;
  updatedAt: Date;
  user?: User | null;
};
