/* assets/js/main.js */

(() => {
  const esc = s => String(s || '');

  const expRoot = document.getElementById('experienceList');
  const skillsRoot = document.getElementById('skillsList');
  const projectsRoot = document.getElementById('projectsList');
  const yearEl = document.getElementById('year');

  const viewResumeBtn = document.getElementById('viewResumeBtn');
  const viewResumeBtn2 = document.getElementById('viewResumeBtn2');
  const downloadResumeBtn = document.getElementById('downloadResumeBtn');
  const downloadResumeBtn2 = document.getElementById('downloadResumeBtn2');

  const phoneOpen = document.getElementById('phoneOpen');

  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Resume links
  if (typeof resumeLinks !== 'undefined') {
    if (viewResumeBtn) viewResumeBtn.href = resumeLinks.view || '#';
    if (viewResumeBtn2) viewResumeBtn2.href = resumeLinks.view || '#';
    if (downloadResumeBtn) downloadResumeBtn.href = resumeLinks.download || resumeLinks.view || '#';
    if (downloadResumeBtn2) downloadResumeBtn2.href = resumeLinks.download || resumeLinks.view || '#';
  }

  // Render Experience in modern split form
  if (expRoot && Array.isArray(experienceData)) {
    experienceData.forEach(item => {
      const row = document.createElement('div');
      row.className = 'experience-row';

      const left = document.createElement('div');
      left.className = 'exp-left';
      left.innerHTML = `<div class="exp-badge">${esc(item.duration)}</div>`;

      const right = document.createElement('div');
      right.className = 'exp-right';
      right.innerHTML = `
        <div class="exp-title">${esc(item.title)}</div>
        <div class="exp-sub">${esc(item.subContent)}</div>
        <div class="exp-details">${esc(item.details)}</div>
      `;

      row.appendChild(left);
      row.appendChild(right);
      expRoot.appendChild(row);
    });
  }

  // Render Skills
  if (skillsRoot && Array.isArray(skillsData)) {
    skillsData.forEach(cat => {
      const col = document.createElement('div');
      col.className = 'col-lg-4 col-md-6';

      const skillsHtml = (cat.skills || []).map(s => `
        <div class="skill-item">
          <img src="${esc(s.logo)}" alt="${esc(s.name)}" class="skill-logo">
          <div class="skill-name">${esc(s.name)}</div>
        </div>
      `).join('');

      col.innerHTML = `
        <div class="skill-card h-100">
          <h6 class="mb-3">${esc(cat.category)}</h6>
          <div class="d-flex flex-wrap gap-3">
            ${skillsHtml}
          </div>
        </div>
      `;
      skillsRoot.appendChild(col);
    });
  }

  // Render Projects with tech pills under title and proper buttons
  if (projectsRoot && Array.isArray(projectData)) {
    projectData.forEach(proj => {
      const col = document.createElement('div');
      col.className = 'col-lg-6';

      const techHtml = (proj.techStack || []).map(t => `<span class="tech-pill">${esc(t)}</span>`).join(' ');
      const paragraphs = (proj.paragraphs || []).map(p => `<p class="project-paragraph">${esc(p)}</p>`).join('');

      const links = proj.links || {};
      let linkHtml = '';
      if (links.live) {
        linkHtml += `<a class="btn-card-action cyan me-2 " href="${esc(links.live)}" target="_blank"> Preview <i class="fas fa-link me-2"></i></a>`;
      }
      if (links.github) {
        linkHtml += `<a class="btn-card-action-outline " href="${esc(links.github)}" target="_blank"> Explore <i class="fas fa-code me-2"></i></a>`;
      }

      col.innerHTML = `
        <div class="project-card h-100">
          <div class="d-flex justify-content-between align-items-start">
            <div>
              <h5 class="mb-1">${esc(proj.title)}</h5>
              <div class="mt-1">${techHtml}</div>
            </div>
          </div>

          ${paragraphs}
          <div class="mt-4 mb-2 ">${linkHtml}</div>
        </div>
      `;

      projectsRoot.appendChild(col);
    });
  }

  // Smooth scrolling for nav links
  document.querySelectorAll('.nav-link').forEach(a => {
    a.addEventListener('click', (e) => {
      const href = a.getAttribute('href');
      if (href && href.startsWith('#')) {
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) target.scrollIntoView({behavior: 'smooth', block: 'start'});
        // close navbar on mobile if open
        const bsCollapse = document.querySelector('.navbar-collapse.collapse.show');
        if (bsCollapse) {
          const collapse = bootstrap.Collapse.getInstance(bsCollapse);
          if (collapse) collapse.hide();
        }
      }
    });
  });

  // Phone modal trigger
  if (phoneOpen) {
    phoneOpen.addEventListener('click', (e) => {
      e.preventDefault();
      const phoneModal = new bootstrap.Modal(document.getElementById('phoneModal'));
      phoneModal.show();
    });
  }

  // Improve navbar toggler animation (optional)
  const toggler = document.querySelector('.custom-toggler');
  if (toggler) {
    toggler.addEventListener('click', () => {
      toggler.classList.toggle('open');
      const bars = toggler.querySelectorAll('.bar');
      bars.forEach((b,i) => {
        if (toggler.classList.contains('open')) b.style.transform = `translateY(${i===0?8: i===1?0:-8}px) rotate(${i===1?90: i===0?45:-45}deg)`;
        else b.style.transform = '';
      });
    });
  }

})();
