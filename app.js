const app = Vue.createApp({
  data() {
    return {
      menuOpen: false,
      cvDownloads: [
        {
          language: "tr",
          label: "Türkçe CV",
          path: "assets/GökalpErenKangalCV_Turkce.pdf"
        },
        {
          language: "en",
          label: "English CV/Resume",
          path: "assets/GökalpErenKangalResumeCV_en.pdf"
        }
      ],
      navItems: [
        { text: "Home", href: "#home" },
        { text: "About Me", href: "#aboutMe" },
        { text: "Skills", href: "#skills" },
        { text: "Projects", href: "#projects" },
        { text: "Contact", href: "#contact" }
      ],

      // ABOUT ME
      aboutMe: {
        intro: "I'm Eren, a Computer Engineering graduate from TED University in 2024. I build reliable software by combining development experience with a practical approach to testing.",
        current: "At Innova Bilişim, I work on web, mobile, and API testing and develop test automation with Java and Selenium. I also use SOAP UI, Java, Groovy, Jenkins, and SQL since November 2024.",
        background: "Before that, I worked on backend development at Türk Telekom as a Long-Term Intern, where I gained hands-on experience with Java and SQL.",
        focus: ["Test Automation", "API Testing", "Java", "CI/CD"]      },

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
          description:
              "A responsive personal portfolio website built with Vue.js, featuring dark mode, smooth animations, and bilingual CV downloads.",
          technologies: ["Vue.js", "HTML", "CSS", "JavaScript"],
          image: "images/webLogo.gif",
          links: [
            {
              label: "View Code",
              url: "https://github.com/erenkangal/erenkangal.github.io",
              icon: "images/github.png"
            },
            {
              label: "Live Demo",
              url: "https://erenkangal.github.io",
              icon: "images/webLogo.gif"
            }
          ]
        },
        {
          id: 2,
          title: "Python Projects",
          description:
              "Collection of Python applications including data structures, algorithms, and network programming implementations.",
          technologies: [
            "Python",
            "TCP/UDP",
            "Data Structures",
            "Algorithms",
            "Image Processing"
          ],
          image: "images/logo.png",
          links: [
            {
              label: "TCP Socket",
              url: "https://github.com/erenkangal/TCPsocketProgrammnig",
              icon: "images/github.png"
            },
            {
              label: "UDP Socket",
              url: "https://github.com/erenkangal/UDPsocketProgramming",
              icon: "images/github.png"
            },
            {
              label: "Erosion",
              url: "https://github.com/erenkangal/erosion",
              icon: "images/github.png"
            },
            {
              label: "PSNR Matlab",
              url: "https://github.com/erenkangal/psnrMatlab",
              icon: "images/github.png"
            }
          ]
        },
        {
          id: 4,
          title: "Test Automation Projects",
          description:
              "Test automation projects with JUnit, TestNG, Selenium, Playwright, and CodeceptJS.",
          technologies: [
            "Java",
            "JUnit",
            "TestNG",
            "Selenium",
            "Playwright",
            "CodeceptJS"
          ],
          image: "images/logo.png",
          links: [
            {
              label: "Booking Test w/Selenium",
              url: "https://github.com/erenkangal/BookingTestWithSelenium",
              icon: "images/github.png"
            },
            {
              label: "Booking Test w/CodeceptJS",
              url: "https://github.com/erenkangal/BookingTestWithCodeceptJS",
              icon: "images/github.png"
            },
            {
              label: "Complete Project Testing with Java",
              url: "https://github.com/erenkangal/integrationTesting",
              icon: "images/github.png"
            }
          ]
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
      },
    };
  },

  computed: {
    filteredProjects() {
      return this.projects.filter(project => {
        const matchesSearch = project.title.toLowerCase().includes(this.projectFilters.search.toLowerCase()) ||
                             project.description.toLowerCase().includes(this.projectFilters.search.toLowerCase());
        const matchesTechnology = this.projectFilters.technology === "all" || 
                                 project.technologies.includes(this.projectFilters.technology);

        return matchesSearch && matchesTechnology;
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
    },
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