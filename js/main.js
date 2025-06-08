// ページロード時の処理
document.addEventListener('DOMContentLoaded', function() {
  console.log('DOM fully loaded');
  
  // モバイルメニュートグル
  const navToggle = document.querySelector('.nav-toggle');
  const navLinks = document.querySelector('.nav-links');
  const navItems = document.querySelectorAll('.nav-links a');
  
  console.log('navToggle:', navToggle);
  console.log('navLinks:', navLinks);
  console.log('navItems:', navItems);
  
  // メニュートグル機能
  if (navToggle && navLinks) {
    navToggle.style.display = 'block'; // モバイルメニューボタンを強制的に表示
    
    navToggle.addEventListener('click', function(e) {
      e.preventDefault();
      console.log('Menu toggle clicked');
      this.classList.toggle('active');
      navLinks.classList.toggle('active');
      document.body.style.overflow = navLinks.classList.contains('active') ? 'hidden' : '';
    });
    
    // メニュー項目クリックでメニューを閉じる
    navItems.forEach(item => {
      item.addEventListener('click', () => {
        console.log('Menu item clicked');
        navToggle.classList.remove('active');
        navLinks.classList.remove('active');
        document.body.style.overflow = '';
      });
    });
    
    // 初期状態でモバイルメニューを非表示に
    navLinks.style.display = 'none';
    
    // メディアクエリの変更を監視
    const mediaQuery = window.matchMedia('(max-width: 768px)');
    
    function handleTabletChange(e) {
      if (e.matches) {
        // モバイル表示
        navLinks.style.display = 'flex';
      } else {
        // デスクトップ表示
        navLinks.style.display = 'flex';
        navToggle.classList.remove('active');
        navLinks.classList.remove('active');
        document.body.style.overflow = '';
      }
    }
    
    // 初期チェック
    handleTabletChange(mediaQuery);
    // 変更を監視
    mediaQuery.addListener(handleTabletChange);
  } else {
    console.error('Required elements not found');
  }
  
  // スムーズスクロール
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    if (anchor.getAttribute('href') !== '#') {
      anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
          window.scrollTo({
            top: targetElement.offsetTop - 80, // ヘッダーの高さ分を考慮
            behavior: 'smooth'
          });
          
          // URLを更新（履歴に追加）
          history.pushState(null, '', targetId);
        }
      });
    }
  });
  
  // スクロール時のヘッダースタイル変更
  const header = document.querySelector('.header');
  if (header) {
    let lastScroll = 0;
    window.addEventListener('scroll', animateOnScroll);
    
    // 初期表示時にもアニメーションをチェック
    animateOnScroll();
});
