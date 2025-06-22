import connectDB from "@/mongodb/db"
import { Post } from "@/mongodb/models/post";
import { NextResponse } from "next/server";

export interface UnlikePostRequestBody {
    userId: string;
}

export async function POST(
    request: Request,
    { params }: { params: Promise<{ post_id: string }> }
) {
    await connectDB();

    const {userId}: UnlikePostRequestBody = await request.json();
    try {
        const {post_id} = await params;
        const post = await Post.findById(post_id);

        if(!post){
            return NextResponse.json({ error: "Post not found" },{ status: 404 });
        }

        if(post.user.userId !== userId){
            throw new Error("Unauthorized to delete this post");
        }

        await post.unlikePost(userId);
        return NextResponse.json({ message: "Post unliked successfully" });
    } catch(error) {
        console.log(error);
        return NextResponse.json(
            { error: "Failed to unlike post" },
            { status: 500 }
        );
    }
}
