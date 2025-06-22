import connectDB from "@/mongodb/db";
import { IPostBase, Post } from "@/mongodb/models/post";
import { IUser } from "@/types/user";
import { auth } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";


export interface AddPostRequestBody {
    user: IUser;
    text: string;
    imageUrl?: string | null;
}

export async function POST(request: Request){
    const userAuth = await auth();
    if (!userAuth.userId) { return NextResponse.json({ error: "Unauthorized" },{ status: 401 });}
    
    try {
        await connectDB(); 
        const {user, text, imageUrl}: AddPostRequestBody = await request.json();

        const postData: IPostBase = {
            user,
            text,
            ...(imageUrl && { imageUrl }),
        };
        const post = await Post.create(postData);
        return NextResponse.json({message: "Post created successfully", post});
    } catch (error) {
        console.error("Failed to create post:", error);
        return NextResponse.json(
            { error: "Failed to create post" },
            { status: 500 }
        );
    }
}

export async function GET(){
    try{
        await connectDB(); 

        const posts = await Post.getAllPosts(); 
        return NextResponse.json({ posts });
    } catch(error) {
        console.log(error);
        return NextResponse.json(
            { error: "Failed to fetch posts" },
            { status: 500 }
        );
    }
}