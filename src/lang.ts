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
          url: "https://cadez.eu/",
        },
        {
          name: "Jaka Černetič",
          desc: "Designer and Reddit user.",
          url: "https://jaka.cernetic.cc/",
        },
        {
          name: "Andriy Gryban",
          desc: "Web developer & akvavent.si",
          url: "https://gribanica.eu",
        },
        {
          name: "Dorian Mahnič Dobrovoljc",
          desc: "Java enthusiast & radio amateur.",
        },
      ],
    },
    projects: {
      title: "Projects",
      problem: "Problem",
      solution: "Solution",
      code: "Code",
      visit: "Visit",
      "project-1": {
        title: "Vegova Urnik — Classroom Schedule Display",
        description:
          "An ESP32-S3 touchscreen device that shows the current lesson, teacher, and classroom outside each room, with live updates throughout the day.",
        problem:
          "Hallways at school had no way to see the current period or who was teaching — visitors and students had to wander to find the right room.",
        solution:
          "Built a 7-inch touchscreen on ESP32-S3 that pulls the day's schedule as JSON, syncs time over NTP, and renders the previous, current, and next lesson with LVGL on a dual-core task split.",
        github: "https://github.com/majmohar4/vegova-urnik-javno",
      },
      "project-2": {
        title: "ServerMon — Single-Host Monitoring",
        description:
          "A lightweight live monitoring dashboard for a single server — no Prometheus, no agents, no external database.",
        problem:
          "I wanted live CPU, memory, disk, network, and Docker stats on my personal servers without standing up a multi-service monitoring stack.",
        solution:
          "Flask + psutil samples metrics every second, streams them to the browser over Server-Sent Events, and writes a JSONL log for history. Dark UI, drop-in deploy.",
        github: "https://github.com/majmohar4/servermon",
      },
      "project-3": {
        title: "majmohar.eu — Personal Portfolio",
        description:
          "This site. A bilingual (EN/SLO) portfolio built with Vite, React, Tailwind, and framer-motion.",
        problem:
          "My previous portfolio felt static, slow, and didn't really look like me.",
        solution:
          "Rebuilt from scratch with a glass UI, instant language switching, an embedded CV viewer, and a CI deploy through Vercel.",
        github: "https://github.com/majmohar4/majmohar-react",
        website: "https://majmohar.eu",
      },
      "project-4": {
        title: "ang2 — Slovenian English Matura Prep",
        description:
          "A study webapp for the basic-level English matura (Paper 1) — gap-fills, word formation, and vocabulary drawn from 60 past exams (2004–2025).",
        problem:
          "Prep materials were scattered across PDFs and books, with no way to drill specific question types or filter by year.",
        solution:
          "Wrote a single-page app with categorized exercises, filtering and sorting; deployed on Vercel.",
        github: "https://github.com/majmohar4/ang2",
      },
      "project-5": {
        title: "Yeet — Self-Hosted File Sharing",
        description:
          "A self-hosted file-sharing service. Drop in a file, get back a link that expires after 24 hours. No accounts, no tracking, no third party in between.",
        problem:
          "Sending a file to a friend usually meant trusting WeTransfer, Discord, or whatever was handy. I wanted something I host myself and fully control — short links, real expiry, and basic safety checks.",
        solution:
          "A Python (Flask) service that accepts uploads up to a configurable size, scans them with ClamAV before they're available, returns a clean shareable link, and stores files without their original extension on disk. A background job sweeps expired files every 15 minutes. Designed to run in a single container on a home server.",
        github: "https://github.com/majmohar4/yeet",
      },
      "project-6": {
        title: "rac.majmohar.eu — Matura Study Hub",
        description:
          "A web app that brings every past matura task — electrical engineering, computer science, informatics, sociology — into one place: random task drills, flashcards, learning paths, and a built-in textbook.",
        problem:
          "Past matura tasks were scattered across dozens of PDFs by year and subject. Drilling a specific topic, or doing random questions across years, was basically impossible without printing everything.",
        solution:
          "Built a study hub that ingests every past matura task and exposes them through random-task practice, flashcards for revision, structured learning paths, and a textbook view. Source kept private because of copyright on the underlying exam material.",
        website: "https://rac.majmohar.eu",
      },
      "project-7": {
        title: "SimBank — Banking Simulator",
        description:
          "An educational banking simulator that mimics real-world account and transaction operations in a safe sandbox.",
        problem:
          "Students from a partner school in Lithuania had no interactive way to practice financial operations and exercises.",
        solution:
          "Built a sandbox for managing accounts and transactions in a controlled environment, designed for learning and skill development.",
        github: "https://github.com/majmohar4/SimBank",
      },
      "project-8": {
        title: "ESP32 Page Turner — Bluetooth Pedal",
        description:
          "A Bluetooth foot pedal that lets musicians turn sheet music pages hands-free.",
        problem:
          "I needed to flip pages on my piano sheet music without taking my hands off the keys.",
        solution:
          "Built a pedal around an ESP32 that sends Bluetooth HID key events to whatever device is showing the sheet music.",
        github: "https://github.com/majmohar4/esp32-page-turner",
      },
      "project-9": {
        title: "Discord Immich Uploader",
        description:
          "A Python Discord bot that mirrors images posted in a channel into a self-hosted Immich library.",
        problem:
          "Group photo channels on Discord were a black hole — nothing was archived to my own photo library.",
        solution:
          "Wrote a bot that watches a channel, downloads new images, and uploads them to Immich via its API.",
        github: "https://github.com/majmohar4/discord-immich-bot",
      },
      "project-10": {
        title: "RAC_Kastelic — Java School Exercises",
        description:
          "A year of exercises and small projects from the Computer Science course at Vegova Ljubljana under prof. Kastelic.",
        problem:
          "We solved practical Java assignments in class and I needed a clean place to keep them.",
        solution:
          "Organised all of the year's tasks into a single repository, one folder per assignment.",
        github: "https://github.com/majmohar4/RAC_Kastelic",
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
          url: "https://cadez.eu/",
        },
        {
          name: "Jaka Černetič",
          desc: "Oblikovalec in Reddit uporabnik.",
          url: "https://jaka.cernetic.cc/",
        },
        {
          name: "Andriy Gryban",
          desc: "Spletni razvijalec & akvavent.si",
          url: "https://gribanica.eu",
        },
        {
          name: "Dorian Mahnič Dobrovoljc",
          desc: "Ljubitelj Jave & radioamater.",
        },
      ],
    },
    projects: {
      title: "Projekti",
      problem: "Problem",
      solution: "Rešitev",
      code: "Koda",
      visit: "Obišči",
      "project-1": {
        title: "Vegova Urnik — prikazovalnik urnika pred učilnicami",
        description:
          "Naprava na ESP32-S3 s 7-palčnim zaslonom, ki pred vsako učilnico prikazuje trenutno uro, učitelja in razred z živimi posodobitvami čez dan.",
        problem:
          "Na hodnikih ni bilo načina, da bi videl, katera ura poteka in kdo uči — obiskovalci in dijaki so blodili po šoli, da so našli pravi razred.",
        solution:
          "Naredil sem napravo na ESP32-S3 s 7-palčnim zaslonom, ki s strežnika potegne dnevni urnik kot JSON, sinhronizira čas prek NTP in z LVGL na dveh jedrih izrisuje prejšnjo, trenutno in naslednjo uro.",
        github: "https://github.com/majmohar4/vegova-urnik-javno",
      },
      "project-2": {
        title: "ServerMon — nadzor enega strežnika",
        description:
          "Lahka nadzorna plošča za en strežnik — brez Prometheusa, brez agentov, brez zunanje baze.",
        problem:
          "Hotel sem v živo videti porabo CPU, pomnilnika, diska, mreže in Docker statistiko brez postavljanja celega monitoring stacka.",
        solution:
          "Flask + psutil vsako sekundo vzorči podatke, prek Server-Sent Events jih pošilja v brskalnik in shranjuje JSONL dnevnik za zgodovino. Temen UI, en deploy.",
        github: "https://github.com/majmohar4/servermon",
      },
      "project-3": {
        title: "majmohar.eu — osebni portfolio",
        description:
          "Ta stran. Dvojezičen (EN/SLO) portfolio, narejen z Vite, Reactom, Tailwindom in framer-motion.",
        problem:
          "Stari portfolio se mi je zdel statičen, počasen in ne dovolj v mojem stilu.",
        solution:
          "Vse na novo: glass UI, hitro preklapljanje jezika, vgrajen pregled CV-ja in CI deploy prek Vercela.",
        github: "https://github.com/majmohar4/majmohar-react",
        website: "https://majmohar.eu",
      },
      "project-4": {
        title: "ang2 — priprava na maturo iz angleščine",
        description:
          "Spletna aplikacija za pripravo na osnovno raven mature iz angleščine (1. izpitna pola) — vaje, besedotvorje in besedišče iz 60 preteklih izpitov (2004–2025).",
        problem:
          "Gradiva za pripravo so bila razmetana po PDF-jih in učbenikih, ni pa bilo načina, da bi treniral točno določene tipe nalog ali jih filtriral po letih.",
        solution:
          "Napisal sem enostransko aplikacijo s kategoriziranimi vajami, filtriranjem in sortiranjem; postavljena je na Vercel.",
        github: "https://github.com/majmohar4/ang2",
      },
      "project-5": {
        title: "Yeet — self-hosted file sharing",
        description:
          "Lastni (self-hosted) servis za deljenje datotek. Naložiš datoteko, dobiš povezavo, ki poteče po 24 urah. Brez računov, brez sledenja, brez posrednika.",
        problem:
          "Za pošiljanje datotek sem moral zaupati WeTransferju, Discordu ali čemur koli pri roki. Hotel sem nekaj, kar gostim sam in popolnoma nadzorujem — kratke povezave, prave potečne čase in osnovne varnostne preglede.",
        solution:
          "Python (Flask) servis, ki sprejme datoteko do nastavljive velikosti, jo pred objavo skenira s ClamAV, vrne čisto deljivo povezavo in datoteko na disku shrani brez originalne končnice. Ozadnji čistilnik vsakih 15 minut odstrani potečene datoteke. Zasnovan, da teče v enem kontejnerju na domačem strežniku.",
        github: "https://github.com/majmohar4/yeet",
      },
      "project-6": {
        title: "rac.majmohar.eu — zbirka maturitetnih nalog",
        description:
          "Spletna stran, kjer so na enem mestu zbrane vse naloge iz vseh matur iz elektrotehnike, računalništva, informatike in sociologije — naključne naloge, kartice za ponavljanje, učne poti in vgrajen učbenik.",
        problem:
          "Naloge preteklih matur so živele po desetinah PDF-jev, razdeljene po letih in predmetih. Trenirati določeno snov ali reševati naključna vprašanja čez vsa leta je bilo skoraj nemogoče brez printanja vsega.",
        solution:
          "Naredil sem stran, ki uvozi vse pretekle matura naloge in jih ponudi prek treninga z naključnimi nalogami, kartic za ponavljanje, učnih poti in vgrajenega učbenika. Koda ostaja zasebna zaradi avtorskih pravic na izpitnem gradivu.",
        website: "https://rac.majmohar.eu",
      },
      "project-7": {
        title: "SimBank — bančni simulator",
        description:
          "Izobraževalni bančni simulator, ki posnema realne operacije z računi in transakcijami v varnem peskovniku.",
        problem:
          "Dijakom partnerske šole iz Litve je primanjkovalo interaktivnega načina za vadbo bančnih operacij.",
        solution:
          "Zgradil sem peskovnik za upravljanje računov in transakcij v nadzorovanem okolju, namenjen učenju.",
        github: "https://github.com/majmohar4/SimBank",
      },
      "project-8": {
        title: "ESP32 Page Turner — bluetooth pedal",
        description:
          "Bluetooth nožni pedal, ki glasbenikom omogoča obračanje not brez rok.",
        problem:
          "Med igranjem klavirja sem hotel obračati strani not, ne da bi spustil tipke.",
        solution:
          "Naredil sem pedal na ESP32, ki kot Bluetooth HID pošilja tipke napravi, ki prikazuje note.",
        github: "https://github.com/majmohar4/esp32-page-turner",
      },
      "project-9": {
        title: "Discord Immich Uploader",
        description:
          "Python Discord bot, ki slike, objavljene v kanalu, prezrcali v lastno Immich knjižnico.",
        problem:
          "Skupinski Discord kanali za fotografije so bili črna luknja — nič ni romalo v mojo zasebno foto knjižnico.",
        solution:
          "Bot opazuje kanal, prenese nove slike in jih prek Immich API-ja naloži v mojo instanco.",
        github: "https://github.com/majmohar4/discord-immich-bot",
      },
      "project-10": {
        title: "RAC_Kastelic — šolske vaje v Javi",
        description:
          "Leto vaj in manjših projektov pri predmetu računalništvo na Vegovi pod prof. Kastelicem.",
        problem:
          "Pri pouku smo reševali praktične naloge v Javi in sem jih hotel imeti urejene na enem mestu.",
        solution:
          "Vse letne naloge sem zbral v en repozitorij, ena mapa na nalogo.",
        github: "https://github.com/majmohar4/RAC_Kastelic",
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
