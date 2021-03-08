/** Load the selected card values (stored in session) from postslist.html to post.html */
load();
function load() {
    var postedBy = sessionStorage.getItem("postedBy");
    var postTitle = sessionStorage.getItem("postTitle");
    var postContent = sessionStorage.getItem("postContent");

    document.getElementById('post-title').innerHTML = postTitle;
    document.getElementById('posted-by').innerHTML = postedBy;
    document.getElementById('post-content').innerHTML = postContent;
}

/** Toggle betwwen the edit and save button function */
var isSave = true;
function changeContentEditable() {
    var postTitle = document.getElementById('post-title');
    var postContent = document.getElementById('post-content');
    if (isSave) {
        postTitle.setAttribute("contenteditable", true);
        postContent.setAttribute("contenteditable", true);
        document.getElementById('edit-btn').style.display = 'none';
        document.getElementById('save-btn').style.display = 'block';
        postTitle.style.border = 'solid pink';
        postContent.style.border = 'solid pink';
        isSave = false;
    } else {
        postTitle.setAttribute("contenteditable", false);
        postContent.setAttribute("contenteditable", false);
        document.getElementById('edit-btn').style.display = 'block';
        document.getElementById('save-btn').style.display = 'none';
        postTitle.style.border = 'solid white';
        postContent.style.border = 'solid white';
        isSave = true;
    }
}

/** When the Like button is clicked, update the button value and the like text related to it. */
var likeCount = 0;
function likePost() {
    likeCount++;
    document.getElementsByClassName('post-button')[2].innerHTML = '<i class="fa fa-thumbs-up" aria-hidden="true"></i> Liked!';
    if (likeCount === 1) {
        document.getElementById('like-text').innerHTML = likeCount + ' person likes this!';
    } else {
        document.getElementById('like-text').innerHTML = likeCount + ' people like this!';
    }
}