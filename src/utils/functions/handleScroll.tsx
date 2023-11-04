function handleScroll(target: string) {
  const div = document.getElementById(target);
  div?.scrollIntoView({
    behavior: 'smooth',
  });
}

export default handleScroll;
