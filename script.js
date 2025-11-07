// ---- Source data (from your résumé PDF) ----
const data = {
  name: "Pavan Jadhav",
  role: "Sr. Quality Assurance Analyst",
  phone: "8380856899",
  email: "pavanjadhavmorning@gmail.com",
  linkedin: "https://linkedin.com/in/pavan-jadhav-23355225b",
  summary:
    "An astute and detail-oriented Quality Assurance professional with 2 years of experience in the Software Testing domain. Proven expertise in manual testing approaches including Functional, Regression, User Acceptance, Retesting, Exploratory, Non-Functional, Mobile, API, and Database Testing. Adept at collaborating with cross-functional teams to deliver high-quality software solutions within tight deadlines.",
  experience: {
    title: "Software Test Engineer",
    company: "Subtle Solutions",
    location: "Pune, India",
    period: "July 2020 – June 2022",
    projectTitle: "Project: Investment Funds",
    projectDesc:
      "The American Funds Portfolio Series is designed to help investors pursue long-term investment success by enabling the purchase of a diversified portfolio of American Funds in a single transaction. The platform offers flexibility to tailor portfolios according to investment objectives.",
    bullets: [
      "Analyzed business requirements and created detailed test plans, test cases, and test scenarios.",
      "Performed functional, regression, smoke, sanity, UI, and exploratory testing to ensure end-to-end coverage.",
      "Documented and escalated defects with clear reproduction steps and evidence.",
      "Created and maintained test data across multiple testing phases.",
      "Provided test effort estimates and participated in planning activities.",
      "Validated API responses, headers, authentication, and payloads using Postman.",
      "Implemented pre-request and test scripts in Postman for automated validation."
    ]
  },
  skills: ["Manual Testing","Mobile Testing","API Testing","Database Testing"],
  tools: ["Postman","Oracle SQL","JIRA","Excel","Google Sheets"],
  education: "Bachelor of Engineering – Marathwada Institute of Technology, Aurangabad (July 2020)",
  // Set these two to real links if you have them deployed
  hireLink: "mailto:pavanjadhavmorning@gmail.com?subject=Opportunity%20for%20Sr%20QA%20Analyst",
  resumePdf: "#" // e.g., replace with https://your-domain.com/Pavan_Jadhav_QA_Resume.pdf
};

// ---- Small helpers ----
const $ = (s) => document.querySelector(s);
const ulFill = (arr, sel) => {
  const ul = $(sel);
  arr.forEach((t) => { const li = document.createElement("li"); li.textContent = t; ul.append(li); });
};

// ---- Render ----
document.addEventListener("DOMContentLoaded", () => {
  $("#name").textContent = data.name;
  $("#role").textContent = data.role;

  // contact links
  const contact = $("#contact");
  const mail = Object.assign(document.createElement("a"), { href: `mailto:${data.email}`, textContent: data.email });
  const phone = Object.assign(document.createElement("a"), { href: `tel:+91${data.phone}`, textContent: `+91 ${data.phone}` });
  const li = Object.assign(document.createElement("a"), { href: data.linkedin, textContent: "LinkedIn", target: "_blank", rel: "noopener" });
  contact.append(mail, phone, li);

  // summary
  $("#summary").textContent = data.summary;

  // experience
  $("#exp-project").innerHTML = `<strong>${data.experience.projectTitle}</strong> — ${data.experience.projectDesc}`;
  ulFill(data.experience.bullets, "#exp-bullets");

  // skills, tools, education
  ulFill(data.skills, "#skills");
  ulFill(data.tools, "#tools");
  $("#education").textContent = data.education;

  // CTA links
  const hire = $("#hire-me"); if (data.hireLink) hire.href = data.hireLink;
  const pdf = $("#download-resume"); if (data.resumePdf) pdf.href = data.resumePdf;

  // footer year
  $("#year").textContent = new Date().getFullYear();
});
