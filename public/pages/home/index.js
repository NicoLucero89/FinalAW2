import { getSession } from "../../utils/sessionStorage.controller.js"; 
import { Post } from "../../components/post.js"; 
import { getPosts, addPost, likePost, deletePost } from "../../api/posts.api.js";

const user = getSession('user'); 
const btnAdd = document.getElementById('btnAdd'); 
const postContainer = document.getElementById('postContainer');

const renderPost = async () => { 
    const posts = await getPosts(); 
    postContainer.innerHTML = posts.map(e => Post(e, user.email)).join('');
};

document.addEventListener("DOMContentLoaded", async () => { 
    await renderPost(); 
});

btnAdd.addEventListener('click', async () => { 
    const textArea = document.getElementById("textArea").value; 
    const newPost = { author: user.email, text: textArea };
    
    await addPost(newPost); 
    await renderPost(); 
});

postContainer.addEventListener('click', async (e) => { 
    const clickedElement = e.target; 
    const id = clickedElement.getAttribute('data-id'); 
    
    if (clickedElement.name === 'btnLike') { 
        await likePost(id); 
        await renderPost(); 
    } else if (clickedElement.name === 'btnDelete') { 
        await deletePost(id); 
        await renderPost(); 
    } 
});


