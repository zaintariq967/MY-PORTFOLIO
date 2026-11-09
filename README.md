# Muhammad Zain Tariq | AI/ML Engineering & Freelance Portfolio

A modern, responsive, client-facing portfolio website showcasing my work, technical expertise, AI/ML projects, and freelance services.

Built as a lightweight static website with a simple, maintainable architecture. All portfolio content is managed through a centralized JavaScript data file, making updates straightforward without requiring a database, backend, admin dashboard, or complex infrastructure.

**Update the content, push changes to GitHub, and let your hosting platform handle deployment automatically.**

---

## Overview

This portfolio serves as my professional online presence, helping potential clients, recruiters, and collaborators explore my technical background, projects, and freelance services.

### Key Features

- **Professional Profile:** Introduction, technical expertise, and career background.
- **Project Portfolio:** AI/ML, Deep Learning, Computer Vision, NLP, Generative AI, RAG, and IoT projects.
- **Freelance Services:** Clearly defined services, packages, workflow, and FAQs.
- **Contact Form:** Client enquiries through an integrated form service or email.
- **Project Demonstrations:** Links to GitHub repositories, live demos, and demonstration videos.
- **Freelance Platforms:** Direct links to Upwork and Fiverr profiles.
- **Booking Integration:** Optional Calendly integration for introductory meetings.
- **Testimonials:** Client feedback displayed when available.
- **Responsive Design:** Accessible across desktop, tablet, and mobile devices.
- **SEO & Social Sharing:** Metadata and social preview support.

---

## Technology Stack

| Technology                      | Purpose                                    |
| ------------------------------- | ------------------------------------------ |
| HTML5                           | Website structure                          |
| CSS3                            | Styling and responsive design              |
| JavaScript                      | Dynamic content and interactions           |
| Git & GitHub                    | Version control and source code management |
| Netlify / GitHub Pages / Vercel | Static website hosting                     |
| Formspree / Web3Forms           | Contact form submissions                   |
| Calendly                        | Optional meeting scheduling                |

---

## Project Structure

```
myportfolio/
│
├── index.html                  # Main website
│
├── js/
│   ├── data.js                 # Centralized portfolio content
│   └── config.js               # Contact and booking configuration
│
├── assets/
│   ├── avatar.jpg              # Profile image
│   └── Muhammad-Zain-Tariq-CV.pdf
│
└── README.md                   # Project documentation
```

### Centralized Content Management

The website follows a simple content-management approach:

| File           | Responsibility                                                    |
| -------------- | ----------------------------------------------------------------- |
| `index.html`   | Website layout and structure                                      |
| `js/data.js`   | All portfolio content, projects, services, testimonials, and FAQs |
| `js/config.js` | Contact form endpoint, access key, and booking URL                |
| `assets/`      | Profile image, CV, and other visual resources                     |

**Important:** All editable website content is maintained in `js/data.js`. Configuration settings such as contact form credentials and booking links are maintained separately in `js/config.js`.

No database or administrative interface is required.

---

## Getting Started

### 1. Clone the Repository

```
git clone https://github.com/zaintariq967/myportfolio.git

cd myportfolio
```

### 2. Run Locally

You can open `index.html` directly in your browser.

Alternatively, run a local development server:

```
python -m http.server 8000
```

Open:

```
http://localhost:8000
```

---

## Customization Guide

The portfolio is designed to be easy to maintain. Most updates can be completed by editing a single file.

### 1. Personal Information

Open `js/data.js` and update the `personal` section:

- Full name and professional title
- Professional introduction
- Email and contact information
- LinkedIn and GitHub profiles
- Upwork and Fiverr profile URLs
- Other relevant professional links

Use verified contact details and active profile URLs.

### 2. Projects

Add or update projects using the existing project structure.

Recommended project categories:

- Machine Learning & Deep Learning
- Computer Vision & Image Processing
- Natural Language Processing
- Generative AI & RAG Applications
- AI Automation
- IoT & Embedded Systems
- Networking & Cybersecurity

Include the following wherever applicable:

- Project title and description
- Technologies and tools
- GitHub repository
- Live demonstration
- Demonstration video
- Relevant screenshots

Empty optional links should remain hidden automatically.

### 3. Freelance Services

Customize the `freelance` section at the bottom of `js/data.js`.

Define your:

- Services and areas of specialization
- Development and delivery process
- Service packages
- Frequently asked questions
- Project communication and support terms

Keep package pricing as `Custom Quote` until your service rates are finalized.

Only publish commitments you can genuinely deliver, particularly regarding project ownership, confidentiality, delivery timelines, and post-delivery support.

### 4. Testimonials

Add genuine client feedback to:

```
testimonials: [
  // Add verified client testimonials here
]
```

The testimonials section appears automatically when entries are available.

Do not publish fabricated reviews or testimonials.

### 5. Profile Image & CV

Replace the following assets with their latest versions:

```
assets/avatar.jpg
assets/Muhammad-Zain-Tariq-CV.pdf
```

Maintain consistent professional branding across your portfolio, LinkedIn, GitHub, and freelance profiles.

---

## Contact Form Configuration

A static website cannot independently process and deliver email submissions. An external form service is required for direct inbox delivery.

Two supported options are:

### Option 1: Formspree

1. Visit [Formspree](https://formspree.io/).
2. Create an account and configure a new form.
3. Copy the generated endpoint.
4. Update `js/config.js`:

```
FORM_ENDPOINT: "https://formspree.io/f/your-form-id"
```

### Option 2: Web3Forms

1. Visit [Web3Forms](https://web3forms.com/).
2. Generate an access key.
3. Configure `js/config.js`:

```
FORM_ENDPOINT: "https://api.web3forms.com/submit",
FORM_ACCESS_KEY: "your-access-key"
```

Use only one form provider at a time.

If neither provider is configured, the contact button can fall back to opening the visitor's default email application.

**Security note:** A static website cannot keep browser-delivered configuration secrets private. Use only keys intended for public frontend use, and configure the provider's spam protection and domain restrictions where available.

### Optional: Meeting Scheduling

Integrate Calendly to allow potential clients to schedule introductory calls.

Update:

```
BOOKING_URL: "https://calendly.com/your-username/intro"
```

The booking buttons will be displayed when a valid URL is configured.

---

## Deployment

This portfolio can be deployed using any static website hosting provider.

### Option 1: GitHub Pages

1. Push the project to your GitHub repository.
2. Open repository **Settings**.
3. Navigate to **Pages**.
4. Select **Deploy from a branch**.
5. Choose `main` and `/ (root)`.
6. Save the configuration.

Your website will be available at:

```
https://zaintariq967.github.io/myportfolio/
```

### Option 2: Netlify

1. Visit [Netlify](https://www.netlify.com/).
2. Select **Add new site → Import an existing project**.
3. Connect your GitHub account.
4. Select the `myportfolio` repository.
5. Leave the build command empty.
6. Set the publish directory to `.`.
7. Deploy the website.

Netlify also supports manual deployment through its drag-and-drop deployment interface.

### Option 3: Vercel

1. Visit [Vercel](https://vercel.com/).
2. Import the GitHub repository.
3. Select **Other** as the framework preset.
4. Leave the build command empty.
5. Set the output directory to `.`.
6. Deploy.

### Automatic Deployment

Once Git integration is configured, subsequent commits pushed to the production branch automatically trigger a new deployment.

Typical workflow:

```
Edit files
    ↓
Commit changes
    ↓
Push to GitHub
    ↓
Hosting platform detects changes
    ↓
Automatic deployment
    ↓
Updated portfolio goes live
```

---

## Showcasing Projects That Require Special Environments

Not every AI, embedded, or networking project can be hosted as a conventional website. Use the most appropriate demonstration format.

| Project Category                 | Recommended Presentation                                                        |
| -------------------------------- | ------------------------------------------------------------------------------- |
| Machine Learning / Deep Learning | GitHub repository, notebooks, model results, and hosted demo                    |
| Streamlit / Gradio Applications  | Streamlit Community Cloud or Hugging Face Spaces                                |
| Flask Applications               | Hosted application or recorded demonstration                                    |
| Computer Vision / Raspberry Pi   | Demonstration video and project documentation                                   |
| Arduino / ESP32 / FPGA           | Hardware demonstration videos, circuit diagrams, and source code                |
| Robotics / IoT                   | Demonstration videos, system architecture, and project documentation            |
| Networking / Packet Tracer       | `.pkt` files, network topology diagrams, and configuration screenshots          |
| Professional / Confidential Work | An anonymized case study describing responsibilities, methodology, and outcomes |

For company-related work, respect confidentiality agreements and do not publish proprietary source code, internal documents, or sensitive information.

---

## Freelance Services

My portfolio is intended to showcase professional services in the following areas:

**AI & Machine Learning**

- Machine learning model development
- Data preprocessing and model evaluation
- Classification and regression solutions

**Computer Vision**

- Object detection and image classification
- OpenCV-based image processing
- Custom computer vision applications

**Generative AI & NLP**

- Document-based RAG chatbots
- LLM-powered applications
- NLP and text classification solutions
- AI-powered automation

**IoT & Embedded Systems**

- Arduino and ESP32-based solutions
- Sensor integration and hardware interfacing
- IoT prototyping and system integration

Project scope, technical requirements, timelines, and pricing are discussed before engagement.

---

## Freelance Launch Checklist

Use this checklist to prepare the portfolio for professional use.

- Review and finalize `js/data.js`.
- Verify contact details and professional links.
- Add your latest CV and profile image.
- Complete GitHub links for flagship projects.
- Add live demonstrations and project videos where available.
- Review freelance packages and FAQ responses.
- Configure and test the contact form.
- Configure the optional Calendly integration.
- Test responsiveness across desktop and mobile.
- Verify all navigation and external links.
- Deploy the website using GitHub Pages, Netlify, or Vercel.
- Add the live portfolio URL to LinkedIn, GitHub, and your CV.

### Recommended Freelance Launch Strategy

1. Establish a consistent professional identity across your portfolio and freelance platforms.
2. Create optimized Upwork and Fiverr profiles.
3. Develop focused service offerings around your strongest skills.
4. Prepare detailed GitHub READMEs with problem statements, methodology, results, screenshots, and installation instructions.
5. Start with small, clearly defined projects to establish client relationships and build verified reviews.
6. Provide written project scopes, deliverables, pricing, and timelines before accepting work.
7. Continuously improve your portfolio based on completed projects and genuine client feedback.

---

## Deployment & Maintenance Philosophy

This project intentionally uses a lightweight static architecture.

- No database dependency.
- No backend infrastructure.
- No admin dashboard or authentication.
- No Docker or container orchestration.
- Centralized content management.
- Git-based version control.
- Automated hosting deployment.

The objective is to maintain a professional, cost-effective, and easily maintainable portfolio without unnecessary infrastructure.

---

## Connect With Me

**Muhammad Zain Tariq**\
AI/ML Engineer | Computer Engineer

- GitHub: [https://github.com/zaintariq967](https://github.com/zaintariq967)
- LinkedIn: [https://www.linkedin.com/in/mzaintariq967/](https://www.linkedin.com/in/mzaintariq967/)

For project enquiries, collaborations, or freelance opportunities, please use the contact form available on my portfolio website.

---

*Built and maintained by Muhammad Zain Tariq.*

I can also help you review your actual `myportfolio` repository files and align the README with the implemented features so that the documentation doesn't promise anything the website doesn't currently support.
