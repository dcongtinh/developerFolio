/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Dao Cong Tinh",
  title: "Hi, I'm TonyD",
  subTitle: emoji(
    "A Ph.D student in Computer Science 👨‍💻 specializing in Deep Reinforcement Learning, LLMs, and Biomedical & Healthcare Informatics. As a competitive programmer and tech enthusiast, I love exploring new technologies to solve real-life problems 🚀."
  ),
  resumeLink:
    "https://sites.google.com/view/dcongtinh", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/dcongtinh",
  linkedin: "https://www.linkedin.com/in/dcongtinh/",
  gmail: "dcongtinh@gmail.com",
  // gitlab: "https://gitlab.com/dcongtinh",
  facebook: "https://www.facebook.com/dcongtinh",
  line: "Line ID: dcongtinh",
  // medium: "https://medium.com/@dcongtinh",
  // stackoverflow: "https://stackoverflow.com/users/10422806/saad-pasta",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  // subTitle: "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji(
      "🤔 Algorithms, Competitive Programming"
    ),
    emoji("🕹️ Reinforcement Learning (RL), DeepRL"),
    emoji(
      "🤖 Robotics, Computer games, AWS DeepRacer"
    ),
    emoji(
      "🧠 LLMs in Biomedical & Healthcare Informatics"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "HTML-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "CSS3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "SASSS",
      fontAwesomeClassname: "fab fa-sass"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "Reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "Nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    // {
    //   skillName: "swift",
    //   fontAwesomeClassname: "fab fa-swift"
    // },
    {
      skillName: "NPM",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "SQL-Database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "AWS",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "Digital Ocean",
      fontAwesomeClassname: "fab fa-digital-ocean"
    },
    {
      skillName: "Python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "Docker",
      fontAwesomeClassname: "fab fa-docker"
    },
    // {
    //   skillName: "Heroku",
    //   fontAwesomeClassname: "fab",
    //   icon: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="iconify iconify--simple-icons" width="64" height="64" viewBox="0 0 24 24" > <path fill="currentColor" d="M20.61 0H3.39a2.15 2.15 0 0 0-2.16 2.16v19.681A2.15 2.15 0 0 0 3.39 24h17.22a2.15 2.15 0 0 0 2.159-2.159V2.16A2.15 2.15 0 0 0 20.61 0m.96 21.841c0 .539-.421.96-.96.96H3.39a.95.95 0 0 1-.96-.96V2.16c0-.54.42-.961.96-.961h17.22a.95.95 0 0 1 .96.961zM6.63 20.399L9.33 18l-2.7-2.4zm9.72-9.719c-.479-.48-1.379-1.08-2.879-1.08c-1.621 0-3.301.421-4.5.84V3.6h-2.4v10.38l1.68-.78s2.76-1.26 5.16-1.26c1.2 0 1.5.66 1.5 1.26v7.2h2.4v-7.2c.059-.179.059-1.501-.961-2.52M13.17 7.5h2.4c1.08-1.26 1.62-2.521 1.8-3.9h-2.399c-.241 1.379-.841 2.64-1.801 3.9" ></path></svg>'
    // },
    {
      skillName: "Bitbucket",
      fontAwesomeClassname: "fab fa-bitbucket"
    },
    {
      skillName: "Git",
      fontAwesomeClassname: "fab fa-git-alt"
    },
    {
      skillName: "Slack",
      fontAwesomeClassname: "fab fa-slack"
    },
    {
      skillName: "Trello",
      fontAwesomeClassname: "fab fa-trello"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  id: 'education',
  sectionName: "Education",
  schools: [
    {
      schoolName: "National Yang Ming Chiao Tung University",
      logo: require("./assets/images/nycu_logo.jpeg"),
      subHeader: "PhD in Computer Science",
      duration: "September 2024 – Now",
      website: "https://www.nycu.edu.tw/nycu/en/index",
      desc: 'Advisor: <a href="https://sites.google.com/site/wcpeng/" target="_blank">Professor Wen-Chih Peng</a></br>',
    },
    {
      schoolName: "National Yang Ming Chiao Tung University",
      logo: require("./assets/images/nycu_logo.jpeg"),
      subHeader: "Master of Science in Computer Science",
      duration: "February 2022 – April 2024",
      website: "https://www.nycu.edu.tw/nycu/en/index",
      desc: 'Advisor: <a href="https://icwu307.github.io/" target="_blank">Distinguished Professor I-Chen Wu</a></br>\
            <span style="display: block; margin-top: 0.5rem;">Thesis: <i>Derivative-based Regularization for Action Smoothness in Deep Reinforcement Learning Robotics Control</i></span>',
      // descBullets: [
      //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      // ]
    },
    {
      schoolName: "Can Tho University",
      logo: require("./assets/images/CTU_Logo.jpeg"),
      subHeader: "Bachelor of Engineering in Computer Science",
      duration: "September 2017 – September 2021",
      website: "https://en.ctu.edu.vn/",
      desc: 'Advisor: <a href="https://www.cit.ctu.edu.vn/~pnkhang/cv-vi.html" target="_blank">Associate Professor Pham Nguyen Khang</a></br>\
      <span style="display: block; margin-top: 0.5rem;">Thesis: <i>Action Recognition and Its Application For Controlling Video Game via Digital Camera</i></span>',
      // descBullets: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit"]
    },
    {
      schoolName: "Ly Tu Trong High School for the Gifted",
      logo: require("./assets/images/LTT_Logo.jpeg"),
      subHeader: "High School Diplomates in Informatics",
      duration: "2014 – 2017",
      website: "https://chuyenlytutrong.edu.vn/"
      // desc: "Ranked top 10% in the program. Took courses about Software Engineering, Web Security, Operating Systems, ...",
      // descBullets: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit"]
    }
  ]
};

// Project Section

const projectsInfo = {
  display: true, // Set false to hide this section, defaults to true
  id: "projects",
  sectionName: "Projects",
  papers: [
    {
      // schoolName: "Research:",
      descBullets: [
        "2024/04 – Now:     <b>Large Language Multimodal Models For 5-Year Chronic Disease Cohort Prediction Using EHR Data</b>. Far Eastern Memorial Hospital & National Yang Ming Chiao Tung University.",
        "2020/06 – 2020/12: <b>Practice Management Information System Integrating Attendance With Face Recognition</b>. <i>Hệ thống thông tin quản lý thực hành tích hợp điểm danh bằng nhận diện khuôn mặt</i> (article in Vietnamese with an abstract in English).",
        "2019/12 – 2020/04: <b>Using binning method to improve disease diagnosis efficiency of machine learning models on Metagenomic data</b>. <i>Sử dụng phương pháp binning để nâng cao hiệu quả chẩn đoán bệnh của các mô hình máy học trên dữ liệu Metagenomic</i> (article in Vietnamese with an abstract in English)."
      ]
    },
    // {
    //   schoolName: "Others:",
    //   descBullets: [
    //     "2018/12 – 2019/12: 1-year experience in front-end web (jQuery & React JS) and mobile apps (React Native)."
    //   ]
    // }
  ]
};

// Experience Section

const experiencesInfo = {
  display: true, // Set false to hide this section, defaults to true
  id: "experiences",
  sectionName: "Experiences",
  papers: [
    {
      schoolName: "Volunteers:",
      descBullets: [
        "Certificate of honor as a vice president of the Vietnamese Student Association (VSA) at National Yang Ming Chiao Tung University by VSA in Taiwan 2023",
        "Certificate of supporting for International Day by Office of International Affairs at National Yang Ming Chiao Tung University in 2023",
        "IEEE International Conference on Knowledge and Systems Engineering (KSE) 2020. Organized by Can Tho University (CTU) cooperated with VNU University of Engineering and Technology. (Assistant)"
      ]
    },
    {
      schoolName: "Work",
      descBullets: [
        "2018/12 – 2019/12: 1-year experience in front-end web (jQuery & React JS) and mobile apps (React Native)."
      ]
    }
  ]
};

const reposInfo = [
  {
    node: {
      description: "ACMNOTEBOOK",
      diskUsage: 122,
      forkCount: 0,
      id: "MDEwOlJlcG9zaXRvcnkxNTU0MTQ5MjE=",
      name: "ACMNOTEBOOK",
      primaryLanguage: {name: 'C++', color: '#f34b7d'},
      stargazers: {totalCount: 0},
      url: "https://github.com/dcongtinh/ACMNOTEBOOK"
    }
  }
]
// Publication Section

const publicationInfo = {
  display: true, // Set false to hide this section, defaults to true
  id: "publications",
  sectionName: "Publications",
  papers: [
    {
      schoolName: "Conference Papers:",
      descBullets: [
        "Phan, T. M. N.*, <u>Dao, C. T.*</u>, Wu, C.W., Wang, J.Z., Liu, S., Ding, J.E., Restrepo. D., Liu F., Hung, F.M., and Peng, W.C. (2024, October). \
        <a href='https://arxiv.org/abs/2407.12309' target='_blank'>MEDFuse: Multimodal EHR Data Fusion with Masked Lab-Test Modeling and Large Language Models.</a> \
        <i>In Proceedings of the 33rd ACM International Conference on Information and Knowledge Management (CIKM)</i>. (*Equal contribution )(Accepted).",
        "Lee, I., Cao, H. G., <u>Dao, C. T.</u>, Chen, Y. C., and Wu, I. C. (2024). \
        <a href='https://arxiv.org/abs/2407.04315' target='_blank'>Gradient-based Regularization for Action Smoothness in Robotic Control with Reinforcement Learning</a>. \
        <i>2024 IEEE/RSJ International Conference on Intelligent Robots and Systems (IROS)</i>. (Accepted).",
        "Phan, T. M. N., <u>Dao, C. T.</u>, Phan, T. T., & Nguyen, H. T. (2023, October). \
        <a href='https://doi.org/10.1007/978-981-99-7649-2_2' target='_blank'> SDCANet: Enhancing Symptoms-Driven Disease Prediction with CNN-Attention Networks </a>. \
        In <i>International Conference on Intelligent Systems and Data Science</i> (pp. 15-30).",
        "<u>Dao, C. T.</u>, & Nguyen, H. T. (2021). \
        <a href='https://doi.org/10.1007/978-981-16-8062-5_3' target='_blank'>Human mobility prediction using k-latest check-ins</a>.\
        In <i>Future Data and Security Engineering. Big Data, Security and Privacy, Smart City and Industry 4.0 Applications: 8th International Conference, FDSE 2021, Virtual Event, November 24–26, 2021, Proceedings 8</i> (pp. 36-49).",
        "Nguyen, T. H., <u>Dao, C. T.</u>, Phan, N. M. T., Nguyen, T. N. C., Phan, T. T., & Pham, H. N. (2020). \
        <a href='https://doi.org/10.1007/978-981-33-4370-2_10' target='_blank'>Automatic Attendance System Based on Face Recognition Using HOG Features and Cosine Distance</a>. \
        In <i>Future Data and Security Engineering. Big Data, Security and Privacy, Smart City and Industry 4.0 Applications: 7th International Conference, FDSE 2020, Quy Nhon, Vietnam, November 25–27, 2020, Proceedings 7</i> (pp. 130-148).",
        "Nguyen, T. H., Phan, T. T., <u>Dao, C. T.</u>, Ta, D. V. P., Nguyen, T. N. C., Phan, N. M. T., & Pham, H. N. (2021). \
        <a href='https://doi.org/10.1007/978-981-15-9354-3_2' target='_blank'>Effective Disease Prediction on Gene Family Abundance Using Feature Selection and Binning Approach</a>. \
        In <i>IT Convergence and Security: Proceedings of ICITCS 2020</i> (pp. 19-28)."
      ]
    },
    {
      schoolName: "Journal Papers:",
      descBullets: [
        "Nguyen, H. T., <u>Dao, C. T.</u>, Phan, T. M. N., & Phan, T. T. (2022). \
        <a href='https://doi.org/10.1504/IJISTA.2022.10050825' target='_blank'>Fake face detection in video using shallow deep learning architectures</a>. \
        <i>International Journal of Intelligent Systems Technologies and Applications</i>, 20(6), 469-486.",
        "Nguyen, H. T., Nguyen, C. N. T., Phan, T. M. N., & <u>Dao, C. T.</u> (2021). \
        <a href='https://doi.org/10.5573/IEIESPC.2021.10.2.101' target='_blank'>Pleural Effusion Diagnosis using Local Interpretable Model-agnostic Explanations and Convolutional Neural Network</a>. \
        <i>IEIE Transactions on Smart Processing & Computing</i>, 10(2), 101-108.",
        "Nguyen, H. T., Phan, T. T., <u>Dao, C. T.</u>, Phan, T. M. N., Ta, P. V. D., Nguyen, C. N. T., ... & Huynh, H. X. (2021). \
        <a href='https://doi.org/10.5614/j.eng.technol.sci.2021.53.1.9' target='_blank'>Gene Family Abundance Visualization based on Feature Selection Combined Deep Learning to Improve Disease Diagnosis</a>. \
        <i>Journal of Engineering & Technological Sciences</i>, 53(1).",
        "Phan, T. T., Ta, P. V. D., Phan, T. M. N., Nguyen, C. N. T., <u>Dao, C. T.</u>, Pham, N. H., & Nguyen, H. T. (2020). \
        <a href='http://dx.doi.org/10.37569/DalatUniversity.10.2.646%282020%29' target='_blank'>Evaluation of Assistance Tools for Diagnosis of Diseases by Approaching to Personalized Medicine on Metagenomic Data</a>. \
        <i>Dalat University Journal of Science</i>, 117-144."
      ]
    }
  ]
};

// Theses Section

const thesesInfo = {
  display: false, // Set false to hide this section, defaults to true
  id: "theses",
  sectionName: "Theses",
  papers: [
    {
      descBullets: [
        "Cong-Tinh Dao. <i>Derivative-based Regularization for Action Smoothness in Deep Reinforcement Learning Robotics Control</i>. Master's thesis in EECS, National Yang Ming Chiao Tung University, April 2024.",
        "Cong-Tinh Dao. <i>Action Recognition and Its Application For Controlling Video Game via Digital Camera</i>. Engineering Thesis in Computer Science, Can Tho University, October 2021.",
      ]
    },
  ]
};


// Achievements Section

const honorInfo = {
  display: true, // Set false to hide this section, defaults to true
  id: "honors",
  sectionName: "Honors & Awards",
  papers: [
    {
      // schoolName: "Conference Papers:",
      descBullets: [
        "2024 – 2027: NSTC Graduate Research Fellowship Pilot Program (Ph.D degree) - Advisor: Wen-Chih Peng",
        "2023: AWS DeepRacer League Championship Finals in Las Vegas",
        "2022 – 2024: Certificate of Full Scholarship of National Yang Ming Chiao Tung University",
        "2021: Odon Vallet Fellowship Certificate",
        "2021: Certificate of Completion Summer School on Advances in Data Science and Artificial Intelligence",
        "2021: Certificate of Completion KIT Bio Tech & IT Online Spring School",
        "2017 – 2021: Scholarship for the Best Student of the Academic Year",
        "2017 – 2020: Certificate of Achievement the ASIA Vietnam ICPC Regional Contest",
        "2020: Third Prize at the 2020 ICPC Vietnam Southern Provincial Programming Contest",
        "2019: Exchange Student in Chulalongkorn University, Thailand",
        "2018: Third Prize: Olympiad for IT student (specialized)",
        "2017: Second Prize: Olympiad for IT student (non-specialized)",
        "2016: Second Prize: Young Informatics Innovative Software",
        "2016: Microsoft Certified Application Specialist: Using Microsoft Office Excel 2013",
        "2015 – 2016: Silver/Bronze Medal Olympic 30.4"
      ]
    },
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: false, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false, // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: false, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Software Engineer",
      company: "Facebook",
      companylogo: require("./assets/images/facebookLogo.png"),
      date: "June 2018 – Present",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      descBullets: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      ]
    },
    {
      role: "Front-End Developer",
      company: "Quora",
      companylogo: require("./assets/images/quoraLogo.png"),
      date: "May 2017 – May 2018",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
      role: "Software Engineer Intern",
      company: "Airbnb",
      companylogo: require("./assets/images/airbnbLogo.png"),
      date: "Jan 2015 – Sep 2015",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: false // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/saayaHealthLogo.webp"),
      projectName: "Saayahealth",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://saayahealth.com/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/nextuLogo.webp"),
      projectName: "Nextu",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://nextu.se/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Honors & Awards"),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Google Code-In Finalist",
      subtitle:
        "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image: require("./assets/images/codeInLogo.webp"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        },
        {
          name: "Award Letter",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        },
        {
          name: "Google Code-in Blog",
          url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        }
      ]
    },
    {
      title: "Google Assistant Action",
      subtitle:
        "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "View Google Assistant Action",
          url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
        }
      ]
    },

    {
      title: "PWA Web App Developer",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/pwaLogo.webp"),
      imageAlt: "PWA Logo",
      footerLink: [
        {name: "Certification", url: ""},
        {
          name: "Final Project",
          url: "https://pakistan-olx-1.firebaseapp.com/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+92-0000000000",
  email_address: "saadpasta70@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  publicationInfo,
  thesesInfo,
  honorInfo,
  experiencesInfo,
  projectsInfo,
  reposInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
