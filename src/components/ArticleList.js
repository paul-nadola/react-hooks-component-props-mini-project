import React from "react";
import Article from "./Article";


export default function ArticleList ({posts}) {
    console.log(posts)
    const displayPost = posts.map((post) => {
        return <Article key={post.id}
        title={post.title}
        date ={post.date}
        preview ={post.preview}/>
    })
    return(
        <main>
            {displayPost}
        </main>
    )
}
