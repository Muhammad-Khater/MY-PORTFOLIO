/* -------------------- Skills Animation on Scroll -------------------- */
document.addEventListener("DOMContentLoaded", function () {
  const skillBars = document.querySelectorAll(".skill");
  const skillsSection = document.getElementById("skills");

  function animateSkills() {
    const sectionPos = skillsSection.getBoundingClientRect().top;
    const screenHeight = window.innerHeight;

    if (sectionPos < screenHeight - 50) {
      skillBars.forEach((skill) => {
        const percent = skill.getAttribute("data-percent");
        skill.querySelector(".skill-bar-new span").style.width = percent + "%";
      });

      window.removeEventListener("scroll", animateSkills);
    }
  }

  window.addEventListener("scroll", animateSkills);
  animateSkills();

  /* -------------------- Back to Top -------------------- */
  const backToTopButton = document.getElementById("backToTop");
  window.addEventListener("scroll", () => {
    backToTopButton.style.display = window.scrollY > 100 ? "block" : "none";
  });

  backToTopButton.addEventListener("click", (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
});
