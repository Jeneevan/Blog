import React from "react";
import BlogForm from "../../components/BlogForm";
import { useRouter } from "next/router";

function SecretPage(){
    const router = useRouter()

    async function addBlogHandler(enteredBlogData){
        const response = await fetch('/api/new-blog', {
            method: 'POST',
            body: JSON.stringify(enteredBlogData),
            headers: {
                "Content-Type": 'application/json'
            }
        
        });

        const data = await response.json();

        console.log(data);

        router.replace('/');

    }
    return(
    <div className="theMainDiv">
        <BlogForm onAddBlog={addBlogHandler}/>
    </div>)

}


export default SecretPage;

