// Theme toggle functionality
        function initTheme() {
            const theme = localStorage.getItem('lux-ai-theme') || 'light';
            document.documentElement.classList.toggle('dark', theme === 'dark');
        }

        function toggleTheme() {
            const isDark = document.documentElement.classList.contains('dark');
            const newTheme = isDark ? 'light' : 'dark';

            document.documentElement.classList.toggle('dark');
            localStorage.setItem('lux-ai-theme', newTheme);
        }

        // Mobile menu toggle
        function toggleMobileMenu() {
            const mobileMenu = document.getElementById('mobile-menu');
            mobileMenu.classList.toggle('active');
        }

        // Smooth scroll to section
        function scrollToSection(sectionId) {
            const element = document.getElementById(sectionId);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
                // Close mobile menu if open
                const mobileMenu = document.getElementById('mobile-menu');
                mobileMenu.classList.remove('active');
            }
        }

        // Discord bot invitation
        function inviteBot() {
            // Ganti URL ini dengan Discord bot invitation URL Anda
            const inviteUrl = "https://discord.com/oauth2/authorize?client_id=1322876904721748039";
            window.open(inviteUrl, "_blank");
        }

        // Initialize Lucide icons
        function initIcons() {
            if (typeof lucide !== 'undefined') {
                lucide.createIcons();
            }
        }

        // Event listeners
        document.addEventListener('DOMContentLoaded', function () {
            initTheme();
            initIcons();

            // Theme toggle buttons
            document.getElementById('theme-toggle').addEventListener('click', toggleTheme);
            document.getElementById('theme-toggle-mobile').addEventListener('click', toggleTheme);

            // Mobile menu button
            document.getElementById('mobile-menu-btn').addEventListener('click', toggleMobileMenu);

            // Close mobile menu when clicking outside
            document.addEventListener('click', function (e) {
                const mobileMenu = document.getElementById('mobile-menu');
                const menuBtn = document.getElementById('mobile-menu-btn');

                if (!mobileMenu.contains(e.target) && !menuBtn.contains(e.target)) {
                    mobileMenu.classList.remove('active');
                }
            });

            // Update icons after theme change
            const observer = new MutationObserver(function (mutations) {
                mutations.forEach(function (mutation) {
                    if (mutation.type === 'attributes' && mutation.attributeName === 'class') {
                        setTimeout(initIcons, 50);
                    }
                });
            });

            observer.observe(document.documentElement, {
                attributes: true,
                attributeFilter: ['class']
            });
        });

        // Tailwind config
        tailwind.config = {
            darkMode: 'class',
            theme: {
                extend: {
                    colors: {
                        discord: 'hsl(var(--discord))',
                        'google-blue': 'hsl(var(--google-blue))',
                        mint: 'hsl(var(--mint))',
                    }
                }
            }
        }