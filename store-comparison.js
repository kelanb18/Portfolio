document.querySelectorAll('[data-comparison]').forEach(button => {
  button.addEventListener('click', () => {
    document.querySelectorAll('[data-comparison]').forEach(item => item.setAttribute('aria-pressed', String(item === button)));
    document.querySelectorAll('.comparison-panel').forEach(panel => { panel.hidden = panel.id !== 'comparison-' + button.dataset.comparison; });
  });
});
