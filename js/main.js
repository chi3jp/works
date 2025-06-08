// ページロード時の処理
document.addEventListener('DOMContentLoaded', function() {
  // モバイルメニュートグル
  const navToggle = document.querySelector('.nav-toggle');
  const navLinks = document.querySelector('.nav-links');
  const navItems = document.querySelectorAll('.nav-links a');
  
  // メニュートグル機能
  navToggle.addEventListener('click', function() {
    this.classList.toggle('active');
    navLinks.classList.toggle('active');
    document.body.style.overflow = navLinks.classList.contains('active') ? 'hidden' : '';
  });
  
  // メニュー項目クリックでメニューを閉じる
  navItems.forEach(item => {
    item.addEventListener('click', () => {
      if (navToggle && navLinks) {
        navToggle.classList.remove('active');
        navLinks.classList.remove('active');
        document.body.style.overflow = '';
      }
    });
  });
  
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
