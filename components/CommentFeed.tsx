'use client'

import { IPostDocument } from "@/mongodb/models/post";
import { Avatar, AvatarImage, AvatarFallback } from  "./ui/avatar";
import ReactTimeAgo from 'react-time-ago';


import TimeAgo from 'javascript-time-ago'
import en from 'javascript-time-ago/locale/en.json'
TimeAgo.addLocale(en);

function CommentFeed( {post} : { post: IPostDocument }) {
  return (
    <div className="space-y-2 mt-3">
        {post.comments?.map(comment => (
            <div key={String(comment._id)} className="flex space-x-1">
                <Avatar>
                    <AvatarImage src={post.user.userImage} />
                    <AvatarFallback>
                    {post.user.firstName?.charAt(0)}
                    {post.user.lastName?.charAt(0)}
                    </AvatarFallback>
                </Avatar>

                <div className="bg-gray-100 px-4 py-2 rounded-md w-full sm:w-auto md:min-w-[300px]">
                    <div className="flex justify-between">
                        <div>
                            <p className="font-semibold">
                                {comment.user.firstName} {comment.user.lastName}
                            </p>
                            <p className="text-xs text-gray-400">
                                @{comment.user.firstName}
                                {comment.user.firstName}-{comment.user.userId.toString().slice(-4)}
                            </p>
                        </div>
                        <p className="text-xs text-gray-400">
                            <ReactTimeAgo date={new Date(comment.createdAt)} />
                        </p>
                    </div>

                    <p className="mt-3 text-sm">{comment.text}</p>
                </div>
            </div>
        ))}
    </div> 
  )
}

export default CommentFeed