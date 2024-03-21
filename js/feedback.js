document.addEventListener("DOMContentLoaded", function () {
    var postButton = document.querySelector(".btn-post");

    postButton.addEventListener("click", function (event) {
        event.preventDefault();

        var commentInput = document.getElementById("feedback_comments").value.trim();
        
        if (commentInput !== "") {
            alert("Thank you for feedback.")
            window.location.href = "./home.html";
        } else {
            alert("Please provide a comment before posting.");
        }
    });
});
