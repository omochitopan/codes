document.addEventListener('DOMContentLoaded', () => {
  const lastBrElement = document.querySelector('.last_br');

  const directSpans = Array.from(lastBrElement.children).filter(child => child.tagName === 'SPAN');

  const secondLastSpan = directSpans[directSpans.length - 2];
  const br = document.createElement('br');
  secondLastSpan.before(br);
});
