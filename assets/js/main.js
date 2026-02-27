// Dark mode toggle
document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.getElementById('dark-mode-toggle');
  const icon = document.getElementById('toggle-icon');
  const body = document.body;

  // Check saved preference
  if (localStorage.getItem('darkMode') === 'true') {
    body.classList.add('dark-mode');
    if (icon) icon.textContent = '\u2600\uFE0F';
  }

  if (toggle) {
    toggle.addEventListener('click', () => {
      body.classList.toggle('dark-mode');
      const isDark = body.classList.contains('dark-mode');
      localStorage.setItem('darkMode', isDark);
      if (icon) icon.textContent = isDark ? '\u2600\uFE0F' : '\uD83C\uDF19';
    });
  }
});
