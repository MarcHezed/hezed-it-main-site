const menu=document.querySelector('.menu'),nav=document.querySelector('nav');menu.addEventListener('click',()=>{let open=nav.classList.toggle('open');menu.setAttribute('aria-expanded',String(open));menu.textContent=open?'Close ✕':'Menu ☰'});nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{nav.classList.remove('open');menu.setAttribute('aria-expanded','false');menu.textContent='Menu ☰'}));
// Progressive enhancement: content remains readable if motion is unavailable.
const motion = window.matchMedia('(prefers-reduced-motion: reduce)');
if ('IntersectionObserver' in window && !motion.matches) {
 const targets = [...document.querySelectorAll('.strip,section > .eyebrow,.section-top,.expertise-group-title,.service,.integration > div:first-child,.node,.work,.process > div:first-child,.steps article,.contact > .eyebrow,.contact h2,.contact-person,.contact .email')];
 const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
   if (entry.isIntersecting) {
    entry.target.classList.remove('reveal-pending');
    entry.target.classList.add('reveal-visible');
    observer.unobserve(entry.target);
   }
  });
 }, {threshold:0,rootMargin:'0px 0px -45px 0px'});
 targets.forEach(el => {
  if(el.getBoundingClientRect().top >= window.innerHeight - 45){
   el.classList.add('reveal-pending');
   observer.observe(el);
  }
 });
 const showAll = () => {observer.disconnect();targets.forEach(el=>el.classList.remove('reveal-pending'))};
 motion.addEventListener('change', event=>{if(event.matches)showAll()});
 document.addEventListener('focusin',event=>{const pending=event.target.closest('.reveal-pending');if(pending){pending.classList.remove('reveal-pending');observer.unobserve(pending)}});
 window.addEventListener('beforeprint',showAll);
}
document.addEventListener('keydown',event=>{if(event.key==='Escape' && nav.classList.contains('open')){nav.classList.remove('open');menu.setAttribute('aria-expanded','false');menu.textContent='Menu ☰';menu.focus()}});

const quickContact=document.querySelector('#quick-contact');
const contactToggle=quickContact.querySelector('summary');
const closeQuickContact=()=>{quickContact.open=false;contactToggle.focus()};
quickContact.querySelector('.contact-widget-close').addEventListener('click',closeQuickContact);
quickContact.addEventListener('keydown',event=>{if(event.key==='Escape'&&quickContact.open){event.preventDefault();closeQuickContact()}});
document.addEventListener('click',event=>{if(quickContact.open&&!quickContact.contains(event.target))quickContact.open=false});

