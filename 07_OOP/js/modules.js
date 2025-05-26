import { Post } from "./post.js";

let post = new Post("Lorem ipsum dolor","sit amet consectetur adipisicing elit. Omnis suscipit sed reiciendis quis blanditiis sit odit dolores velit quia provident veniam repellendus delectus, beatae doloribus similique! Ad suscipit autem corporis!");

//document.writeln(post.get());
document.body.innerHTML = post.get();