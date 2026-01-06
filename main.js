document.querySelectorAll(".ques-title").forEach(title => {
    title.addEventListener("click", () => {
        const currentQuestion = title.parentElement;
        const currentIcon = title.querySelector("i");

        document.querySelectorAll(".question").forEach(q => {
            if (q !== currentQuestion) {
                q.classList.remove("active");
                q.querySelector("i").classList.replace("fa-angle-up", "fa-angle-down");
            }
        });

        currentQuestion.classList.toggle("active");

        if (currentQuestion.classList.contains("active")) {
            currentIcon.classList.replace("fa-angle-down", "fa-angle-up");
        } else {
            currentIcon.classList.replace("fa-angle-up", "fa-angle-down");
        }
    });
});
