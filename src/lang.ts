export type Language = "EN" | "SLO";

export const translations = {
  EN: {
    nav: {
      home: "Home",
      about: "About",
      projects: "Projects",
      skills: "Skills",
      friends: "Friends",
      cv: "CV",
      contact: "Contact",
    },
    hero: {
      title: "Maj Mohar",
      roles: ["Developer", "Musician", "Dancer", "Engineer", "Creator"],
      subtitle: "Turning ideas into code — with creativity and precision.",
      tagline: "Turning ideas into code — with creativity and precision.",
    },
    about: {
      title: "About Me",
      intro:
        "I'm an 18-year-old student at Vegova, musician, and radio amateur from Ljubljana. I enjoy building web applications, automating daily tasks, and turning ideas into code that solves real-world problems.",
      p2: "Besides programming, I studied piano for eight years. Music taught me patience, rhythm, and precision — values that influence what and how I create.",
      p3: "I’m also a licensed radio amateur, combining communication technology with curiosity. My goal is to keep learning, experimenting, and creating projects that connect logic and creativity.",
    },
    videos: {
      title: "Videos",
    },
    skills: {
      title: "Skills",
      description:
        "I like working with JavaScript, Java, and C++ (especially with Arduino and ESP32). I use a variety of frameworks and tools to build efficient and creative solutions.",
      learning: "Languages I'm Learning",
      used: "Languages and Technologies I've Used",
      frameworks: "Frameworks and Libraries",
      tools: "Tools I Use",
    },
    friends: {
      title: "Friends",
      subtitle: "People I've shared ideas and projects with.",
      list: [
        {
          name: "Lin Čadež",
          desc: "Backend developer, drone pilot & BlueJ enthusiast.",
        },
        { name: "Jaka Černetič", desc: "Designer and Reddit user." },
        { name: "Andriy Gryban", desc: "Web developer & akvavent.si" },
        {
          name: "Dorian Mahnič Dobrovoljc",
          desc: "Java enthusiast & radio amateur.",
        },
      ],
    },
    projects: {
      title: "Projects",
      "project-1": {
        title: "SimBank — Banking Simulator",
        description:
          "An educational banking simulator that mimics real-world financial operations for safe learning.",
        problem:
          "Students from Lithuania lacked an interactive way to practice financial operations and real-world exercises.",
        solution:
          "I built a realistic sandbox for managing accounts and transactions in a secure environment, designed for learning and skill development.",
        github: "https://github.com/majmohar/SimBank",
      },
      "project-2": {
        title: "majmohar-new — Personal Portfolio",
        description:
          "My personal website — a dark, minimalist portfolio for showcasing my knowledge and projects.",
        problem:
          "I wanted a modern website that reflects technical skill and a sense of design.",
        solution:
          "I developed a responsive website fully designed to match my own style.",
        github: "https://github.com/majmohar/majmohar-new",
        website: "https://majmohar.eu",
      },
      "project-3": {
        title: "Discord Bot — Automatic Immich Image Uploader",
        description:
          "A Python Discord bot that automatically uploads images from channels to Immich.",
        problem:
          "Collecting images from Discord channels was time-consuming and inefficient.",
        solution:
          "I created a bot that uses the Immich API to automatically upload images.",
        github: "https://github.com/majmohar/discord-immich-bot",
      },
      "project-4": {
        title: "ESP32 Page Turner — Page-Turning Pedal",
        description:
          "A Bluetooth device that allows musicians to turn sheet music pages hands-free.",
        problem:
          "I needed a way to switch music pages with my foot while playing the piano.",
        solution:
          "I built a pedal using an ESP32 that sends Bluetooth commands to turn pages.",
        github: "https://github.com/majmohar/esp32-page-turner",
      },
      "project-5": {
        title: "RAC_Kastelic — Java School Projects",
        description:
          "A collection of exercises and projects from the Computer Science course at Vegova Ljubljana, mentored by Kastelic.",
        problem:
          "During lessons, we had to solve practical assignments, and I needed a place to store them.",
        solution:
          "I prepared a collection of all the tasks we completed throughout the year.",
        github: "https://github.com/majmohar/RAC_Kastelic",
      },
    },
    cv: {
      title: "Curriculum Vitae",
      viewTitle: "View Full CV",
      clickHint: "Click to expand and read",
      modalTitle: "Maj Mohar — CV",
      open: "Open CV",
      download: "Download CV",
    },
    footer: {
      contactTitle: "Contact",
      connectTitle: "Connect",
      exploreTitle: "Explore",
      radio: "Radio amateur at RK Vegova",
      home: "Home",
      about: "About",
      skills: "Skills",
      friends: "Friends",
      projects: "Projects",
      cv: "CV",
      contact: "Contact",
      backToTop: "Back to Top",
      quote: "All rights reserved.",
    },
  },

  SLO: {
    nav: {
      home: "Domov",
      about: "O meni",
      projects: "Projekti",
      skills: "Znanja",
      friends: "Prijatelji",
      cv: "Življenjepis",
      contact: "Kontakt",
    },
    hero: {
      title: "Maj Mohar",
      roles: ["Razvijalec", "Glasbenik", "Plesalec", "Inženir", "Ustvarjalec"],
      subtitle: "Pretvarjam ideje v kodo — z ustvarjalnostjo in natančnostjo.",
      tagline: "Pretvarjam ideje v kodo — z ustvarjalnostjo in natančnostjo.",
    },
    about: {
      title: "O meni",
      intro:
        "Sem 18-letni dijak Vegove, glasbenik in radioamater iz Ljubljane. Rad gradim spletne aplikacije, avtomatiziram vsakodnevna opravila in pretvarjam ideje v kodo, ki rešuje resnične probleme.",
      p2: "Poleg programiranja sem osem let obiskoval klavir. Glasba me je naučila potrpežljivosti, ritma in natančnosti, ki vplivajo na to, kaj in kako delam.",
      p3: "Sem tudi radioamater z licenco, kjer združujem komunikacijsko tehnologijo z radovednostjo. Moj cilj je stalno učenje, eksperimentiranje in ustvarjanje projektov, ki povezujejo logiko in ustvarjalnost.",
    },
    videos: {
      title: "Videi",
    },
    skills: {
      title: "Znanja",
      description:
        "Rad delam z JavaScriptom, Javo in C++ (predvsem z Arduinom in ESP32). Uporabljam različne okvirje in orodja za učinkovite, ustvarjalne rešitve.",
      learning: "Jeziki, ki se jih učim",
      used: "Jeziki in tehnologije, ki sem jih uporabljal",
      frameworks: "Ogrodja in knjižnice",
      tools: "Orodja, ki jih uporabljam",
    },
    friends: {
      title: "Prijatelji",
      subtitle: "Ljudje, s katerimi sem delil ideje in projekte.",
      list: [
        {
          name: "Lin Čadež",
          desc: "Backend razvijalec, dron pilot & BlueJ navdušenec.",
        },
        { name: "Jaka Černetič", desc: "Oblikovalec in Reddit uporabnik." },
        { name: "Andriy Gryban", desc: "Spletni razvijalec & akvavent.si" },
        {
          name: "Dorian Mahnič Dobrovoljc",
          desc: "Ljubitelj Jave & radioamater.",
        },
      ],
    },
    projects: {
      title: "Projekti",
      "project-1": {
        title: "SimBank — Bančni simulator",
        description:
          "Izobraževalni bančni simulator, ki posnema resnične finančne operacije za varno učenje.",
        problem:
          "Dijakom iz Litve je primanjkovalo interaktivnega načina za vadbo finančnih operacij in vaje za resnično delo.",
        solution:
          "Zgradil sem realističen peskovnik za upravljanje računov in transakcij v varnem okolju. Namenjen učenju in razvoju spretnosti.",
        github: "https://github.com/majmohar/SimBank",
      },
      "project-2": {
        title: "majmohar-new — Osebni portfolio",
        description:
          "Moja osebna spletna stran — temen, minimalističen portfolio za predstavitev znanja in projektov.",
        problem:
          "Želel sem sodobno spletno stran, ki izraža tehnično znanje in občutek za dizajn.",
        solution: "Razvil sem odzivno spletno stran po svojem okusu.",
        github: "https://github.com/majmohar/majmohar-new",
        website: "https://majmohar.eu",
      },
      "project-3": {
        title: "Discord Bot — Avtomatsko nalaganje slik v Immich",
        description:
          "Python Discord bot, ki samodejno nalaga slike iz kanalov v Immich.",
        problem:
          "Zbiranje slik iz Discord kanalov je bilo zamudno in potratno s časom.",
        solution: "Ustvaril sem bota, ki preko Immich APIja sam naloži slike.",
        github: "https://github.com/majmohar/discord-immich-bot",
      },
      "project-4": {
        title: "ESP32 Page Turner — pedal za prestavljanje strani",
        description:
          "Bluetooth škatlica, ki omogoča preklapljanje strani not brez rok.",
        problem:
          "Potreboval sem način, da med igranjem klavirja z nogo preklapljam strani not.",
        solution:
          "Izdelal sem pedal z ESP32, ki prek Bluetooth pošilja ukaze za obračanje strani.",
        github: "https://github.com/majmohar/esp32-page-turner",
      },
      "project-5": {
        title: "RAC_Kastelic — Šolski projekti v Javi",
        description:
          "Zbirka vaj in projektov pri predmetu računalništvo na Vegovi Ljubljana pod mentorjem Kastelicem.",
        problem:
          "Med poukom moramo reševati praktične naloge in sem jih potreboval shranjevati.",
        solution:
          "Pripravil sem skupek nalog, ki smo jih reševali v enem letu.",
        github: "https://github.com/majmohar/RAC_Kastelic",
      },
    },
    cv: {
      title: "Življenjepis",
      viewTitle: "Poglej celoten CV",
      clickHint: "Klikni za razširitev in branje",
      modalTitle: "Maj Mohar — CV",
      open: "Odpri CV",
      download: "Prenesi CV",
    },
    footer: {
      contactTitle: "Kontakt",
      connectTitle: "Povezave",
      exploreTitle: "Raziskuj",
      radio: "Radioamater v RK Vegova",
      home: "Domov",
      about: "O meni",
      skills: "Znanja",
      friends: "Prijatelji",
      projects: "Projekti",
      cv: "Življenjepis",
      contact: "Kontakt",
      backToTop: "Nazaj na vrh",
      quote: "Vse pravice pridržane.",
    },
  },
};
