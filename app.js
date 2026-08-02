// Application Script for Eng. Tarig Abdalla Saeed Adam Portfolio

document.addEventListener('DOMContentLoaded', () => {
    // Current Year Setup
    document.getElementById('currentYear').textContent = new Date().getFullYear();

    // Language State & Translation Dictionary
    let currentLang = localStorage.getItem('tarig_portfolio_lang') || 'ar';

    const translations = {
        ar: {
            brand_name: "م. طارق عبدالله سعيد",
            brand_sub: "علوم حاسوب | جامعة دنقلا",
            nav_home: "الرئيسية",
            nav_about: "عني",
            nav_experience: "الخبرات",
            nav_skills: "المهارات",
            nav_services: "الخدمات",
            nav_certifications: "الشهادات",
            nav_estimator: "حاسبة الخدمات",
            nav_contact: "تواصل معي",
            hero_status: "متاح للعمل والانضمام للمشاريع والخدمات الاستشارية",
            hero_greeting: "مرحباً بكم، أنا",
            hero_name: "الباشمهندس طارق عبدالله سعيد آدم",
            hero_prefix: "متخصص في: ",
            hero_desc: "خريج علوم حاسوب (مرتبة الشرف) من جامعة دنقلا. صاحب خبرة متكاملة في الدعم الفني، إدارة المعامل البرمجية، تطوير المواقع وقواعد البيانات، الدعم المالي والإداري، وتحليل البيانات الإحصائية وتقارير SPSS.",
            btn_whatsapp: "تواصل عبر الواتساب",
            btn_download_cv: "عرض وتنزيل السيرة الذاتية",
            h1_val: "جامعة دنقلا",
            h1_lbl: "بكالوريوس علوم الحاسوب (مرتبة الشرف)",
            h2_val: "+3,000,000 ج.س",
            h2_lbl: "حصيلة تمويل وتبرعات كاهاتين",
            h3_val: "إدارة المعامل",
            h3_lbl: "دعم وصيانة أجهزة الكلية",
            badge_honours: "مرتبة الشرف",
            badge_honours_sub: "دفعة 2025",
            badge_skills: "تطوير ودعم تقني",
            badge_skills_sub: "IT & Software",
            about_subtitle: "تعرّف عليّ",
            about_title: "الملف الشخصي والمهني",
            about_summary_head: "نبذة عن المهندس طارق",
            about_p1: "خريج طموح ومتميز من كلية علوم الحاسوب والتنمية البشرية بجامعة دنقلا بدرجة البكالوريوس مع مرتبة الشرف. أمتلك خبرة عملية متنوعة تجمع بين الصيانة الفنية ومعامل الحاسوب، إدارة المكاتب والعمليات المالية، تحليل البيانات الإحصائية والبرمجة.",
            about_p2: "أتطلع دائماً لتحقيق التميز في بيئات العمل التقنية والإدارية، وتطبيق مهاراتي في حل المشكلات، تحسين كفاءة الأنظمة، ودعم الفرق التنفيذية والأكاديمية بكل شغف ومسؤولية.",
            lbl_email: "البريد الإلكتروني",
            lbl_phone: "الهاتف / الواتساب",
            lbl_location: "الموقع الحالي",
            val_location: "دنقلا، الولاية الشمالية، السودان",
            lbl_edu: "المؤهل الأكاديمي",
            val_edu: "بكالوريوس علوم الحاسوب (مرتبة الشرف)",
            personal_skills_title: "المهارات الشخصية والقيادية",
            ps_leadership: "القيادة وإدارة الفرق",
            ps_leadership_desc: "توجيه العمليات وتنسيق الجهود لتحقيق الأهداف الجماعية.",
            ps_communication: "التواصل والتفاعل الاجتماعي",
            ps_communication_desc: "تواصل فعال ونقل المعلومات بوضوح مع كافة المستويات.",
            ps_problem: "حل المشكلات البرمجية والتطبيقية",
            ps_problem_desc: "تحليل الأخطاء التقنية وإيجاد حلول سريعة ومستدامة.",
            ps_time: "إدارة الوقت والتكيف",
            ps_time_desc: "العمل تحت الضغط والالتزام بالمواعيد النهائية بدقة عالية.",
            lang_title: "اللغات",
            lang_ar: "العربية (اللغة الأم)",
            lang_en: "الإنجليزية (مستوى متوسط)",
            exp_subtitle: "مسيرتي العملية",
            exp_title: "الخبرات المهنية والتطوعية",
            exp1_role: "فني معامل حاسوب (Laboratory Technician)",
            exp1_company: "كلية علوم الحاسوب والتنمية البشرية - جامعة دنقلا",
            exp1_date: "2025 – 2026",
            exp1_b1: "تقديم الدعم الفني المباشر لمعامل الحواسيب وضمان جاهزيتها المستمرة للجلسات العملية.",
            exp1_b2: "تركيب وصيانة المكونات المادية (Hardware) والأنظمة والبرمجيات (Software).",
            exp1_b3: "مساعدة المحاضرين والطلاب أثناء المحاضرات العملية والتطبيقات البرمجية.",
            exp1_b4: "تشخيص واستكشاف الأعطال البرمجية والشبكية وحلها بكفاءة وسرعة.",
            exp2_role: "سكرتير المكتب المالي (Finance Office Secretary)",
            exp2_company: "منظمة كاهاتين الطوعية (Kahateen Voluntary Organization)",
            exp2_date: "2021 – 2023",
            exp2_b1: "إدارة الأرشيف والتسجيل والسجلات المالية والإدارية بمهنية ودقة تامة.",
            exp2_b2: "إعداد وتقييم التقارير الدورية باستخدام حزمة Microsoft Office.",
            exp2_b3: "تقديم الدعم المباشر للمستفيدين وتنسيق العمليات اليومية للمكتب المالي.",
            exp2_b4: "المساهمة البارزة في جمع تبرعات وحملات تمويل تجاوزت 3,000,000 جنيه سوداني.",
            exp2_b5: "الالتزام الكامل بالسرية والدقة الشديدة في المعاملات المالية والمستندية.",
            skills_subtitle: "التأهيل التقني",
            skills_title: "المهارات التقنية والبرمجية",
            tech_skills_head: "المهارات البرمجية وتطوير الويب",
            data_skills_head: "قواعد البيانات وتحليل البيانات",
            tools_head: "الأدوات والكفايات الأساسية (Core Competencies)",
            services_subtitle: "ماذا أقدم؟",
            services_title: "الخدمات المهنية والتقنية",
            srv1_title: "الدعم الفني وتقنية المعلومات",
            srv1_desc: "تركيب وصيانة العتاد والبرمجيات، تشخيص الأعطال، تجهيز وإدارة معامل الحواسيب للمؤسسات والمراكز التعليمية.",
            srv2_title: "تطوير المواقع وقواعد البيانات",
            srv2_desc: "تصميم وبناء مواقع ويب متجاوبة وجذابة باستخدام HTML, CSS, JS, PHP وتصميم قواعد بيانات متكاملة باستخدام MySQL و MS Access.",
            srv3_title: "تحليل البيانات وإعداد التقارير",
            srv3_desc: "معالجة البيانات الإحصائية والمالية باستخدام SPSS و Excel وإعداد تقارير شاملة تساند في اتخاذ القرارات الاستراتيجية.",
            srv4_title: "الدعم الإداري وإدارة المشاريع",
            srv4_desc: "إدارة السجلات المالية والأرشيف، إعداد المستندات والتقارير الإدارية، وتنسيق العمليات الميدانية والدعم اللوجستي للمؤسسات.",
            srv_request: "طلب الخدمة",
            cert_subtitle: "التدريب والاعتمادات",
            cert_title: "الشهادات والدورات التدريبية",
            cert1_name: "شهادة خبرة – فني معامل حاسوب",
            cert1_issuer: "جامعة دنقلا - كلية علوم الحاسوب والتنمية البشرية",
            cert2_name: "شهادة خبرة – سكرتير المكتب المالي",
            cert2_issuer: "منظمة كاهاتين الطوعية",
            cert3_name: "تدريب المدربين (TOT - Training of Trainers)",
            cert3_issuer: "تأهيل واحتراف المهارات التدريبية",
            cert4_name: "ريادة الأعمال الاجتماعية (Social Entrepreneurship)",
            cert4_issuer: "بناء المشاريع المستدامة ذات الأثر المجتمعي",
            cert5_name: "الإبداع والتميز (Creativity & Excellence)",
            cert5_issuer: "التفكير الابتكاري وتطوير الأداء المالي والمهني",
            cert6_name: "مهارات التواصل الاجتماعي (Social Communication Skills)",
            cert6_issuer: "التواصل الفعال وإدارة العلاقات والإقناع",
            est_subtitle: "أداة تفاعلية",
            est_title: "حاسبة تقدير الخدمات وتجهيز الطلب",
            est_intro: "حدد الخدمات التقنية والإدارية المطلوبة للحصول على تقدير فوري ومباشر لنطاق العمل وإرساله مباشرة إلى المهندس طارق عبر الواتساب:",
            opt1_title: "تطوير موقع ويب (Web Development)",
            opt1_desc: "تصميم موقع حديث مع لوحة تحكم وقواعد بيانات",
            opt2_title: "تحليل بيانات SPSS و Excel",
            opt2_desc: "تفريع الاستبيانات والتحليل الإحصائي وتوليد الجداول",
            opt3_title: "صيانة ودعم فني IT & Labs",
            opt3_desc: "تجهيز المعامل والتثبيت والصيانة الوقائية والشبكية",
            opt4_title: "الدعم الإداري والأرشيف المالي",
            opt4_desc: "أرشفة المستندات وإعداد تقارير Microsoft Office",
            est_selected_count: "الخدمات المختارة: ",
            btn_send_estimate: "إرسال تفاصيل الطلب عبر الواتساب",
            contact_subtitle: "يسعدني تواصلكم",
            contact_title: "معلومات التواصل والاستفسارات",
            c_wa_head: "واتساب / هاتف",
            c_email_head: "البريد الإلكتروني",
            c_loc_head: "الموقع الجغرافي",
            c_loc_val: "دنقلا، الولاية الشمالية، السودان",
            c_univ_head: "الجامعة والكلية",
            c_univ_val: "جامعة دنقلا - كلية علوم الحاسوب والتنمية البشرية",
            form_title: "أرسل رسالة مباشرة",
            form_name: "الاسم الكامل",
            form_email: "البريد الإلكتروني / رقم الهاتف",
            form_subject: "موضوع الرسالة",
            form_msg: "نص الرسالة",
            form_submit: "إرسال الرسالة",
            footer_tagline: "خريج علوم حاسوب (مرتبة الشرف) - جامعة دنقلا | أخصائي IT ومطور ويب ومحلل بيانات",
            modal_cv_title: "السيرة الذاتية - م. طارق عبدالله سعيد"
        },
        en: {
            brand_name: "Eng. Tarig Saeed",
            brand_sub: "Computer Science | Dongola Univ",
            nav_home: "Home",
            nav_about: "About",
            nav_experience: "Experience",
            nav_skills: "Skills",
            nav_services: "Services",
            nav_certifications: "Certifications",
            nav_estimator: "Estimator",
            nav_contact: "Contact",
            hero_status: "Available for Hire, Projects & IT Consulting",
            hero_greeting: "Welcome, I am",
            hero_name: "Eng. Tarig Abdalla Saeed Adam",
            hero_prefix: "Specialized in: ",
            hero_desc: "Computer Science Honours graduate from the University of Dongola. Experienced in IT support, lab management, web & database development, financial administration, and SPSS data analysis.",
            btn_whatsapp: "WhatsApp Contact",
            btn_download_cv: "View & Download Resume",
            h1_val: "Dongola University",
            h1_lbl: "B.Sc. Computer Science (Honours)",
            h2_val: "+SDG 3,000,000",
            h2_lbl: "Kahateen Fundraising Impact",
            h3_val: "Lab Support",
            h3_lbl: "University IT Infrastructure & Labs",
            badge_honours: "B.Sc. Honours",
            badge_honours_sub: "Class of 2025",
            badge_skills: "IT & Software",
            badge_skills_sub: "Technical Specialist",
            about_subtitle: "Get to Know Me",
            about_title: "Professional Profile & Bio",
            about_summary_head: "About Eng. Tarig",
            about_p1: "Highly motivated Computer Science graduate with honours from the University of Dongola. Experienced in IT support, laboratory support, web development, administration, finance support, data analysis, report writing, customer service and project coordination.",
            about_p2: "Striving for excellence in tech and administrative environments, applying problem-solving skills to enhance system efficiency and support executive and academic teams with dedication.",
            lbl_email: "Email Address",
            lbl_phone: "Phone / WhatsApp",
            lbl_location: "Location",
            val_location: "Dongola, Northern State, Sudan",
            lbl_edu: "Education",
            val_edu: "Bachelor of Computer Science (Honours)",
            personal_skills_title: "Personal & Soft Skills",
            ps_leadership: "Leadership",
            ps_leadership_desc: "Guiding operations & coordinating teamwork to achieve goals.",
            ps_communication: "Communication",
            ps_communication_desc: "Effective interpersonal & social communication across teams.",
            ps_problem: "Problem Solving",
            ps_problem_desc: "Analytical troubleshooting & sustainable tech solutions.",
            ps_time: "Time Management",
            ps_time_desc: "Working efficiently under pressure & meeting strict deadlines.",
            lang_title: "Languages",
            lang_ar: "Arabic (Native)",
            lang_en: "English (Intermediate)",
            exp_subtitle: "Career Journey",
            exp_title: "Professional & Volunteer Roles",
            exp1_role: "Laboratory Technician",
            exp1_company: "Faculty of CS & Human Dev, Univ of Dongola",
            exp1_date: "2025 – 2026",
            exp1_b1: "Technical support for computer laboratories.",
            exp1_b2: "Hardware and software installation and maintenance.",
            exp1_b3: "Support for lecturers and students during practical sessions.",
            exp1_b4: "Troubleshooting IT issues and maintaining laboratory readiness.",
            exp2_role: "Finance Office Secretary",
            exp2_company: "Kahateen Voluntary Organization",
            exp2_date: "2021 – 2023",
            exp2_b1: "Managed records and financial documentation.",
            exp2_b2: "Prepared reports using Microsoft Office.",
            exp2_b3: "Supported beneficiaries and daily office operations.",
            exp2_b4: "Contributed to fundraising exceeding SDG 3,000,000.",
            exp2_b5: "Maintained financial confidentiality and accuracy.",
            skills_subtitle: "Technical Qualifications",
            skills_title: "Technical & Programming Skills",
            tech_skills_head: "Programming & Web Development",
            data_skills_head: "Databases & Data Analytics",
            tools_head: "Core Competencies & Tools",
            services_subtitle: "What I Offer",
            services_title: "Professional Services",
            srv1_title: "IT Support & System Maintenance",
            srv1_desc: "Hardware & software setup, troubleshooting, and lab management for academic institutions & corporate offices.",
            srv2_title: "Web & Database Development",
            srv2_desc: "Building responsive websites using HTML, CSS, JS, PHP alongside robust MySQL & MS Access databases.",
            srv3_title: "Data Analysis & SPSS Reporting",
            srv3_desc: "Statistical & financial data processing using SPSS & Excel with actionable decision-support reporting.",
            srv4_title: "Admin & Project Support",
            srv4_desc: "Managing office documentation, financial archiving, Microsoft Office reporting, and field project coordination.",
            srv_request: "Request Service",
            cert_subtitle: "Qualifications & Workshops",
            cert_title: "Certifications & Training",
            cert1_name: "Experience Certificate – Laboratory Technician",
            cert1_issuer: "University of Dongola",
            cert2_name: "Experience Certificate – Kahateen Organization",
            cert2_issuer: "Kahateen Voluntary Organization",
            cert3_name: "Training of Trainers (TOT)",
            cert3_issuer: "Professional Trainer Qualification",
            cert4_name: "Social Entrepreneurship",
            cert4_issuer: "Community Impact & Sustainable Projects",
            cert5_name: "Creativity & Excellence",
            cert5_issuer: "Innovation & Professional Excellence",
            cert6_name: "Social Communication Skills",
            cert6_issuer: "Effective Communication & Interpersonal Skills",
            est_subtitle: "Interactive Tool",
            est_title: "Service Scope & Inquiry Estimator",
            est_intro: "Select your required technical/administrative services to generate an instant scope request and send directly to Eng. Tarig via WhatsApp:",
            opt1_title: "Web Development",
            opt1_desc: "Modern responsive web app & database integration",
            opt2_title: "SPSS & Excel Data Analysis",
            opt2_desc: "Survey data processing, statistical tests & charts",
            opt3_title: "IT Support & Computer Lab Setup",
            opt3_desc: "Hardware maintenance, OS installation & lab setup",
            opt4_title: "Financial & Admin Archiving",
            opt4_desc: "Office documentation & Microsoft Office reporting",
            est_selected_count: "Selected Services: ",
            btn_send_estimate: "Send Service Request via WhatsApp",
            contact_subtitle: "Get In Touch",
            contact_title: "Contact Information & Inquiries",
            c_wa_head: "WhatsApp / Phone",
            c_email_head: "Email Address",
            c_loc_head: "Location",
            c_loc_val: "Dongola, Northern State, Sudan",
            c_univ_head: "University & Faculty",
            c_univ_val: "University of Dongola - Faculty of CS",
            form_title: "Send a Direct Message",
            form_name: "Full Name",
            form_email: "Email or Phone",
            form_subject: "Subject",
            form_msg: "Message Details",
            form_submit: "Send Message",
            footer_tagline: "B.Sc. Computer Science (Honours) - Univ of Dongola | IT Specialist, Web Dev & Data Analyst",
            modal_cv_title: "Curriculum Vitae - Eng. Tarig Saeed"
        }
    };

    function applyLanguage(lang) {
        currentLang = lang;
        localStorage.setItem('tarig_portfolio_lang', lang);
        
        const htmlTag = document.documentElement;
        htmlTag.setAttribute('lang', lang);
        htmlTag.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');
        
        document.getElementById('langText').textContent = lang === 'ar' ? 'English' : 'العربية';
        
        // Translate all elements with data-i18n
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (translations[lang] && translations[lang][key]) {
                el.textContent = translations[lang][key];
            }
        });

        // Update Dynamic Typing Array according to active language
        restartTypingEffect();
    }

    // Initialize Language Toggle
    const langToggleBtn = document.getElementById('langToggle');
    langToggleBtn.addEventListener('click', () => {
        const nextLang = currentLang === 'ar' ? 'en' : 'ar';
        applyLanguage(nextLang);
    });

    // Theme Switcher (Dark / Light)
    let currentTheme = localStorage.getItem('tarig_portfolio_theme') || 'dark';
    const themeToggleBtn = document.getElementById('themeToggle');
    const themeIcon = themeToggleBtn.querySelector('i');

    function applyTheme(theme) {
        currentTheme = theme;
        localStorage.setItem('tarig_portfolio_theme', theme);
        document.documentElement.setAttribute('data-theme', theme);
        
        if (theme === 'light') {
            themeIcon.className = 'fa-solid fa-sun';
        } else {
            themeIcon.className = 'fa-solid fa-moon';
        }
    }

    applyTheme(currentTheme);

    themeToggleBtn.addEventListener('click', () => {
        applyTheme(currentTheme === 'dark' ? 'light' : 'dark');
    });

    // Mobile Navigation Toggle
    const mobileToggleBtn = document.getElementById('mobileToggle');
    const navMenu = document.getElementById('navMenu');

    mobileToggleBtn.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });

    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
            link.classList.add('active');
        });
    });

    // Dynamic Typing Effect
    const typingTexts = {
        ar: [
            'أخصائي تقنية معلومات (IT Specialist)',
            'مطور ويب وقواعد بيانات (Web Developer)',
            'محلل بيانات وتقارير SPSS (Data Analyst)',
            'دعم إداري ومالي ومشاريع (Admin Support Officer)'
        ],
        en: [
            'IT Specialist & Lab Admin',
            'Web & Database Developer',
            'Data Analyst (SPSS & Excel)',
            'Admin & Project Support Officer'
        ]
    };

    let typingIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typingTimeout = null;

    function typeEffect() {
        const textArray = typingTexts[currentLang] || typingTexts.ar;
        const currentText = textArray[typingIndex];
        const el = document.getElementById('dynamicTyping');
        
        if (!el) return;

        if (isDeleting) {
            el.textContent = currentText.substring(0, charIndex - 1);
            charIndex--;
        } else {
            el.textContent = currentText.substring(0, charIndex + 1);
            charIndex++;
        }

        let typeSpeed = isDeleting ? 40 : 80;

        if (!isDeleting && charIndex === currentText.length) {
            typeSpeed = 2000;
            isDeleting = true;
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            typingIndex = (typingIndex + 1) % textArray.length;
            typeSpeed = 400;
        }

        typingTimeout = setTimeout(typeEffect, typeSpeed);
    }

    function restartTypingEffect() {
        if (typingTimeout) clearTimeout(typingTimeout);
        typingIndex = 0;
        charIndex = 0;
        isDeleting = false;
        typeEffect();
    }

    // Interactive Service Estimator
    const checkInputs = document.querySelectorAll('.est-check');
    const selectedCountEl = document.getElementById('selectedCount');
    const sendEstimateBtn = document.getElementById('sendEstimateWhatsappBtn');

    function updateEstimator() {
        const selected = [];
        checkInputs.forEach(input => {
            if (input.checked) {
                selected.push(input.value);
            }
        });

        const count = selected.length;
        selectedCountEl.textContent = currentLang === 'ar' ? `${count} خدمات` : `${count} services`;

        if (count > 0) {
            sendEstimateBtn.removeAttribute('disabled');
        } else {
            sendEstimateBtn.setAttribute('disabled', 'true');
        }
    }

    checkInputs.forEach(input => {
        input.addEventListener('change', updateEstimator);
    });

    sendEstimateBtn.addEventListener('click', () => {
        const selected = [];
        checkInputs.forEach(input => {
            if (input.checked) {
                selected.push(input.value);
            }
        });

        if (selected.length === 0) return;

        const greeting = currentLang === 'ar' 
            ? 'مرحباً بالباشمهندس طارق عبدالله سعيد، أرغب في الاستفسار والطلب للخدمات التالية:' 
            : 'Hello Eng. Tarig Saeed, I would like to request the following services:';
        
        const textMsg = encodeURIComponent(`${greeting}\n\n- ` + selected.join('\n- '));
        window.open(`https://wa.me/249124966030?text=${textMsg}`, '_blank');
    });

    // Contact Form Handler
    const contactForm = document.getElementById('contactForm');
    const formFeedback = document.getElementById('formFeedback');

    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = document.getElementById('senderName').value;
        const contact = document.getElementById('senderEmail').value;
        const subject = document.getElementById('msgSubject').value;
        const message = document.getElementById('msgContent').value;

        const fullMsg = `الاسم: ${name}\nوسيلة التواصل: ${contact}\nالموضوع: ${subject}\nالتفاصيل: ${message}`;
        const waUrl = `https://wa.me/249124966030?text=${encodeURIComponent(fullMsg)}`;

        formFeedback.style.color = '#10b981';
        formFeedback.textContent = currentLang === 'ar'
            ? 'جاري توجيه الرسالة إلى واتساب المباشر للمهندس طارق...'
            : 'Redirecting message to Eng. Tarig via direct WhatsApp...';

        setTimeout(() => {
            window.open(waUrl, '_blank');
            contactForm.reset();
            formFeedback.textContent = '';
        }, 1000);
    });

    // Resume Modal Handler
    const cvModal = document.getElementById('cvModal');
    const downloadCvBtn = document.getElementById('downloadCvBtn');
    const closeCvModalBtn = document.getElementById('closeCvModal');
    const closeCvBtn = document.getElementById('closeCvBtn');
    const printCvBtn = document.getElementById('printCvBtn');

    function openCvModal() {
        cvModal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    function closeCvModal() {
        cvModal.classList.remove('active');
        document.body.style.overflow = 'auto';
    }

    downloadCvBtn.addEventListener('click', openCvModal);
    closeCvModalBtn.addEventListener('click', closeCvModal);
    closeCvBtn.addEventListener('click', closeCvModal);

    cvModal.addEventListener('click', (e) => {
        if (e.target === cvModal) closeCvModal();
    });

    printCvBtn.addEventListener('click', () => {
        const content = document.getElementById('cvPrintContent').innerHTML;
        const printWindow = window.open('', '', 'height=800,width=900');
        printWindow.document.write(`
            <html>
                <head>
                    <title>TARIG ABDALLA SAEED - CV</title>
                    <style>
                        body { font-family: Arial, sans-serif; padding: 2rem; color: #111; line-height: 1.6; }
                        h2 { text-align: center; margin-bottom: 5px; color: #000; }
                        .cv-sub { text-align: center; font-weight: bold; color: #1d4ed8; margin-bottom: 5px; }
                        .cv-contact-line { text-align: center; font-size: 0.9rem; color: #555; }
                        hr { margin: 15px 0; border: none; border-top: 1px solid #ccc; }
                        h3 { border-bottom: 2px solid #1d4ed8; padding-bottom: 3px; color: #1e40af; margin-top: 20px; }
                        ul { margin-left: 20px; }
                        li { margin-bottom: 4px; }
                    </style>
                </head>
                <body>
                    ${content}
                </body>
            </html>
        `);
        printWindow.document.close();
        printWindow.focus();
        setTimeout(() => {
            printWindow.print();
            printWindow.close();
        }, 500);
    });

    // Run Initial Setup
    applyLanguage(currentLang);
});
