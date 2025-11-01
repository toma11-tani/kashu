/**
 * 台湾グルメ 佳集 - Main JavaScript
 */

// DOM読み込み完了後に実行
document.addEventListener('DOMContentLoaded', function() {
  
  // ========================================
  // モバイルナビゲーションの開閉
  // ========================================
  const hamburger = document.querySelector('.hamburger');
  const siteNav = document.querySelector('.site-nav');
  
  if (hamburger && siteNav) {
    hamburger.addEventListener('click', function() {
      const isActive = hamburger.classList.contains('active');
      
      // トグル
      hamburger.classList.toggle('active');
      siteNav.classList.toggle('active');
      
      // aria属性の更新
      hamburger.setAttribute('aria-expanded', !isActive);
      
      // bodyのスクロールを制御（メニュー開閉時）
      if (!isActive) {
        document.body.style.overflow = 'hidden';
      } else {
        document.body.style.overflow = '';
      }
    });
    
    // ナビゲーションリンクをクリックしたらメニューを閉じる
    const navLinks = siteNav.querySelectorAll('.nav-list a');
    navLinks.forEach(link => {
      link.addEventListener('click', function() {
        hamburger.classList.remove('active');
        siteNav.classList.remove('active');
        hamburger.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
      });
    });
    
    // メニュー外をクリックしたら閉じる
    document.addEventListener('click', function(event) {
      if (siteNav.classList.contains('active') && 
          !siteNav.contains(event.target) && 
          !hamburger.contains(event.target)) {
        hamburger.classList.remove('active');
        siteNav.classList.remove('active');
        hamburger.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
      }
    });
  }
  
  // ========================================
  // スムーススクロール
  // ========================================
  const smoothScrollLinks = document.querySelectorAll('a[href^="#"]');
  
  smoothScrollLinks.forEach(link => {
    link.addEventListener('click', function(event) {
      const href = this.getAttribute('href');
      
      // 空のハッシュやメインコンテンツへのスキップリンクは除外
      if (href === '#' || href === '') return;
      
      const targetId = href.substring(1);
      const targetElement = document.getElementById(targetId);
      
      if (targetElement) {
        event.preventDefault();
        
        // ヘッダーの高さを取得（固定ヘッダーの場合の調整用）
        const header = document.querySelector('.site-header');
        const headerHeight = header ? header.offsetHeight : 0;
        
        // スクロール位置を計算
        const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - headerHeight - 20;
        
        // スムーススクロール
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
        
        // フォーカスを移動（アクセシビリティ）
        targetElement.setAttribute('tabindex', '-1');
        targetElement.focus();
      }
    });
  });
  
  // ========================================
  // 画像の遅延読み込み（loading="lazy"のフォールバック）
  // ========================================
  if ('loading' in HTMLImageElement.prototype) {
    // ブラウザがネイティブでloading="lazy"をサポートしている場合は何もしない
  } else {
    // 古いブラウザ向けのフォールバック
    const lazyImages = document.querySelectorAll('img[loading="lazy"]');
    
    if ('IntersectionObserver' in window) {
      const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const img = entry.target;
            if (img.dataset.src) {
              img.src = img.dataset.src;
            }
            img.classList.add('loaded');
            observer.unobserve(img);
          }
        });
      });
      
      lazyImages.forEach(img => imageObserver.observe(img));
    } else {
      // IntersectionObserverがサポートされていない場合はすぐに読み込む
      lazyImages.forEach(img => {
        if (img.dataset.src) {
          img.src = img.dataset.src;
        }
      });
    }
  }
  
  // ========================================
  // ヘッダーのスクロール時の表示制御（オプション）
  // ========================================
  let lastScrollTop = 0;
  const header = document.querySelector('.site-header');
  
  if (header) {
    window.addEventListener('scroll', function() {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      
      // 少しスクロールしたらヘッダーに影を追加
      if (scrollTop > 10) {
        header.style.boxShadow = '0 2px 12px rgba(43, 43, 43, 0.15)';
      } else {
        header.style.boxShadow = '0 2px 8px rgba(43, 43, 43, 0.1)';
      }
      
      lastScrollTop = scrollTop;
    });
  }
  
  // ========================================
  // フォームのバリデーション（将来的な拡張用）
  // ========================================
  const forms = document.querySelectorAll('form');
  
  forms.forEach(form => {
    form.addEventListener('submit', function(event) {
      // HTML5のバリデーションを活用
      if (!form.checkValidity()) {
        event.preventDefault();
        event.stopPropagation();
      }
      form.classList.add('was-validated');
    });
  });
  
  // ========================================
  // 外部リンクに自動でアイコンを追加（オプション）
  // ========================================
  const externalLinks = document.querySelectorAll('a[target="_blank"]');
  
  externalLinks.forEach(link => {
    // すでにrel属性にnoreferrerやnoopenerが含まれているか確認
    const rel = link.getAttribute('rel') || '';
    if (!rel.includes('noopener')) {
      link.setAttribute('rel', rel + ' noopener');
    }
    if (!rel.includes('noreferrer')) {
      link.setAttribute('rel', link.getAttribute('rel') + ' noreferrer');
    }
  });
  
  // ========================================
  // カウンターアニメーション（数字が増えるアニメーション）
  // ========================================
  function animateCounter(element, target, duration = 2000) {
    let start = 0;
    const increment = target / (duration / 16); // 60fps想定
    
    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        element.textContent = target;
        clearInterval(timer);
      } else {
        element.textContent = Math.floor(start);
      }
    }, 16);
  }
  
  // カウンター要素があれば実行（将来的な拡張用）
  const counters = document.querySelectorAll('[data-counter]');
  if (counters.length > 0 && 'IntersectionObserver' in window) {
    const counterObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const target = parseInt(entry.target.dataset.counter);
          animateCounter(entry.target, target);
          counterObserver.unobserve(entry.target);
        }
      });
    });
    
    counters.forEach(counter => counterObserver.observe(counter));
  }
  
  // ========================================
  // アクセシビリティ: Escキーでモーダルやメニューを閉じる
  // ========================================
  document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape' || event.key === 'Esc') {
      // モバイルメニューが開いている場合は閉じる
      if (hamburger && siteNav && siteNav.classList.contains('active')) {
        hamburger.classList.remove('active');
        siteNav.classList.remove('active');
        hamburger.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
      }
    }
  });
  
  // ========================================
  // ページ読み込み完了のログ（開発用）
  // ========================================
  console.log('台湾グルメ 佳集 - Website loaded successfully');
});

// ========================================
// ウィンドウリサイズ時の処理
// ========================================
let resizeTimer;
window.addEventListener('resize', function() {
  // リサイズイベントのデバウンス
  clearTimeout(resizeTimer);
  resizeTimer = setTimeout(function() {
    // タブレット以上のサイズになったらモバイルメニューを閉じる
    if (window.innerWidth > 768) {
      const hamburger = document.querySelector('.hamburger');
      const siteNav = document.querySelector('.site-nav');
      
      if (hamburger && siteNav) {
        hamburger.classList.remove('active');
        siteNav.classList.remove('active');
        hamburger.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
      }
    }
  }, 250);
});

// ========================================
// パフォーマンス: スクロールイベントのデバウンス
// ========================================
function debounce(func, wait = 10) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

// ========================================
// ページ離脱前の確認（フォーム入力中のみ、将来的な拡張用）
// ========================================
let formChanged = false;

document.querySelectorAll('input, textarea').forEach(input => {
  input.addEventListener('change', function() {
    formChanged = true;
  });
});

window.addEventListener('beforeunload', function(event) {
  if (formChanged) {
    event.preventDefault();
    event.returnValue = '';
    return '';
  }
});

// フォーム送信時はフラグをリセット
document.querySelectorAll('form').forEach(form => {
  form.addEventListener('submit', function() {
    formChanged = false;
  });
});

