// Toggle the "open" class for box2 when box is clicked
document.getElementById("box").addEventListener("click", () => {
    let box2 = document.getElementById("box2");
    box2.classList.toggle("open");
});
console.log(document.body.innerHTML); // Log the entire body HTML (be cautious with this)

// Add IDs and navigation links for posts in nav
document.addEventListener('DOMContentLoaded', () => {
    let postLists = document.getElementsByClassName("content-of-page");
    let postTitles = document.getElementsByClassName("main-post-heading");
    let postNavParent = document.getElementById("post-lists");
    let homePagePost = document.getElementById("blog-content-box");
    let i = 1; // Counter for post IDs

    for (let post of postLists) {
        // Assign ID to each post
        post.setAttribute("id", `post${i}`);

        // Create navigation link
        let navLink = document.createElement("a");
        navLink.setAttribute("href", `#post${i}`);

        let navTitle = document.createElement("p");
        navTitle.textContent = postTitles[i - 1]?.textContent || "Untitled Post"; // Fallback if title is missing
        navLink.appendChild(navTitle);
        postNavParent.appendChild(navLink);

        // Create home page post link
        let homeLink = document.createElement("a");
        homeLink.setAttribute("href", `/posts#post${i}`);
        homeLink.setAttribute("class", "blog-content");

        let postImg = document.createElement("div");
        postImg.setAttribute("class", "content-img");
        homeLink.appendChild(postImg);

        let headingOfHomePost = document.createElement("h1");
        headingOfHomePost.setAttribute("class", "blog-title");
        headingOfHomePost.textContent = postTitles[i - 1]?.textContent || "Untitled Post";
        homeLink.appendChild(headingOfHomePost);

        let time = document.createElement("p");
        time.setAttribute("class", "publish_time");
        time.textContent = "today";
        homeLink.appendChild(time);

        // homePagePost.appendChild(homeLink);
        i++; // Increment post ID counter
    }
});

// Toggle the "post-list-open" class for post-lists when post-lists-box is clicked
document.getElementById("post-lists-box").addEventListener("click", () => {
    let box3 = document.getElementById("post-lists");
    box3.classList.toggle("post-list-open");
});