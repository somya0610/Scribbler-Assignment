/** Function to redirect home page to posts list page */
function goToPostsListPage() {
    window.location.href = './html/postslist.html';
}

/** Below code opens a Create Post modal when Create Post button is clicked */

var createPostModal = document.getElementById("create-post-modal"); // Get the div element for Create Post Modal
var createPostButton = document.getElementById("create-post"); // Get the button that opens the Create Post modal
var createPostSpan = document.getElementsByClassName("modal-close")[2]; // Get the <span> element that closes the Create Post Modal

// On clicking Create Post button, Create Post modal appears on the screen
createPostButton.onclick = function () {
    createPostModal.style.display = "block";
}

// When the user clicks on Create Post <span> (x), close the Create Post Modal
createPostSpan.onclick = function () {
    setCreatePostModalToDefault();
}

/** Funtion to set the style display as 'none' and all input fields to default placeholder values for modal */
function setCreatePostModalToDefault() {
    createPostModal.style.display = "none";
    createPostModal.getElementsByTagName('input')[0].value = '';
    createPostModal.getElementsByTagName('textarea')[0].value = '';
}

// When the user clicks anywhere outside of the Create Post Modal, close the modal
window.addEventListener('click', function (event) {
    if (event.target == createPostModal) {
        setCreatePostModalToDefault();
    }
})