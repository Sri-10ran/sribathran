/*========================
ANIMATION
=======================*/
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
      observer.unobserve(entry.target); 
    }
  });
}, { threshold: 0.2 });

document.querySelectorAll(".animate").forEach(el => observer.observe(el));



const dynamicObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show-dynamic");
      dynamicObserver.unobserve(entry.target); 
    }
  });
}, { threshold: 0.2 });




/*============================
PRELOADER
===========================*/
window.addEventListener("load", function () {
  const preloader = document.getElementById("preloader");
  if (preloader) {
    preloader.style.opacity = '0';
    setTimeout(() => preloader.style.display = 'none', 300);
  }
});




/* =====================================
   NAVBAR 
===================================== */

function toggleIcons(open) {
  document.querySelector('.toggler-bars').classList.toggle('d-none', !open);
  document.querySelector('.toggler-x').classList.toggle('d-none', open);
}

const toggler = document.querySelector('.custom-toggler');

toggler.addEventListener('click', () => {
  toggler.classList.toggle('active');

  const isOpen = toggler.classList.contains('active');
  toggleIcons(!isOpen);
});

document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', (e) => {

    const href = link.getAttribute('href');
    if (href.startsWith('#')) {
      e.preventDefault();
      document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
    }

    const menu = document.querySelector('.navbar-collapse.show');
    if (menu) {
      const collapse = bootstrap.Collapse.getInstance(menu);
      collapse?.hide();
    }

    toggler.classList.add('active');
    toggleIcons(false);
  });
});


/* =====================================
   EXPERIENCE
===================================== */
const expRoot = document.getElementById('experienceList');

if (expRoot && Array.isArray(experienceData)) {

  const esc = s => String(s || '');

  experienceData.forEach(item => {

    const row = document.createElement('div');
    row.className = 'experience-row animate-dynamic';

    const left = document.createElement('div');
    left.className = 'exp-left';
    left.innerHTML = `
      <div class="exp-badge">${esc(item.duration)}</div>
    `;

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
    dynamicObserver.observe(row);
  });
}




/*======================
SKILLS
=====================*/
const skillsRoot = document.getElementById('skillsList');

if (skillsRoot && Array.isArray(skillsData)) {

  const esc = s => String(s || '');

  skillsData.forEach(cat => {

    const col = document.createElement('div');
    col.className = 'col-lg-4 col-md-6 animate-dynamic';

    const skillsHtml = (cat.skills || [])
      .map(s => `
        <div class="skill-item">
          <img src="${esc(s.logo)}" alt="${esc(s.name)}" class="skill-logo">
          <div class="skill-name">${esc(s.name)}</div>
        </div>
      `).join('');

    col.innerHTML = `
      <div class="skill-card h-100 ">
        <h6 class="mb-3">${esc(cat.category)}</h6>
        <div class="d-flex flex-wrap gap-3">
          ${skillsHtml}
        </div>
      </div>
    `;

    skillsRoot.appendChild(col);
    dynamicObserver.observe(col);
  });
}



/*==========================
PROJECTS
===========================*/ 

const projectsRoot = document.getElementById('projectsList');

if (projectsRoot && Array.isArray(projectData)) {
  const esc = s => String(s || '');

  projectData.forEach(proj => {
    const col = document.createElement('div');
    col.className = 'col-lg-6 animate-dynamic';

    const techHtml = (proj.techStack || [])
      .map(t => `<span class="tech-pill">${esc(t)}</span>`)
      .join('');

    const paragraphs = (proj.paragraphs || [])
      .map(p => `<p class="project-paragraph mb-2">${esc(p)}</p>`)
      .join('');

    const links = proj.links || {};
    
    const liveTag = links.live ? `
      <a href="${esc(links.live)}" target="_blank" class="live-tag">
        Live <i class="fa-solid fa-arrow-up-right-from-square"></i>
      </a>
    ` : ``;

    const githubBtn = links.github ? `
      <a href="${esc(links.github)}" target="_blank" class="btn-card-action-outline ">
        Explore <i class="fa-solid fa-code ms-2"></i>
      </a>
    ` : ``;

    col.innerHTML = `
      <div class="project-card p-4 h-100">
        
        <!-- TITLE + LIVE TAG -->
        <div class="d-flex justify-content-between align-items-center mb-0">
          <h5 class="project-title mb-0">${esc(proj.title)}</h5>
          ${liveTag}
        </div>

        <!-- TECH STACK -->
        <div class="mt-1 mb-1">${paragraphs}</div>

        <!-- DESCRIPTION -->
        ${techHtml}

        <div class="mb-4"></div>

        <!-- GITHUB BUTTON -->
        ${githubBtn}

      </div>
    `;

    projectsRoot.appendChild(col);
    dynamicObserver.observe(col);
  });
}
