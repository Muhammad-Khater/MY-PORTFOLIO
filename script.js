/* -------------------- Skills Animation on Scroll -------------------- */
document.addEventListener("DOMContentLoaded", function () {
  const skillBars = document.querySelectorAll(".skill");
  const circulars = document.querySelectorAll(".circle-skill");
  const skillsSection = document.getElementById("skills");

  function animateSkills() {
    const sectionPos = skillsSection.getBoundingClientRect().top;
    const screenHeight = window.innerHeight;

    if (sectionPos < screenHeight - 50) {
      // Linear Skills
      skillBars.forEach((skill) => {
        const percent = skill.getAttribute("data-percent");
        skill.querySelector(".skill-bar-new span").style.width = percent + "%";
      });

      // Circular Skills
      circulars.forEach((c) => {
        const value = c.getAttribute("data-value");
        const degree = value * 3.6;
        c.style.background = `
          radial-gradient(closest-side, #000 80%, transparent 0 99.9%, #000 0),
          conic-gradient(#00eaff 0deg ${degree}deg, #222 ${degree}deg 360deg)
        `;
      }, 200);

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
