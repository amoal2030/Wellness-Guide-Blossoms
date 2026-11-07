/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * دليل مستخدم منصة عافية تُزهر | Afiya Tazhar User Guide
 * Pure Vanilla JavaScript - Dual Language (AR/EN), Theme Switching, Live Search, Interactive Tester
 */

(function () {
  'use strict';

  /* ==========================================================================
     1. Translations & Dictionary (Bilingual Support: AR / EN)
     ========================================================================== */
  const translations = {
    ar: {
      page_title: "دليل مستخدم منصة عافية تُزهر | Afiya Tazhar User Guide",
      page_meta_desc: "الدليل الإلكتروني الشامل والمستقل لاستخدام وإدارة منصة عافية تُزهر للمدير الرئيسي والمشرفين والزوار.",
      brand_title: "دليل عافية تُزهِـر",
      brand_badge: "دليل رسمي مستقل",
      brand_subtitle: "Afiya Tazhar • User & Admin Guide",
      search_placeholder: "ابحث في مواضيع الدليل...",
      search_modal_placeholder: "ابحث عن: رفع الصور، تسجيل الدخول، المشرفين...",
      btn_visit_platform: "زيارة منصة المبادرة",
      btn_print: "طباعة / PDF",
      btn_quick_images: "دليل رفع الصور المباشرة",
      btn_quick_faq: "حل المشكلات الشائعة",
      hero_tag: "دليل الاستخدام الرسمي المستقل",
      hero_title: "مرحبًا بك في دليل مستخدم منصة عافية تُزهر",
      hero_desc: "دليلك الشامل للتعرف على المنصة واستخدام خدماتها وإدارة محتواها بسهولة، خطوة بخطوة للمدير الرئيسي، المشرفين، والزوار.",

      // Sidebar Categories & Links
      cat_overview: "نظرة عامة والترحيب",
      nav_intro: "مرحبًا بك في الدليل",
      nav_about: "عن منصة عافية تُزهر",
      nav_roles_matrix: "مصفوفة الصلاحيات",

      cat_admin: "دليل المدير الرئيسي",
      badge_admin: "المدير",
      nav_admin_login: "تسجيل دخول Google",
      nav_admin_dashboard: "لوحة الإدارة والإحصائيات",
      nav_admin_settings: "إعدادات الموقع والشعارات",
      nav_admin_broadcasts: "إدارة الإذاعات الصباحية",
      nav_admin_lectures: "إدارة المحاضرات التوعوية",
      nav_admin_interviews: "إدارة المقابلات الحوارية",
      nav_admin_surveys: "إدارة الاستبانات والقياس",
      nav_admin_events: "إدارة الفعاليات والتسجيلات",
      nav_admin_supervisors: "إدارة وتوزيع المشرفين",
      nav_admin_saving: "حفظ وتأكيد التغييرات",

      cat_supervisors: "دليل المشرفين",
      badge_supervisor: "المشرف",
      nav_sup_login: "تسجيل الدخول والصلاحيات",
      nav_sup_content: "إضافة وتعديل وحذف المحتوى",
      nav_sup_media: "إدراج الصور والروابط",
      nav_sup_limits: "حدود الصلاحية الصارمة",

      cat_users: "دليل الزائر والمستخدم",
      badge_visitor: "الزوار",
      nav_user_browsing: "تصفح أقسام المنصة",
      nav_user_media: "الإذاعات والمحاضرات والمقابلات",
      nav_user_participate: "المشاركة في الاستبانات والتسجيل",
      nav_user_devices: "التصفح بالهاتف والكمبيوتر",

      cat_images: "دليل الصور والشعارات",
      badge_essential: "هام جداً",
      nav_img_types: "ما هو الرابط المباشر؟",
      nav_img_upload: "الخطوات الـ 12 للرفع (ImgBB)",
      nav_img_tester: "فحص ومعاينة الرابط المباشر",
      nav_img_logos: "تغيير الشعارات في الإعدادات",
      nav_img_security: "أمان وخصوصية الصور",

      cat_faq: "حل المشكلات الشائعة",
      nav_faq: "الأسئلة الشائعة والحلول",
      pill_faq: "إجابات عملية فورية",

      sidebar_footer_title: "دليل عافية تُزهر الإلكتروني",
      sidebar_footer_desc: "مبني لخدمة المجتمع التعليمي والصحي.",
      sidebar_footer_link: "فتح المنصة في تبويب جديد ↗",

      // Portal Cards
      card_admin_title: "دليل المدير الرئيسي",
      card_admin_desc: "تسجيل الدخول، إدارة المشرفين، تعديل الصلاحيات، متابعة الإحصائيات، وضبط إعدادات المنصة.",
      card_sup_title: "دليل المشرفين",
      card_sup_desc: "إضافة المحتوى التوعوي، تعديل المواد، إدراج الروابط والصور، وفهم حدود الصلاحية المعينة.",
      card_visitor_title: "دليل المستخدم والزائر",
      card_visitor_desc: "تصفح الإذاعات الصباحية، حضور المحاضرات، مشاهدة المقابلات، والتسجيل بالفعاليات.",
      card_img_title: "دليل الصور والشعارات",
      card_img_desc: "تحويل الصور إلى روابط مباشرة خطوة بخطوة، استخدام ImgBB، وفحص الروابط بالأداة المدمجة.",
      card_faq_title: "حل المشكلات الشائعة",
      card_faq_desc: "إجابات عملية عن مشاكل عدم ظهور لوحة الإدارة، رسائل عدم التصريح، وأخطاء حفظ الصور.",
      card_learn_more: "استعراض الخطوات",

      // Filter pills
      filter_all: "الكل",
      filter_admin: "المدير الرئيسي",
      filter_sup: "المشرفون",
      filter_vis: "المستخدم والزائر",
      filter_img: "الصور والشعارات",
      filter_faq: "حل المشكلات",
      search_esc: "للإغلاق",
      search_enter: "للانتقال للموضوع",

      // Lesson Navigation
      prev_lesson: "← الدرس السابق",
      next_lesson: "الدرس التالي →",

      // Interactive Tester
      tester_main_title: "أداة فحص واختبار روابط الصور التفاعلية",
      tester_desc: "يمكنك الآن اختبار أي رابط صورة قبل إدراجه في لوحة تحكم منصة عافية تُزهر للتأكد من أنه رابط مباشر سليم ويعمل دون أخطاء:",
      tester_box_title: "معمل فحص الرابط المباشر",
      tester_box_subtitle: "الصق رابط الصورة الذي حصلت عليه واضغط «فحص الرابط» لمعاينته وتحليله فورًا:",
      tester_btn_run: "فحص الرابط ومعاينته",
      tester_tip_t: "أمثلة سريعة للتجربة:",
      tester_tip_d: "يمكنك تجربة كتابة رابط صفحة خاطئ مثل https://imgbb.com/sample لرؤية التنبيه، أو تجربة رابط مباشر لصورة الشعار لمعاينته فورًا!",

      // Tester validation messages
      test_empty: "الرجاء لصق رابط أولاً في الخانة المخصصة.",
      test_html_err: "⚠️ تنبيه: لقد قمت بلصق كود HTML (مثل <img> أو <a>). المطلوب هو رابط الرابط فقط ويبدأ بـ https://",
      test_page_warn: "⚠️ تنبيه هام: هذا رابط لصفحة عرض وليس رابط مباشر للصورة! ستظهر الصورة معطوبة بالمنصة. بالرجوع لـ ImgBB، اختر من قائمة Embed codes الخيار: Direct links.",
      test_validating: "جارٍ فحص الرابط ومحاولة تحميل الصورة...",
      test_success: "✅ الرابط مباشر وسليم 100%! تم تحميل الصورة بنجاح وجاهزة للاستخدام في منصة عافية تُزهر.",
      test_failed: "❌ تعذر تحميل الصورة من هذا الرابط. تأكد أن الرابط مباشر وليس محجوبًا أو منتهي الصلاحية.",

      // Footer
      footer_brand: "منصة عافية تُزهِـر • Blooming Wellness",
      footer_copy: "دليل المستخدم الإلكتروني الشامل والمستقل | صُمم لدعم ونشر المعرفة الصحية المدرسية وتعزيز عافية الجميع.",
      footer_link_platform: "الموقع الرسمي للمبادرة ↗",
      footer_link_top: "العودة للبداية",
      footer_link_faq: "الأسئلة الشائعة"
    },

    en: {
      page_title: "Afiya Tazhar User Guide | Blooming Wellness Platform",
      page_meta_desc: "Comprehensive standalone electronic user guide for the Afiya Tazhar (Blooming Wellness) platform for Main Admin, Supervisors, and Visitors.",
      brand_title: "Afiya Tazhar Guide",
      brand_badge: "Official User Guide",
      brand_subtitle: "Blooming Wellness • Admin & User Manual",
      search_placeholder: "Search topics in guide...",
      search_modal_placeholder: "Search: Direct image link, Google login, supervisors...",
      btn_visit_platform: "Visit Platform",
      btn_print: "Print / PDF",
      btn_quick_images: "Direct Image Links Guide",
      btn_quick_faq: "Troubleshooting & FAQs",
      hero_tag: "Official Standalone User Manual",
      hero_title: "Welcome to Afiya Tazhar User Guide",
      hero_desc: "Your comprehensive step-by-step guide to exploring the platform, managing health content, and utilizing all services with ease for administrators, supervisors, and visitors.",

      // Sidebar Categories & Links
      cat_overview: "Overview & Welcome",
      nav_intro: "Welcome to the Guide",
      nav_about: "About Blooming Wellness",
      nav_roles_matrix: "Permissions Matrix",

      cat_admin: "Main Administrator Guide",
      badge_admin: "Admin",
      nav_admin_login: "Google Sign-In",
      nav_admin_dashboard: "Admin Dashboard & KPIs",
      nav_admin_settings: "Site Settings & Logos",
      nav_admin_broadcasts: "Morning Radio Broadcasts",
      nav_admin_lectures: "Awareness Lectures",
      nav_admin_interviews: "Dialogue Interviews",
      nav_admin_surveys: "Surveys & Impact Metrics",
      nav_admin_events: "Activities & Registrations",
      nav_admin_supervisors: "Supervisor Roles & Access",
      nav_admin_saving: "Saving & Verifying Changes",

      cat_supervisors: "Supervisors Guide",
      badge_supervisor: "Supervisor",
      nav_sup_login: "Login & Assigned Access",
      nav_sup_content: "Adding & Editing Content",
      nav_sup_media: "Inserting Photos & Links",
      nav_sup_limits: "Strict Permission Boundaries",

      cat_users: "User & Visitor Guide",
      badge_visitor: "Visitors",
      nav_user_browsing: "Browsing Platform Sections",
      nav_user_media: "Broadcasts, Lectures & Interviews",
      nav_user_participate: "Participating in Surveys",
      nav_user_devices: "Mobile & Desktop Experience",

      cat_images: "Images & Logos Guide",
      badge_essential: "Essential",
      nav_img_types: "What is a Direct Link?",
      nav_img_upload: "12-Step Upload Guide (ImgBB)",
      nav_img_tester: "Interactive Link Tester",
      nav_img_logos: "Updating Logos in Settings",
      nav_img_security: "Image Privacy & Security",

      cat_faq: "Troubleshooting & FAQs",
      nav_faq: "Frequently Asked Questions",
      pill_faq: "Instant Practical Fixes",

      sidebar_footer_title: "Afiya Tazhar User Guide",
      sidebar_footer_desc: "Built to empower educational health and well-being.",
      sidebar_footer_link: "Open Platform in New Tab ↗",

      // Portal Cards
      card_admin_title: "Main Administrator Guide",
      card_admin_desc: "Google sign-in, supervisor role assignment, site configuration, statistics, and global content management.",
      card_sup_title: "Supervisors Guide",
      card_sup_desc: "Publishing awareness materials, updating assigned sections, inserting media, and observing permission boundaries.",
      card_visitor_title: "Visitor & User Guide",
      card_visitor_desc: "Listening to school morning broadcasts, attending health lectures, viewing interviews, and event registration.",
      card_img_title: "Images & Direct Links Guide",
      card_img_desc: "Transforming images into pure direct links step-by-step using ImgBB, plus real-time interactive URL validation.",
      card_faq_title: "Troubleshooting & FAQs",
      card_faq_desc: "Actionable answers for missing admin panels, unauthorized access messages, broken images, and caching fixes.",
      card_learn_more: "Read Walkthrough",

      // Filter pills
      filter_all: "All",
      filter_admin: "Main Admin",
      filter_sup: "Supervisors",
      filter_vis: "Users & Visitors",
      filter_img: "Images & Logos",
      filter_faq: "Troubleshooting",
      search_esc: "to close",
      search_enter: "to navigate",

      // Lesson Navigation
      prev_lesson: "← Previous Lesson",
      next_lesson: "Next Lesson →",

      // Interactive Tester
      tester_main_title: "Interactive Direct Image Link Tester",
      tester_desc: "Test any image link before inserting it into the Afiya Tazhar admin dashboard to ensure it is a valid direct image file without errors:",
      tester_box_title: "Direct Link Testing Lab",
      tester_box_subtitle: "Paste the image URL you received and click 'Test Link' to inspect and preview it live:",
      tester_btn_run: "Test & Preview Link",
      tester_tip_t: "Quick Test Examples:",
      tester_tip_d: "Try typing an invalid webpage viewer link like https://imgbb.com/sample to see the helpful warning, or test a direct logo URL!",

      // Tester validation messages
      test_empty: "Please paste a URL into the input field first.",
      test_html_err: "⚠️ Warning: You pasted HTML code (such as <img> or <a>). Only the pure URL starting with https:// is accepted.",
      test_page_warn: "⚠️ Important Warning: This is a webpage viewer link, not a direct image URL! The image will appear broken. In ImgBB, select 'Direct links' from the Embed codes menu.",
      test_validating: "Validating link and testing image load...",
      test_success: "✅ 100% Direct & Valid Link! The image loaded successfully and is ready for use in Afiya Tazhar.",
      test_failed: "❌ Failed to load image from this URL. Please verify it is a direct image file and not blocked or expired.",

      // Footer
      footer_brand: "Afiya Tazhar Platform • Blooming Wellness",
      footer_copy: "Comprehensive Standalone Electronic User Guide | Designed to support school health education and promote flourishing wellness for all.",
      footer_link_platform: "Official Platform Website ↗",
      footer_link_top: "Back to Top",
      footer_link_faq: "Troubleshooting FAQs"
    }
  };

  /* ==========================================================================
     2. State Management & Initialization
     ========================================================================== */
  const state = {
    lang: localStorage.getItem('afiya_lang') || 'ar',
    theme: localStorage.getItem('afiya_theme') || 'light',
    searchFilter: 'all',
    activeSectionId: 'intro'
  };

  // DOM Elements
  const htmlRoot = document.documentElement;
  const langToggleBtn = document.getElementById('langToggleBtn');
  const langFlag = document.getElementById('langFlag');
  const langLabel = document.getElementById('langLabel');
  const themeToggleBtn = document.getElementById('themeToggleBtn');
  const themeIcon = document.getElementById('themeIcon');
  const readingProgressBar = document.getElementById('readingProgressBar');
  const mobileMenuBtn = document.getElementById('mobileMenuBtn');
  const appSidebar = document.getElementById('appSidebar');
  const sidebarBackdrop = document.getElementById('sidebarBackdrop');
  const backToTopBtn = document.getElementById('backToTopBtn');
  const printGuideBtn = document.getElementById('printGuideBtn');
  const toastNotice = document.getElementById('toastNotice');

  // Search Elements
  const openSearchBtn = document.getElementById('openSearchBtn');
  const searchModalBackdrop = document.getElementById('searchModalBackdrop');
  const searchModalInput = document.getElementById('searchModalInput');
  const closeSearchModalBtn = document.getElementById('closeSearchModalBtn');
  const searchResultsList = document.getElementById('searchResultsList');
  const searchPillsWrap = document.getElementById('searchPillsWrap');

  // Interactive Tester Elements
  const imageTesterInput = document.getElementById('imageTesterInput');
  const testImageBtn = document.getElementById('testImageBtn');
  const testerResultArea = document.getElementById('testerResultArea');
  const testerBadge = document.getElementById('testerBadge');
  const testerMessage = document.getElementById('testerMessage');
  const testerPreviewImg = document.getElementById('testerPreviewImg');

  // Pagination Elements
  const prevLessonBtn = document.getElementById('prevLessonBtn');
  const prevLessonTitle = document.getElementById('prevLessonTitle');
  const nextLessonBtn = document.getElementById('nextLessonBtn');
  const nextLessonTitle = document.getElementById('nextLessonTitle');

  // Ordered list of lesson sections for prev/next
  const lessonsOrder = [
    { id: 'intro', ar: 'مرحبًا بك في الدليل', en: 'Welcome to the Guide' },
    { id: 'about-platform', ar: 'عن منصة عافية تُزهر', en: 'About Blooming Wellness' },
    { id: 'roles-comparison', ar: 'مصفوفة الصلاحيات', en: 'Permissions Matrix' },
    { id: 'admin-login', ar: 'تسجيل دخول Google للمدير', en: 'Admin Google Sign-In' },
    { id: 'admin-dashboard', ar: 'لوحة الإدارة والإحصائيات', en: 'Admin Dashboard & KPIs' },
    { id: 'admin-settings', ar: 'إعدادات الموقع والشعارات', en: 'Site Settings & Logos' },
    { id: 'admin-broadcasts', ar: 'إدارة الإذاعات الصباحية', en: 'Morning Broadcasts' },
    { id: 'admin-lectures', ar: 'إدارة المحاضرات التوعوية', en: 'Awareness Lectures' },
    { id: 'admin-interviews', ar: 'إدارة المقابلات الحوارية', en: 'Dialogue Interviews' },
    { id: 'admin-surveys', ar: 'إدارة الاستبانات والقياس', en: 'Surveys & Impact' },
    { id: 'admin-events', ar: 'إدارة الفعاليات والتسجيلات', en: 'Events & Registrations' },
    { id: 'admin-supervisors', ar: 'إدارة وتوزيع المشرفين', en: 'Supervisors & Roles' },
    { id: 'admin-saving', ar: 'حفظ وتأكيد التغييرات', en: 'Saving & Publishing' },
    { id: 'supervisor-login', ar: 'دخول المشرف والصلاحيات', en: 'Supervisor Login & Access' },
    { id: 'supervisor-content', ar: 'إدارة محتوى المشرف', en: 'Managing Content' },
    { id: 'supervisor-limits', ar: 'حدود صلاحية المشرف', en: 'Supervisor Boundaries' },
    { id: 'user-browsing', ar: 'تصفح أقسام المنصة', en: 'Browsing Sections' },
    { id: 'user-media', ar: 'الإذاعات والمحاضرات', en: 'Broadcasts & Lectures' },
    { id: 'user-participation', ar: 'المشاركة والتسجيل', en: 'Participating & Registering' },
    { id: 'user-devices', ar: 'التصفح بالهاتف والكمبيوتر', en: 'Device Support' },
    { id: 'image-types', ar: 'ما هو الرابط المباشر؟', en: 'What is a Direct Link?' },
    { id: 'image-upload-steps', ar: 'الخطوات الـ 12 للرفع (ImgBB)', en: '12-Step Upload (ImgBB)' },
    { id: 'image-tester', ar: 'فحص واختبار الرابط المباشر', en: 'Direct Link Tester' },
    { id: 'image-logos', ar: 'تغيير الشعارات في الإعدادات', en: 'Logo Management' },
    { id: 'image-best-practices', ar: 'أمان وخصوصية الصور', en: 'Image Security & Privacy' },
    { id: 'faq-section', ar: 'حل المشكلات الشائعة', en: 'Troubleshooting & FAQs' }
  ];

  /* ==========================================================================
     3. Apply Language (AR / EN)
     ========================================================================== */
  function applyLanguage(lang) {
    state.lang = lang;
    localStorage.setItem('afiya_lang', lang);

    htmlRoot.setAttribute('lang', lang);
    htmlRoot.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');

    const dict = translations[lang] || translations.ar;

    // Document Title & Meta
    document.title = dict.page_title;
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.setAttribute('content', dict.page_meta_desc);

    // Language Toggle Button labels
    if (lang === 'ar') {
      langFlag.textContent = '🇬🇧';
      langLabel.textContent = 'English';
    } else {
      langFlag.textContent = '🇸🇦';
      langLabel.textContent = 'العربية';
    }

    // Translate all [data-i18n] nodes
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (dict[key]) {
        el.textContent = dict[key];
      }
    });

    // Translate Inputs placeholders
    if (searchModalInput) {
      searchModalInput.setAttribute('placeholder', dict.search_modal_placeholder);
    }

    updateLessonPagination();
  }

  /* ==========================================================================
     4. Apply Theme (Light / Dark)
     ========================================================================== */
  function applyTheme(theme) {
    state.theme = theme;
    localStorage.setItem('afiya_theme', theme);
    htmlRoot.setAttribute('data-theme', theme);

    if (themeIcon) {
      themeIcon.textContent = theme === 'dark' ? '☀️' : '🌙';
    }
  }

  /* ==========================================================================
     5. Reading Progress Bar & Scrollspy
     ========================================================================== */
  function handleScroll() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const docHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrollPercent = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;

    if (readingProgressBar) {
      readingProgressBar.style.width = Math.min(100, Math.max(0, scrollPercent)) + '%';
    }

    // Floating Back to Top Button visibility
    if (backToTopBtn) {
      if (scrollTop > 350) {
        backToTopBtn.classList.add('visible');
      } else {
        backToTopBtn.classList.remove('visible');
      }
    }

    // Scrollspy: update active link in sidebar
    updateActiveSidebarLink();
  }

  function updateActiveSidebarLink() {
    const articles = document.querySelectorAll('main.app-content > section, main.app-content > article');
    let currentId = 'intro';

    articles.forEach(article => {
      const rect = article.getBoundingClientRect();
      if (rect.top <= 140 && rect.bottom >= 140) {
        currentId = article.id;
      }
    });

    if (currentId !== state.activeSectionId) {
      state.activeSectionId = currentId;
      document.querySelectorAll('.sidebar-nav-link').forEach(link => {
        const href = link.getAttribute('href');
        if (href === '#' + currentId) {
          link.classList.add('active');
        } else {
          link.classList.remove('active');
        }
      });
      updateLessonPagination();
    }
  }

  /* ==========================================================================
     6. Next / Prev Lesson Navigation Logic
     ========================================================================== */
  function updateLessonPagination() {
    const currentIndex = lessonsOrder.findIndex(l => l.id === state.activeSectionId);
    const lang = state.lang;

    if (currentIndex <= 0) {
      // At first lesson
      prevLessonBtn.style.visibility = 'hidden';
      prevLessonBtn.dataset.target = '';
    } else {
      prevLessonBtn.style.visibility = 'visible';
      const prevLesson = lessonsOrder[currentIndex - 1];
      prevLessonBtn.dataset.target = prevLesson.id;
      prevLessonTitle.textContent = prevLesson[lang] || prevLesson.ar;
    }

    if (currentIndex === -1 || currentIndex >= lessonsOrder.length - 1) {
      // At last lesson
      nextLessonBtn.style.visibility = 'hidden';
      nextLessonBtn.dataset.target = '';
    } else {
      nextLessonBtn.style.visibility = 'visible';
      const nextLesson = lessonsOrder[currentIndex + 1];
      nextLessonBtn.dataset.target = nextLesson.id;
      nextLessonTitle.textContent = nextLesson[lang] || nextLesson.ar;
    }
  }

  function navigateToLesson(targetId) {
    if (!targetId) return;
    const targetEl = document.getElementById(targetId);
    if (targetEl) {
      targetEl.scrollIntoView({ behavior: 'smooth' });
      state.activeSectionId = targetId;
      updateLessonPagination();
    }
  }

  /* ==========================================================================
     7. Search Modal & Filtering
     ========================================================================== */
  // Build searchable index from DOM
  function buildSearchIndex() {
    const items = [];

    lessonsOrder.forEach(lesson => {
      const el = document.getElementById(lesson.id);
      if (!el) return;

      const titleEl = el.querySelector('.lesson-main-title, .hero-title');
      const title = titleEl ? titleEl.textContent.trim() : lesson.ar;
      const text = el.textContent.replace(/\s+/g, ' ').substring(0, 300);

      let category = 'visitor';
      if (lesson.id.startsWith('admin-')) category = 'admin';
      else if (lesson.id.startsWith('supervisor-')) category = 'supervisor';
      else if (lesson.id.startsWith('image-')) category = 'images';
      else if (lesson.id === 'faq-section') category = 'faq';

      items.push({
        id: lesson.id,
        title: title,
        snippet: text,
        category: category
      });
    });

    return items;
  }

  let searchIndex = [];

  function openSearchModal() {
    if (!searchIndex.length) {
      searchIndex = buildSearchIndex();
    }
    searchModalBackdrop.classList.add('open');
    searchModalInput.value = '';
    state.searchFilter = 'all';
    updateFilterPillsUI();
    renderSearchResults('');
    setTimeout(() => searchModalInput.focus(), 50);
  }

  function closeSearchModal() {
    searchModalBackdrop.classList.remove('open');
  }

  function updateFilterPillsUI() {
    document.querySelectorAll('.filter-pill').forEach(pill => {
      if (pill.getAttribute('data-filter') === state.searchFilter) {
        pill.classList.add('active');
      } else {
        pill.classList.remove('active');
      }
    });
  }

  function renderSearchResults(query) {
    const cleanQuery = query.trim().toLowerCase();
    searchResultsList.innerHTML = '';

    const filtered = searchIndex.filter(item => {
      const matchFilter = state.searchFilter === 'all' || item.category === state.searchFilter;
      const matchText = !cleanQuery || 
        item.title.toLowerCase().includes(cleanQuery) || 
        item.snippet.toLowerCase().includes(cleanQuery);
      return matchFilter && matchText;
    });

    if (filtered.length === 0) {
      const noResults = document.createElement('div');
      noResults.style.padding = '2rem 1rem';
      noResults.style.textAlign = 'center';
      noResults.style.color = 'var(--text-faint)';
      noResults.textContent = state.lang === 'ar' ? 'لم يتم العثور على نتائج مطابقة للبحث.' : 'No matching results found.';
      searchResultsList.appendChild(noResults);
      return;
    }

    filtered.forEach(item => {
      const div = document.createElement('div');
      div.className = 'search-result-item';
      div.setAttribute('data-target-id', item.id);

      div.innerHTML = `
        <div class="result-item-top">
          <span class="result-item-title">${escapeHTML(item.title)}</span>
          <span class="result-item-category">#${item.category}</span>
        </div>
        <div class="result-item-snippet">${escapeHTML(item.snippet.slice(0, 110))}...</div>
      `;

      div.addEventListener('click', () => {
        closeSearchModal();
        navigateToLesson(item.id);
      });

      searchResultsList.appendChild(div);
    });
  }

  function escapeHTML(str) {
    return str.replace(/[&<>'"]/g, 
      tag => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;' }[tag] || tag)
    );
  }

  /* ==========================================================================
     8. Interactive Direct Image Link Tester
     ========================================================================== */
  function testDirectImageUrl() {
    const rawUrl = (imageTesterInput.value || '').trim();
    const dict = translations[state.lang] || translations.ar;

    testerResultArea.style.display = 'block';
    testerBadge.className = 'tester-feedback-badge';
    testerPreviewImg.style.display = 'none';

    if (!rawUrl) {
      testerBadge.classList.add('feedback-warning');
      testerBadge.textContent = '⚠️ ' + (state.lang === 'ar' ? 'تنبيه' : 'Warning');
      testerMessage.textContent = dict.test_empty;
      return;
    }

    // Check for HTML code tags
    if (rawUrl.includes('<img') || rawUrl.includes('<a') || rawUrl.includes('src=')) {
      testerBadge.classList.add('feedback-error');
      testerBadge.textContent = '❌ ' + (state.lang === 'ar' ? 'خطأ كود' : 'Code Error');
      testerMessage.textContent = dict.test_html_err;
      return;
    }

    // Check for ImgBB webpage viewer links (e.g. imgbb.com/xyz or ibb.co/xyz without i.ibb.co)
    const isImgbbPage = (rawUrl.includes('imgbb.com/') || rawUrl.includes('ibb.co/')) && !rawUrl.includes('i.ibb.co/');
    if (isImgbbPage) {
      testerBadge.classList.add('feedback-warning');
      testerBadge.textContent = '⚠️ ' + (state.lang === 'ar' ? 'رابط صفحة وليس صورة' : 'Viewer Page Link');
      testerMessage.textContent = dict.test_page_warn;
      return;
    }

    // Proceed to live test image loading via in-memory Image object
    testerBadge.className = 'tester-feedback-badge feedback-warning';
    testerBadge.textContent = '⏳ ' + (state.lang === 'ar' ? 'جارٍ الفحص...' : 'Checking...');
    testerMessage.textContent = dict.test_validating;

    const testImg = new Image();
    testImg.onload = function () {
      testerBadge.className = 'tester-feedback-badge feedback-valid';
      testerBadge.textContent = '✅ ' + (state.lang === 'ar' ? 'رابط مباشر سليم 100%' : '100% Direct Image Link');
      testerMessage.textContent = dict.test_success;
      testerPreviewImg.src = rawUrl;
      testerPreviewImg.style.display = 'block';
    };

    testImg.onerror = function () {
      testerBadge.className = 'tester-feedback-badge feedback-error';
      testerBadge.textContent = '❌ ' + (state.lang === 'ar' ? 'فشل تحميل الصورة' : 'Failed to Load');
      testerMessage.textContent = dict.test_failed;
      testerPreviewImg.style.display = 'none';
    };

    testImg.src = rawUrl;
  }

  /* ==========================================================================
     9. Accordions (FAQ section)
     ========================================================================== */
  function setupFAQAccordions() {
    const faqItems = document.querySelectorAll('.faq-item');
    faqItems.forEach(item => {
      const trigger = item.querySelector('.faq-trigger');
      if (!trigger) return;

      trigger.addEventListener('click', () => {
        const isOpen = item.classList.contains('open');
        // Close other FAQs
        faqItems.forEach(other => {
          if (other !== item) {
            other.classList.remove('open');
            const otherBtn = other.querySelector('.faq-trigger');
            if (otherBtn) otherBtn.setAttribute('aria-expanded', 'false');
          }
        });

        if (isOpen) {
          item.classList.remove('open');
          trigger.setAttribute('aria-expanded', 'false');
        } else {
          item.classList.add('open');
          trigger.setAttribute('aria-expanded', 'true');
        }
      });
    });
  }

  /* ==========================================================================
     10. Toast Notification Helper
     ========================================================================== */
  let toastTimer = null;
  function showToast(msg) {
    if (!toastNotice) return;
    toastNotice.textContent = msg;
    toastNotice.classList.add('show');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => {
      toastNotice.classList.remove('show');
    }, 2800);
  }

  /* ==========================================================================
     11. Event Listeners Setup
     ========================================================================== */
  function setupEventListeners() {
    // Window Scroll for reading progress bar and scrollspy
    window.addEventListener('scroll', handleScroll, { passive: true });

    // Language Toggle
    if (langToggleBtn) {
      langToggleBtn.addEventListener('click', () => {
        const nextLang = state.lang === 'ar' ? 'en' : 'ar';
        applyLanguage(nextLang);
        showToast(nextLang === 'ar' ? 'تم تحويل اللغة إلى العربية' : 'Switched to English');
      });
    }

    // Theme Toggle
    if (themeToggleBtn) {
      themeToggleBtn.addEventListener('click', () => {
        const nextTheme = state.theme === 'dark' ? 'light' : 'dark';
        applyTheme(nextTheme);
        showToast(nextTheme === 'dark' ? (state.lang === 'ar' ? 'تم تفعيل الوضع الداكن' : 'Dark Mode Enabled') : (state.lang === 'ar' ? 'تم تفعيل الوضع الفاتح' : 'Light Mode Enabled'));
      });
    }

    // Mobile Sidebar Toggle
    if (mobileMenuBtn && appSidebar && sidebarBackdrop) {
      mobileMenuBtn.addEventListener('click', () => {
        appSidebar.classList.toggle('open');
        sidebarBackdrop.classList.toggle('open');
      });

      sidebarBackdrop.addEventListener('click', () => {
        appSidebar.classList.remove('open');
        sidebarBackdrop.classList.remove('open');
      });

      // Close mobile sidebar on link click
      appSidebar.querySelectorAll('.sidebar-nav-link').forEach(link => {
        link.addEventListener('click', () => {
          if (window.innerWidth <= 1024) {
            appSidebar.classList.remove('open');
            sidebarBackdrop.classList.remove('open');
          }
        });
      });
    }

    // Back to Top Button
    if (backToTopBtn) {
      backToTopBtn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      });
    }

    // Print Button
    if (printGuideBtn) {
      printGuideBtn.addEventListener('click', () => {
        window.print();
      });
    }

    // Next / Prev Buttons
    if (prevLessonBtn) {
      prevLessonBtn.addEventListener('click', () => {
        navigateToLesson(prevLessonBtn.dataset.target);
      });
    }
    if (nextLessonBtn) {
      nextLessonBtn.addEventListener('click', () => {
        navigateToLesson(nextLessonBtn.dataset.target);
      });
    }

    // Search Trigger & Modal
    if (openSearchBtn) {
      openSearchBtn.addEventListener('click', openSearchModal);
    }
    if (closeSearchModalBtn) {
      closeSearchModalBtn.addEventListener('click', closeSearchModal);
    }
    if (searchModalBackdrop) {
      searchModalBackdrop.addEventListener('click', (e) => {
        if (e.target === searchModalBackdrop) closeSearchModal();
      });
    }

    // Keyboard Shortcuts (Ctrl+K to open search, Escape to close)
    document.addEventListener('keydown', (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        openSearchModal();
      } else if (e.key === 'Escape' && searchModalBackdrop.classList.contains('open')) {
        closeSearchModal();
      }
    });

    // Search Input Typing
    if (searchModalInput) {
      searchModalInput.addEventListener('input', (e) => {
        renderSearchResults(e.target.value);
      });
    }

    // Search Category Pills
    if (searchPillsWrap) {
      searchPillsWrap.addEventListener('click', (e) => {
        const btn = e.target.closest('.filter-pill');
        if (!btn) return;
        state.searchFilter = btn.getAttribute('data-filter') || 'all';
        updateFilterPillsUI();
        renderSearchResults(searchModalInput.value || '');
      });
    }

    // Interactive Image Tester
    if (testImageBtn) {
      testImageBtn.addEventListener('click', testDirectImageUrl);
    }
    if (imageTesterInput) {
      imageTesterInput.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
          e.preventDefault();
          testDirectImageUrl();
        }
      });
    }
  }

  /* ==========================================================================
     12. Bootstrapping on DOMContentLoaded
     ========================================================================== */
  document.addEventListener('DOMContentLoaded', () => {
    applyTheme(state.theme);
    applyLanguage(state.lang);
    setupFAQAccordions();
    setupEventListeners();
    handleScroll();
  });

})();
