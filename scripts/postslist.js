/** Below code opens the Delete modal when No button is clicked */

var cardId;
var deleteModal = document.getElementById('delete-modal'); // Get the div element for Delete Modal
var deleteYesButton = document.getElementById("delete-yes"); // Get the button that deletes a post's card
var deleteNoButton = document.getElementById("delete-no"); // Get the button that closes the Delete modal

function openDeleteModal(cardId) {
    deleteModal.style.display = "block";
    this.cardId = cardId;
}

// On clicking No button, Delete modal is closed
deleteNoButton.onclick = function () {
    hideDeleteModal();
}

deleteYesButton.onclick = function () {
    hideDeleteModal();
    var child = document.getElementById(cardId);
    document.getElementsByClassName('posts')[0].removeChild(child);
}

window.addEventListener('click', function (event) {
    if (event.target == deleteModal) {
        hideDeleteModal();
    }
})

function hideDeleteModal() {
    deleteModal.style.display = '';
}

/** Function to redirect home page to blog list page */
function goToPostPage(cardId) {
    var cardDetails = document.getElementById(cardId);
    var postedBy = cardDetails.getElementsByTagName('p')[0].innerHTML;
    var postTitle = cardDetails.getElementsByTagName('p')[1].innerHTML;
    var postContent = cardDetails.getElementsByTagName('p')[2].innerHTML;
    sessionStorage.setItem('postedBy', postedBy);
    sessionStorage.setItem('postTitle', postTitle);
    sessionStorage.setItem('postContent', postContent);
    window.location.href = './post.html';
}