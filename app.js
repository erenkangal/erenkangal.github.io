const app = Vue.createApp({
  data() {
    return {
      // NAVIGATION
      navItems: [
        { text: "Home", href: "#home" },
        { text: "About Me", href: "#aboutMe" },
        { text: "Skills", href: "#skills" },
        { text: "Contact", href: "#contact" }
      ],

      // ABOUT ME
      aboutMe: {
        intro: "Graduated from Computer Engineering, TED University in 2024. Currently working as a Software Test Engineer at Innova Bilişim.",
        vision: "Develop myself as much as I can and help my country to reach a top rank among the most developed countries.",
        mission: "Everyone needs a good programmer. I’m educating myself to become a good Front-End developer and be helpful to everyone."
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
            { name: "C", level: "Beginner" },
            { name: "MySQL", level: "Beginner" },
            { name: "Assembly", level: "Beginner" }
          ]
        },
        {
          title: "Testing",
          items: [
            { name: "Selenium", level: "Intermediate" },
            { name: "SOAP UI", level: "Intermediate" },
            { name: "Playwright", level: "Beginner" }
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

      // SOCIAL MEDIA
      social: {
        linkedin: "https://www.linkedin.com/in/eren-kangal-b00aab1b4/",
        instagram: "https://www.instagram.com/ekangal1/",
        twitter: "https://twitter.com/ekangal0"
      },

      // CONTACT FORM
      form: {
        name: "",
        email: "",
        message: ""
      },

      // THEME
      isDarkMode: false
    };
  },

  methods: {
    submitForm() {
      alert(`Thanks for your message, ${this.form.name}!`);
      console.log("Form data:", this.form);
      this.form.name = "";
      this.form.email = "";
      this.form.message = "";
    },

    toggleDarkMode() {
      this.isDarkMode = !this.isDarkMode;
      document.body.classList.toggle("dark-mode", this.isDarkMode);
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
  },

  watch: {
    isDarkMode(newVal) {
      localStorage.setItem("darkMode", newVal);
    }
  }
});

app.mount("#app");
