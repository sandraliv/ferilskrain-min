import { createI18n } from "vue-i18n";

// Define translations for each language
const messages = {
  en: {
    welcome: "Welcome",
    about_me: "About me",
    career: "Career",
    askja: {
      title: "Askja - Car dealership",
      duration: "2024 - Present",
      description:
        "I currently work as an IT specialist at Askja. I developed a Python program to read invoices and transform them. I am also responsible for implementing an app from a supplier and handling daily IT tasks.",
    },
    nordural: {
      title: "Norðurál",
      duration: "2018 - 2024",
      description:
        "Worked for 6 years at Nordural’s aluminum potroom. It was a really enjoyable job. Worked there throughout my university studies, where my technical interest awakened.",
    },
    olis: {
      title: "Olíuverslun Íslands",
      duration: "2014 - 2018",
      description:
        "Worked at Olís in Borgarnes for four years. Nothing much to say, but it was fun working there.",
    },
    header: {
      home: "Home",
      school: "Education",
      work: "Career",
      me: "3rd year Computer Science student",
    },
    namsferill: {
      CS: "Computer Sc.",
      FR: "Social Work",
      PDF: "Download PDF",
      profskirteini: "Diploma",
      afangi: "Course",
      numer: "Course ID",
      grade: "Grade",
      credits: "Credits",
      semester: "Semester",
      totalCredits: "Total credits",
      medaltal: "Weighted grade",
    },
  },
  is: {
    about_me: "Um mig",
    welcome: "Velkomin",
    career: "Starfsferill",
    askja: {
      title: "Bílaumboðið Askja",
      duration: "2024 - Núverandi",
      description:
        "Ég starfa nú sem sérfræðingur í upplýsingatækni hjá Bílaumboðinu Öskju. Ég bjó til python innlestrarforrit sem les inn reikninga og umbreytir þeim. Ég er einnig í forsvari fyrir innleiðingu á appi frá birgja. Svo sinni ég daglegum, hefðbundnum IT verkefnum.",
    },
    nordural: {
      title: "Norðurál",
      duration: "2018 - 2024",
      description:
        "Vann í 6 ár í kerskála Norðuráls. Fannst það virkilega skemmtilegt starf. Vann þar alla mína háskólagöngu og þar vaknaði tæknilegi áhugi minn.",
    },
    olis: {
      title: "Olíuverslun Íslands",
      duration: "2014 - 2018",
      description:
        "Ég starfaði í Olís Borgarnesi í fjögur ár. Ekkert um það að segja meira, en fannst gaman að vinna þar.",
    },
    header: {
      home: "Heim",
      school: "Námsferill",
      work: "Starfsferill",
      me: "3. ár tölvunarfræði",
    },
    namsferill: {
      CS: "Tölvunarfræði",
      FR: "Félagsráðgjöf",
      PDF: "Hlaða niður PDF",
      profskirteini: "Prófskírteini",
      afangi: "Áfangi",
      numer: "Námskeiðsnúmer",
      grade: "Einkunn",
      credits: "Einingar",
      semester: "Önn",
      totalCredits: "Fjöldi eininga",
      medaltal: "Vegið meðaltal",
    },
  },
};

// Create the i18n instance
const i18n = createI18n({
  locale: "is", // Set the initial locale
  fallbackLocale: "en", // Fallback locale if a translation is missing
  messages, // Locale messages
});

export default i18n;
