// ─── Rosetree stats ───────────────────────────────────────────────────────────
// Update these values here — they populate the hero bio, By the Numbers cards,
// and work experience bullet points automatically.
(function () {
  // Current size of the Rosetree delivery org
  var teamSize = 55;
  document.getElementById('rosetree-team-size-hero').textContent = teamSize;
  document.getElementById('rosetree-team-size-stat').textContent = teamSize;
  document.getElementById('rosetree-team-size-bullet').textContent = teamSize;

  // Active client engagements currently supported
  var clientEngagements = 50;
  document.getElementById('client-engagements-hero').textContent = clientEngagements;
  document.getElementById('client-engagements-stat').textContent = clientEngagements + '+';
  document.getElementById('client-engagements-bullet').textContent = clientEngagements;
})();

// ─── Dynamic date calculations ───────────────────────────────────────────────
(function () {
  function yearsSince(date) {
    return Math.floor((new Date() - date) / (1000 * 60 * 60 * 24 * 365.25));
  }

  // Hero bio: Tim's hire date at Rosetree Solutions (April 2018)
  document.getElementById('years-at-rosetree').textContent =
    yearsSince(new Date(2018, 3)) + '+ years';

  // By the numbers: Tim's first Salesforce role (April 2016)
  document.getElementById('years-in-salesforce').textContent =
    yearsSince(new Date(2016, 3)) + '+';

  // By the numbers: Promoted to Director of Technical Architecture (January 2022)
  document.getElementById('years-in-leadership').textContent =
    yearsSince(new Date(2022, 0)) + '+';
})();

// ─── Work / Personal Mode Toggle ─────────────────────────────────────────────
(function () {
  var currentMode = 'work';

  function setMode(mode) {
    if (mode === currentMode) return;
    var isWork = mode === 'work';
    currentMode = mode;

    // Toggle pill
    document.getElementById('toggle-pill').style.left = isWork ? '4px' : '50%';

    // Button colors
    document.getElementById('btn-work').style.color = isWork ? 'var(--fg)' : 'var(--muted)';
    document.getElementById('btn-personal').style.color = isWork ? 'var(--muted)' : 'var(--fg)';
    document.getElementById('btn-work').setAttribute('aria-selected', isWork);
    document.getElementById('btn-personal').setAttribute('aria-selected', !isWork);

    // Portrait crossfade
    document.getElementById('portrait-work').style.opacity = isWork ? '1' : '0';
    document.getElementById('portrait-personal').style.opacity = isWork ? '0' : '1';

    // Hero text swap
    document.getElementById('eyebrow-work').style.display = isWork ? '' : 'none';
    document.getElementById('eyebrow-personal').style.display = isWork ? 'none' : '';
    document.getElementById('intro-work').style.display = isWork ? '' : 'none';
    document.getElementById('intro-personal').style.display = isWork ? 'none' : '';

    // CSS var for accent color
    document.documentElement.classList.toggle('mode-personal', !isWork);

    // Content crossfade
    var outgoing = document.getElementById(isWork ? 'personal-content' : 'work-content');
    var incoming = document.getElementById(isWork ? 'work-content' : 'personal-content');

    outgoing.style.opacity = '0';
    outgoing.style.transform = 'translateY(8px)';
    outgoing.style.pointerEvents = 'none';

    setTimeout(function () {
      outgoing.style.display = 'none';
      outgoing.style.opacity = '';
      outgoing.style.transform = '';
      outgoing.style.pointerEvents = '';

      incoming.style.display = 'block';
      incoming.style.opacity = '0';
      incoming.style.transform = 'translateY(8px)';
      incoming.style.pointerEvents = 'none';

      // Force reflow then animate in
      incoming.getBoundingClientRect();
      incoming.style.opacity = '1';
      incoming.style.transform = 'translateY(0)';
      incoming.style.pointerEvents = 'auto';
    }, 400);
  }

  function toggleDark() {
    var isDark = document.documentElement.classList.toggle('dark');
    localStorage.setItem('tw-dark', isDark);
    document.getElementById('icon-moon').style.display = isDark ? 'none' : '';
    document.getElementById('icon-sun').style.display = isDark ? '' : 'none';
  }

  // Sync icon with current dark state on load
  if (document.documentElement.classList.contains('dark')) {
    document.getElementById('icon-moon').style.display = 'none';
    document.getElementById('icon-sun').style.display = '';
  }

  // Expose to global scope for onclick handlers
  window.setMode = setMode;
  window.toggleDark = toggleDark;
})();
