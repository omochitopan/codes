document.addEventListener('DOMContentLoaded', () => {
  const lastBrElements = document.querySelectorAll('.last_br');

  lastBrElements.forEach(element => {
    const directSpans = Array.from(element.children).filter(child => child.tagName === "SPAN");
    const secondLastSpan = directSpans[directSpans.length - 2];
    const br = document.createElement("br");
    secondLastSpan.before(br);
  });
});