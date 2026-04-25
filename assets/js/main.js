// ─── Years at Rosetree ───────────────────────────────────────────────────────
// Calculates years elapsed since Tim's hire date at Rosetree Solutions (April 2018)
// and injects the value into the hero bio so it never needs a manual update.
(function () {
  var rosetreeStartDate = new Date(2018, 3); // April 2018 (JS months are 0-indexed: 3 = April)
  var now = new Date();
  var years = Math.floor((now - rosetreeStartDate) / (1000 * 60 * 60 * 24 * 365.25));
  document.getElementById('years-at-rosetree').textContent = years + '+ years';
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
