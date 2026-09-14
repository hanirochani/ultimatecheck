// Mobile nav toggle
const navToggle = document.getElementById('navToggle');
const nav = document.getElementById('nav');

if (navToggle && nav) {
  navToggle.addEventListener('click', () => {
      nav.classList.toggle('open');
        });

          nav.querySelectorAll('a').forEach(link => {
              link.addEventListener('click', () => nav.classList.remove('open'));
                });
                }

                // Contact form (demo only — no backend wired up yet)
                const form = document.getElementById('contactForm');
                const formNote = document.getElementById('formNote');

                if (form) {
                  form.addEventListener('submit', (e) => {
                      e.preventDefault();
                          form.reset();
                              if (formNote) formNote.hidden = false;
                                });
                                }
                                
