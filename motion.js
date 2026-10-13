(() => {
const preference = matchMedia('(prefers-reduced-motion: reduce)');
document.querySelectorAll('.motion-preview').forEach(container => {
 const video = container.querySelector('video');
 const button = container.querySelector('button');
 let visible = false, userPaused = false;
 const sync = () => {button.textContent = video.paused ? 'Play preview' : 'Pause preview';button.setAttribute('aria-label', video.paused ? 'Play article motion preview' : 'Pause article motion preview');};
 const play = () => video.play().catch(sync);
 const reconcile = () => {if (visible && !document.hidden && !preference.matches && !userPaused) play(); else video.pause();};
 video.addEventListener('play',sync);video.addEventListener('pause',sync);
 video.addEventListener('error',()=>{button.textContent='Preview unavailable';button.disabled=true;});
 button.addEventListener('click',()=>{if(video.paused){userPaused=false;play();}else{userPaused=true;video.pause();}});
 new IntersectionObserver(entries=>{visible=entries[0].isIntersecting;reconcile();},{threshold:.25}).observe(video);
 document.addEventListener('visibilitychange',reconcile);
 preference.addEventListener('change',reconcile);
});
})();