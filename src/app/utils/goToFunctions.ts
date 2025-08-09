export const goToSection = (section: string) => {
  document.querySelector(section)?.scrollIntoView({
    behavior: "smooth",
  });
};
