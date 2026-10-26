// Set current year
document.getElementById('year').textContent = new Date().getFullYear();

// Theme toggle (light / dark)
const themeToggle = document.getElementById('themeToggle');
function getPreferredTheme(){
  const saved = localStorage.getItem('theme');
  if(saved) return saved;
  return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}
function applyTheme(t){
  if(t === 'dark') document.documentElement.setAttribute('data-theme','dark');
  else document.documentElement.removeAttribute('data-theme');
}
applyTheme(getPreferredTheme());

themeToggle.addEventListener('click', ()=>{
  const current = document.documentElement.getAttribute('data-theme') === 'dark' ? 'dark' : 'light';
  const next = current === 'dark' ? 'light' : 'dark';
  applyTheme(next);
  localStorage.setItem('theme', next);
});

// Simple contact form handler (replace with real backend)
document.getElementById('contactForm').addEventListener('submit', e=>{
  e.preventDefault();
  const form = e.target;
  const data = new FormData(form);
  // Here you'd normally send `data` to a server.
  alert('Thanks, ' + (data.get('name') || 'there') + '! Message received.');
  form.reset();
});
