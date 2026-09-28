const app = Vue.createApp({
  data() {
    return {
      menuOpen: false,
      navItems: [
        { text: "Home", href: "#home" },
        { text: "About Me", href: "#aboutMe" },
        { text: "Skills", href: "#skills" },
        { text: "Projects", href: "#projects" },
        { text: "Contact", href: "#contact" }
      ],

      // ABOUT ME
      aboutMe: {
        intro: "Graduated in Computer Engineering from TED University in 2024. Completed a one-year experience as a Back-End Developer at Türk Telekom. Currently working as a Software Test Engineer at Innova Bilişim.",
        vision: "To become a trusted software engineer who creates scalable and impactful solutions that make technology feel effortless.",
        mission: "To grow every day as a developer by solving real problems with clean code, curiosity, and a passion for learning."
      },

      // SKILLS
      skills: [
        {
          title: "Front-End",
          items: [
            { name: "HTML", level: "Intermediate" },
            { name: "CSS", level: "Intermediate" },
            { name: "JavaScript", level: "Beginner" },
            { name: "Vue.js", level: "Beginner" }
          ]
        },
        {
          title: "Back-End",
          items: [
            { name: "Java", level: "Intermediate" },
            { name: "SQL", level: "Intermediate" },
            { name: "C", level: "Beginner" },
            { name: "Python", level: "Beginner" }
          ]
        },
        {
          title: "Testing",
          items: [
            { name: "JUnit", level: "Intermediate" },
            { name: "TestNG", level: "Intermediate" },
            { name: "Selenium", level: "Intermediate" },
            { name: "SOAP UI", level: "Intermediate" },
            { name: "Playwright", level: "Beginner" },
            { name: "CodeceptJS", level: "Beginner" }
          ]
        },
        {
          title: "Languages",
          items: [
            { name: "Turkish", level: "Native" },
            { name: "English", level: "C1" },
            { name: "Italian", level: "A1" }
          ]
        }
      ],

      // PROJECTS
      projects: [
        {
          id: 1,
          title: "Portfolio Website",
          description: "A responsive personal portfolio website built with Vue.js, featuring dark mode, smooth animations, and contact form integration.",
          technologies: ["Vue.js", "HTML", "CSS", "JavaScript"],
          image: "images/webLogo.gif",
          github: "https://github.com/erenkangal/erenkangal.github.io",
          live: "https://erenkangal.github.io",
          featured: true,
          difficulty: "Intermediate",
          completionDate: "2024"
        },
        {
          id: 2,
          title: "Python Projects",
          description: "Collection of Python applications including data structures, algorithms, and network programming implementations.",
          technologies: ["Python", "TCP/UDP", "Data Structures", "Algorithms", "Image Processing"],
          image: "images/logo.png",
          github: "https://github.com/erenkangal/TCPsocketProgrammnig",
          githubName: "TCP Socket",
          github2: "https://github.com/erenkangal/UDPsocketProgramming",
          github2Name: "UDP Socket",
          github3: "https://github.com/erenkangal/erosion",
          github3Name: "Erosion",
          github4: "https://github.com/erenkangal/psnrMatlab",
          github4Name: "PSNR Matlab",
        },
        {
          id: 4,
          title: "Test Automation Projects",
          description: " Test Automation Projects with JUnit, TestNG, Selenium, Playwright, CodeceptJS",
          technologies: ["Java", "JUnit", "TestNG", "Selenium", "Playwright", "CodeceptJS"],
          image: "images/logo.png",
          github: "https://github.com/erenkangal/BookingTestWithSelenium",
          githubName: "Booking Test w/Selenium",
          github2: "https://github.com/erenkangal/BookingTestWithCodeceptJS",
          github2Name: "Booking Test w/CodeceptJS",
          github3: "https://github.com/erenkangal/integrationTesting",
          github3Name: "Complete Project Testing with Java",
        }
      ],

      // SOCIAL MEDIA
      social: {
        linkedin: "https://www.linkedin.com/in/eren-kangal-b00aab1b4/",
        instagram: "https://www.instagram.com/ekangal1/",
        twitter: "https://twitter.com/ekangal0",
        github: "https://github.com/erenkangal"
      },

      // CONTACT FORM
      form: {
        name: "",
        email: "",
        message: ""
      },
      formStatus: {
        submitted: false,
        loading: false,
        error: null
      },

      // THEME
      isDarkMode: false,

      //go-top button
      showButton: false,
      
      // PROJECT FILTERS
      projectFilters: {
        search: "",
        technology: "all",
        difficulty: "all"
      },
      
      // ANIMATION STATES
      animations: {
        typing: false,
        particles: false
      }
    };
  },

  computed: {
    filteredProjects() {
      return this.projects.filter(project => {
        const matchesSearch = project.title.toLowerCase().includes(this.projectFilters.search.toLowerCase()) ||
                             project.description.toLowerCase().includes(this.projectFilters.search.toLowerCase());
        const matchesTechnology = this.projectFilters.technology === "all" || 
                                 project.technologies.includes(this.projectFilters.technology);
        const matchesDifficulty = this.projectFilters.difficulty === "all" || 
                                 project.difficulty === this.projectFilters.difficulty;
        
        return matchesSearch && matchesTechnology && matchesDifficulty;
      });
    },
    
    availableTechnologies() {
      const allTechs = this.projects.flatMap(project => project.technologies);
      return [...new Set(allTechs)];
    }
  },

  methods: {
    async submitForm(event) {
      event.preventDefault();
      
      this.formStatus.loading = true;
      this.formStatus.error = null;
      
      try {
        // Simulate form submission (replace with actual form handling)
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        this.formStatus.submitted = true;
        this.form.name = "";
        this.form.email = "";
        this.form.message = "";
        
        // Reset success message after 5 seconds
        setTimeout(() => {
          this.formStatus.submitted = false;
        }, 5000);
        
      } catch (error) {
        this.formStatus.error = "Failed to send message. Please try again.";
      } finally {
        this.formStatus.loading = false;
      }
    },

    toggleDarkMode() {
      this.isDarkMode = !this.isDarkMode;
      document.body.classList.toggle("dark-mode", this.isDarkMode);
    },

    handleScroll() {
      this.showButton = window.scrollY > 100;
    },
    
    // PROJECT INTERACTIONS
    filterProjects() {
      // Trigger re-render of filtered projects
      this.$nextTick(() => {
        const projectCards = document.querySelectorAll('.projectCard');
        projectCards.forEach((card, index) => {
          card.style.animationDelay = `${index * 0.1}s`;
          card.classList.add('animate-in');
        });
      });
    },
    
    clearFilters() {
      this.projectFilters.search = "";
      this.projectFilters.technology = "all";
      this.projectFilters.difficulty = "all";
    },
    
    // ANIMATION METHODS
    startTypingAnimation() {
      this.animations.typing = true;
      setTimeout(() => {
        this.animations.typing = false;
      }, 3000);
    },
    
    // UTILITY METHODS
    copyToClipboard(text) {
      navigator.clipboard.writeText(text).then(() => {
        // Show success message
        this.showNotification('Copied to clipboard!', 'success');
      });
    },
    
    showNotification(message, type = 'info') {
      const notification = document.createElement('div');
      notification.className = `notification notification-${type}`;
      notification.textContent = message;
      document.body.appendChild(notification);
      
      setTimeout(() => {
        notification.classList.add('show');
      }, 100);
      
      setTimeout(() => {
        notification.classList.remove('show');
        setTimeout(() => {
          document.body.removeChild(notification);
        }, 300);
      }, 3000);
    }
  },

  mounted() {
    const savedTheme = localStorage.getItem("darkMode");
    if (savedTheme === "true") {
      this.isDarkMode = true;
      document.body.classList.add("dark-mode");
    }
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1
    });

    const elements = document.querySelectorAll(".animate-on-scroll");
    elements.forEach(el => observer.observe(el));

    window.addEventListener("scroll",this.handleScroll);
  },

  watch: {
    isDarkMode(newVal) {
      localStorage.setItem("darkMode", newVal);
    }
  }
});

app.mount("#app");