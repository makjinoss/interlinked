document.getElementById("no").onclick = function() {
    window.alert(" try again,,,,");
};

document.getElementById("yes").onclick = function() {
    // First stage
    document.getElementById("ruready").innerText = "do u know what this is about";
    document.getElementById("yes").innerText = "maybe...";
    document.getElementById("no").innerText = "?????";

    // Second stage: new click handler
    document.getElementById("yes").onclick = function() {
        document.getElementById("ruready").innerText = "did u know i love u so much and that i would do anything just to keep u";
        document.getElementById("yes").innerText = "yes 😳😳😳";
        document.getElementById("no").innerText = "NO";

        // Third stage: final click
        document.getElementById("yes").onclick = function() {
            document.getElementById("ruready").innerText = "wow ur gay like actually";

            // Change yes button to 😒😒😒 and center it
            const yesBtn = document.getElementById("yes");
            yesBtn.innerText = "😒😒😒";

            // Remove the "no" button
            document.getElementById("no").remove();

            // Center the remaining button
            yesBtn.style.display = "block";
            yesBtn.style.margin = "30px auto";

            document.getElementById("yes").onclick = function() {
                document.getElementById("ruready").innerText = "click button now !11!!!!11! (for surpise :3)";

                document.getElementById("yes").innerText = "okayyyayx"
                    document.getElementById("yes").onclick = function(){
                        window.location.href = "1234.html";
                    }
            }
        };
    };
};
