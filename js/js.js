
    document.addEventListener("DOMContentLoaded", function () {
        let progressBars = document.querySelectorAll(".progress-bar");

        function animateBars() {
            progressBars.forEach((bar) => {
                let width = bar.getAttribute("style").match(/\d+/)[0] + "%"; // Extract width
                bar.style.width = "0%"; // Reset width for animation
                bar.style.transition = "none"; // Remove transition for instant reset

                setTimeout(() => {
                    bar.style.transition = "width 1.5s ease-in-out"; // Add transition
                    bar.style.width = width; // Apply original width
                }, 100); // Slight delay for smooth animation
            });
        }

        let observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    animateBars();
                    observer.disconnect();
                }
            });
        }, { threshold: 0.6 });

        observer.observe(document.querySelector("#skills"));
    });
