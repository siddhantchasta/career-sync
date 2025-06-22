import connectDB from "@/mongodb/db"
import { Post } from "@/mongodb/models/post";
import { auth } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

export async function GET(
    request: Request,
    { params }: { params: Promise<{ post_id: string }> }
) {
    await connectDB();

    try {
        const {post_id} = await params;
        const post = await Post.findById(post_id);

        if(!post){
            return NextResponse.json({ error: "Post not found" },{ status: 404 });
        }

        const likes = post.likes;
        return NextResponse.json(likes);
    } catch(error) {
        console.log(error);
        return NextResponse.json(
            { error: "Failed to fetch post" },
            { status: 500 }
        );
    }
}

export interface LikePostRequestBody {
    userId: string;
}

export async function POST(
    request: Request,
    { params }: { params: Promise<{ post_id: string }>}
) {
    const userAuth = await auth();
    if (!userAuth.userId) { return NextResponse.json({ error: "Unauthorized" },{ status: 401 });}
    await connectDB();

    const {userId}: LikePostRequestBody = await request.json();
    try {
        const {post_id} = await params;
        const post = await Post.findById(post_id);

        if(!post){
            return NextResponse.json({ error: "Post not found" },{ status: 404 });
        }

        if(post.user.userId !== userId){
            throw new Error("Unauthorized to delete this post");
        }

        await post.likePost(userId);
        return NextResponse.json({ message: "Post liked successfully" });
    } catch(error) {
        console.log(error);
        return NextResponse.json(
            { error: "Failed to like post" },
            { status: 500 }
        );
    }
}
