(function () {
  var pages = ['index.html', 'about.html', 'tour.html', 'armory.html'];

  // Determine current page index
  var path = window.location.pathname;
  var currentFile = path.substring(path.lastIndexOf('/') + 1) || 'index.html';
  var currentIndex = pages.indexOf(currentFile);
  if (currentIndex === -1) currentIndex = 0;

  // On page load, play the slide-in animation based on stored direction
  var direction = sessionStorage.getItem('swipe-direction');
  if (direction) {
    sessionStorage.removeItem('swipe-direction');
    var pageContent = document.querySelector('main') || document.body;
    // slide-from-right means we swiped left (going forward)
    // slide-from-left means we swiped right (going backward)
    pageContent.style.animation = direction === 'forward'
      ? 'slideInFromRight 0.3s ease-out both'
      : 'slideInFromLeft 0.3s ease-out both';
  }

  // Touch swipe detection - only on mobile
  var touchStartX = 0;
  var touchStartY = 0;
  var touchEndX = 0;
  var touchEndY = 0;
  var swiping = false;

  document.addEventListener('touchstart', function (e) {
    touchStartX = e.changedTouches[0].screenX;
    touchStartY = e.changedTouches[0].screenY;
    swiping = true;
  }, { passive: true });

  document.addEventListener('touchend', function (e) {
    if (!swiping) return;
    swiping = false;

    touchEndX = e.changedTouches[0].screenX;
    touchEndY = e.changedTouches[0].screenY;

    var diffX = touchEndX - touchStartX;
    var diffY = touchEndY - touchStartY;

    // Only trigger if horizontal swipe is dominant and exceeds threshold
    if (Math.abs(diffX) < 60 || Math.abs(diffY) > Math.abs(diffX) * 0.7) return;

    // Don't trigger on desktop
    if (window.innerWidth >= 768) return;

    var targetIndex;
    var animDirection;

    if (diffX < 0) {
      // Swiped left → go to next page
      targetIndex = currentIndex + 1;
      animDirection = 'forward';
    } else {
      // Swiped right → go to previous page
      targetIndex = currentIndex - 1;
      animDirection = 'backward';
    }

    // Bounds check
    if (targetIndex < 0 || targetIndex >= pages.length) return;

    // Store direction for the target page to animate in
    sessionStorage.setItem('swipe-direction', animDirection);

    // Animate current page out
    var pageContent = document.querySelector('main') || document.body;
    var animName = animDirection === 'forward' ? 'slideOutToLeft' : 'slideOutToRight';
    pageContent.style.animation = animName + ' 0.25s ease-in both';

    // Navigate after animation
    setTimeout(function () {
      window.location.href = pages[targetIndex];
    }, 200);
  }, { passive: true });
})();
