/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import { CommentService } from "../comment.service";
import { CommentCreateInput } from "./CommentCreateInput";
import { Comment } from "./Comment";
import { CommentFindManyArgs } from "./CommentFindManyArgs";
import { CommentWhereUniqueInput } from "./CommentWhereUniqueInput";
import { CommentUpdateInput } from "./CommentUpdateInput";
import { TweetFindManyArgs } from "../../tweet/base/TweetFindManyArgs";
import { Tweet } from "../../tweet/base/Tweet";
import { TweetWhereUniqueInput } from "../../tweet/base/TweetWhereUniqueInput";

export class CommentControllerBase {
  constructor(protected readonly service: CommentService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Comment })
  async createComment(
    @common.Body() data: CommentCreateInput
  ): Promise<Comment> {
    return await this.service.createComment({
      data: {
        ...data,

        tweet: data.tweet
          ? {
              connect: data.tweet,
            }
          : undefined,

        user: data.user
          ? {
              connect: data.user,
            }
          : undefined,
      },
      select: {
        content: true,
        createdAt: true,
        id: true,

        tweet: {
          select: {
            id: true,
          },
        },

        updatedAt: true,

        user: {
          select: {
            id: true,
          },
        },
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [Comment] })
  @ApiNestedQuery(CommentFindManyArgs)
  async comments(@common.Req() request: Request): Promise<Comment[]> {
    const args = plainToClass(CommentFindManyArgs, request.query);
    return this.service.comments({
      ...args,
      select: {
        content: true,
        createdAt: true,
        id: true,

        tweet: {
          select: {
            id: true,
          },
        },

        updatedAt: true,

        user: {
          select: {
            id: true,
          },
        },
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Comment })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async comment(
    @common.Param() params: CommentWhereUniqueInput
  ): Promise<Comment | null> {
    const result = await this.service.comment({
      where: params,
      select: {
        content: true,
        createdAt: true,
        id: true,

        tweet: {
          select: {
            id: true,
          },
        },

        updatedAt: true,

        user: {
          select: {
            id: true,
          },
        },
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Comment })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateComment(
    @common.Param() params: CommentWhereUniqueInput,
    @common.Body() data: CommentUpdateInput
  ): Promise<Comment | null> {
    try {
      return await this.service.updateComment({
        where: params,
        data: {
          ...data,

          tweet: data.tweet
            ? {
                connect: data.tweet,
              }
            : undefined,

          user: data.user
            ? {
                connect: data.user,
              }
            : undefined,
        },
        select: {
          content: true,
          createdAt: true,
          id: true,

          tweet: {
            select: {
              id: true,
            },
          },

          updatedAt: true,

          user: {
            select: {
              id: true,
            },
          },
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: Comment })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteComment(
    @common.Param() params: CommentWhereUniqueInput
  ): Promise<Comment | null> {
    try {
      return await this.service.deleteComment({
        where: params,
        select: {
          content: true,
          createdAt: true,
          id: true,

          tweet: {
            select: {
              id: true,
            },
          },

          updatedAt: true,

          user: {
            select: {
              id: true,
            },
          },
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Get("/:id/tweets")
  @ApiNestedQuery(TweetFindManyArgs)
  async findTweets(
    @common.Req() request: Request,
    @common.Param() params: CommentWhereUniqueInput
  ): Promise<Tweet[]> {
    const query = plainToClass(TweetFindManyArgs, request.query);
    const results = await this.service.findTweets(params.id, {
      ...query,
      select: {
        comment: {
          select: {
            id: true,
          },
        },

        content: true,
        createdAt: true,
        id: true,

        like: {
          select: {
            id: true,
          },
        },

        updatedAt: true,

        user: {
          select: {
            id: true,
          },
        },
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/tweets")
  async connectTweets(
    @common.Param() params: CommentWhereUniqueInput,
    @common.Body() body: TweetWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      tweets: {
        connect: body,
      },
    };
    await this.service.updateComment({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/tweets")
  async updateTweets(
    @common.Param() params: CommentWhereUniqueInput,
    @common.Body() body: TweetWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      tweets: {
        set: body,
      },
    };
    await this.service.updateComment({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/tweets")
  async disconnectTweets(
    @common.Param() params: CommentWhereUniqueInput,
    @common.Body() body: TweetWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      tweets: {
        disconnect: body,
      },
    };
    await this.service.updateComment({
      where: params,
      data,
      select: { id: true },
    });
  }
}