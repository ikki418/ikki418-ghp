// SCSSをインポート（Webpackがビルドプロセスで処理）
import '../scss/main.scss';

// DOM読み込み完了後に実行
document.addEventListener('DOMContentLoaded', () => {
  // ヘッダースクロール制御
  const header = document.querySelector('.header');
  let lastScrollY = window.scrollY;
  
  // スクロール時のヘッダー表示/非表示
  window.addEventListener('scroll', () => {
    // スクロール方向を検出
    const scrollY = window.scrollY;
    const isScrollingDown = scrollY > lastScrollY;
    lastScrollY = scrollY;
    
    // スクロール量に応じてヘッダースタイルを変更
    if (scrollY > 100) {
      header.classList.add('scrolled');
      
      // スクロール方向に応じてヘッダーを表示/非表示
      if (isScrollingDown) {
        header.classList.add('hidden');
      } else {
        header.classList.remove('hidden');
      }
    } else {
      header.classList.remove('scrolled');
      header.classList.remove('hidden');
    }
  });
  
  // スクロールアニメーション
  const animateOnScroll = () => {
    const elements = document.querySelectorAll('.fade-in');
    
    elements.forEach(element => {
      const elementTop = element.getBoundingClientRect().top;
      const elementVisible = 150;
      
      if (elementTop < window.innerHeight - elementVisible) {
        element.classList.add('visible');
      }
    });
  };
  
  // 初期表示時にもアニメーションを適用
  animateOnScroll();
  window.addEventListener('scroll', animateOnScroll);
  
  // セクション要素にフェードインクラスを追加
  document.querySelectorAll('section:not(.hero)').forEach(section => {
    section.classList.add('fade-in');
  });
  
  // ナビゲーションリンクのスムーススクロール
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      
      const targetElement = document.querySelector(targetId);
      if (!targetElement) return;
      
      const targetPosition = targetElement.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = targetPosition - 100; // ヘッダー分のオフセット
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    });
  });
});
