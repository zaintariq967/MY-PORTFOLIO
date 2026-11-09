/* ============================================================
   PORTFOLIO CONTENT — Muhammad Zain Tariq (freelance edition)
   This one file holds ALL the text on the site. Edit it, save, push to GitHub:
   Netlify / GitHub Pages redeploy automatically. No database, no admin login.

   ►►  WHERE TO PUT YOUR LINKS  ◄◄
   Every project has:
     github : "https://github.com/zaintariq967/YOUR-REPO"   ← source code
     demo   : "https://huggingface.co/spaces/…"             ← live app (optional)
     video  : "https://www.youtube.com/watch?v=…"           ← demo video (optional)
     report : "https://…/report.pdf"                        ← paper / report (optional)
   Leave a link as "" and its button is simply hidden.
   ============================================================ */

window.PortfolioData = {

  personal: {
    name: "Muhammad Zain Tariq",
    title: "Freelance AI / ML Engineer",
    roles: ["Deep Learning & ML Models", "Computer Vision Systems", "RAG & Document Chatbots", "Python & Edge AI Development"],
    tagline: "Computer Engineer offering practical freelance solutions in Deep Learning, Computer Vision, RAG chatbots, and Python software development — delivered with clean, documented code and focused on real results.",
    available: true,
    availableText: "Taking on new freelance projects",
    email: "zaintariq967@gmail.com",
    phone: "+92 324 9367287",
    location: "Rawalpindi, Pakistan",
    linkedin: "https://www.linkedin.com/in/mzaintariq967/",
    github: "https://github.com/zaintariq967",
    kaggle: "",
    huggingface: "",
    resume: "assets/Muhammad-Zain-Tariq-CV.pdf",

    /* ── CV / RÉSUMÉ PROFILES ──────────────────────────────────
       You have 3 specialized CV tracks:
       1) AI / ML Engineer CV
       2) Software Engineer CV
       3) Network Engineer CV

       HOW TO EDIT YOUR LINKS:
       - If using local PDF files: put your PDF files in the 'assets/' folder
         (e.g., "assets/Muhammad-Zain-Tariq-CV-AIML.pdf")
       - If using online links: paste your Google Drive, Dropbox, or OneDrive share link
         (e.g., "https://drive.google.com/file/d/YOUR_FILE_ID/view?usp=sharing")
       ─────────────────────────────────────────────────────────── */
    resumes: [
      {
        id: "aiml",
        title: "AI / ML Engineer CV",
        track: "AI & Machine Learning",
        description: "Deep Learning, Computer Vision, transfer learning, RAG chatbots, neural networks, and model evaluation.",
        icon: "brain",
        url: "assets/Muhammad-Zain-Tariq-CV-AIML.pdf",
        fileName: "Muhammad-Zain-Tariq-AIML-CV.pdf"
      },
      {
        id: "software",
        title: "Software Engineer CV",
        track: "Software & Core CS",
        description: "Python, C++, OOP, Data Structures & Algorithms, REST APIs, system and socket programming.",
        icon: "code",
        url: "assets/Muhammad-Zain-Tariq-CV-Software.pdf",
        fileName: "Muhammad-Zain-Tariq-Software-CV.pdf"
      },
      {
        id: "networking",
        title: "Network Engineer CV",
        track: "Networking & Security",
        description: "Cisco routing & switching, TCP/IP, VLANs, socket programming, network simulation, and SOC/ELK monitoring.",
        icon: "network",
        url: "assets/Muhammad-Zain-Tariq-CV-Networking.pdf",
        fileName: "Muhammad-Zain-Tariq-Networking-CV.pdf"
      }
    ],

    upwork: "",   // 👈 paste your Upwork profile URL
    fiverr: "",   // 👈 paste your Fiverr profile URL
    avatar: "assets/avatar.jpg",
    siteUrl: "",
    about:
      "I am a Computer Engineering graduate from International Islamic University Islamabad (CGPA 3.79/4.0) and the recipient of the Star of IIUI award for the highest CGPA in my class.\n\n" +
      "My core is machine learning, deep learning, NLP and computer vision, backed by a strong foundation in data structures and algorithms, OOP, computer architecture, system and socket programming, databases and networking. That lets me move comfortably between a trained model, the API around it and the hardware it runs on: from a YOLOv8 pipeline on a Raspberry Pi to a FAISS-backed RAG chatbot.\n\n" +
      "I have interned as an AI Engineer at Sybrid and as a SOC Analyst at LMKR, and led a Final Year Design Project to a Runner-Up finish. I like clean data, measurable results and software other people can actually use.",
    stats: ["3.79|CGPA / 4.0", "{projects}|Projects built", "90.49%|Best model accuracy", "2|Industry internships"],
    heroChips: ["ResNet50 · 90.49% accuracy", "Gradient Boosting · R² 0.8173", "YOLOv8 · real-time detection", "RAG · FAISS retrieval"],
    focus: ["Deep Learning & Neural Networks", "Transfer learning for medical & defect imaging", "RAG chatbots with FAISS retrieval", "Edge AI on Raspberry Pi / IoT"],
  },

  heroKeywords: ["Deep Learning", "Machine Learning", "Computer Vision", "Neural Networks", "NLP", "LLMs", "RAG", "FAISS", "Python", "Software Engineering"],

  servicesIntro: {
    eyebrow: "Services",
    title: "Freelance Services & Solutions",
    lead: "Practical, reliable freelance engineering for your AI, machine learning, and software projects. Whether you need model training, computer vision pipelines, smart document assistants, or custom Python tools, I deliver clean and well-documented work."
  },

  services: [
    {
      title: "Machine Learning & Deep Learning", icon: "brain", description: "Model training, transfer learning, and evaluation for tabular, image, or text data with transparent metrics and clean code.",
      points: ["Data cleaning, EDA & feature preparation", "Deep neural networks & transfer learning", "Clear evaluation reports (AUC, F1, Accuracy)"]
    },
    {
      title: "Computer Vision", icon: "eye", description: "Practical visual detection and classification pipelines built with CNNs, OpenCV, and YOLO backbones.",
      points: ["Object detection & tracking with YOLOv8", "Image classification & dataset annotation", "Lightweight models for Raspberry Pi / edge"]
    },
    {
      title: "RAG & Document Chatbots", icon: "chat", description: "Context-aware chatbots that answer questions over custom documents and knowledge bases using FAISS vector search.",
      points: ["Document indexing & semantic search", "Groq / Hugging Face API integration", "Interactive demo UI (Streamlit / Flask / Web)"]
    },
    {
      title: "Software & Edge Engineering", icon: "chip", description: "Python scripting, socket programming, hardware interfacing (Raspberry Pi / Arduino), and network configuration.",
      points: ["Clean Python automation & REST APIs", "IoT & embedded AI prototypes", "Cisco Packet Tracer & network topologies"]
    },
  ],

  /* ── PROJECTS ───────────────────────────────────────────────
     category decides the filter chip. Use one of:
     "Deep Learning", "Computer Vision", "GenAI & NLP", "Machine Learning", "Embedded & IoT", "Networking"
     Add `images: ["assets/shot1.png", …]` for a screenshot gallery,
     or `image: "assets/cover.png"` for the card cover.               */
  projects: [
    {
      id: "chat-detection", title: "AI Chat-Driven Object Detection Assistant", category: "Computer Vision", type: "Semester Project", period: "Jun 2025 – Jun 2026", featured: true,
      summary: "Upload a video, then talk to it: a YOLOv8 + NLP assistant that answers questions about the objects it detects.",
      description: "A real-time video analysis assistant that detects objects with YOLOv8 and OpenCV and draws annotated output. An NLP-based chatbot sits on top of the detections so users can ask conversational questions such as which objects appeared, how many, and when.\n\nThe whole workflow runs through a web interface: upload a video, analyse it, view annotated results and chat over them.",
      tech: ["Python", "YOLOv8", "OpenCV", "Flask", "spaCy", "NLP", "Matplotlib"],
      highlights: ["Real-time object detection with visual annotation", "Conversational queries over detection results", "Web interface for upload, results and chat"],
      metrics: ["Detector|YOLOv8", "Interface|Chat + video"],
      github: "",  // 👈 PASTE GitHub repo URL
      demo: "",    // 👈 live demo (Hugging Face Space / Render) — optional
      video: "", report: "", image: "", images: [],
    },
    {
      id: "corvit-rag", title: "AI-Powered Corvit System Chatbot", category: "GenAI & NLP", type: "AI Training Project", period: "Sep 2025 – Jun 2026", featured: true,
      summary: "A RAG chatbot on GPT-OSS-120B that answers questions on courses, certifications, schedules and NAVTTC programs.",
      description: "A retrieval-augmented chatbot that gives natural-language guidance about Corvit courses, certifications, schedules, NAVTTC programs and career opportunities.\n\nIt combines a structured knowledge base, embedding-based retrieval with FAISS vector search and GPT-OSS-120B, plus optional online search so answers stay current. The front end is a responsive web interface built with HTML, CSS, JavaScript and Tailwind CSS.",
      tech: ["RAG", "FAISS", "Embeddings", "GPT-OSS-120B", "Groq API", "JavaScript", "Tailwind CSS", "Python"],
      highlights: ["Structured knowledge base with semantic retrieval", "Optional online search for up-to-date institutional info", "Responsive chat UI"],
      metrics: ["LLM|GPT-OSS-120B", "Retrieval|FAISS"],
      github: "", demo: "", video: "", report: "", image: "", images: [],
    },
    {
      id: "skin-cancer", title: "Skin Cancer Classification (HAM10000)", category: "Deep Learning", type: "Research Project", period: "Aug 2026", featured: true,
      summary: "ResNet50 transfer learning that separates benign from malignant dermoscopic lesions.",
      description: "Prepared the HAM10000 dataset of 10,015 dermoscopic images using stratified splitting and binary class balancing, then trained a ResNet50 transfer-learning classifier for benign vs. malignant lesions.\n\nThe model reached 90.49% test accuracy and 0.95 AUC-ROC on the held-out test set.",
      tech: ["Python", "TensorFlow", "ResNet50", "CNN", "Transfer Learning", "Scikit-learn", "Medical Imaging"],
      highlights: ["Stratified splits and class balancing", "Evaluated with accuracy and AUC-ROC on a held-out test set"],
      metrics: ["Test accuracy|90.49%", "AUC-ROC|0.95", "Images|10,015"],
      github: "", demo: "", video: "", report: "", image: "", images: [],
    },
    {
      id: "solar-defect", title: "Solar Panel Defect Detection & Severity Estimation", category: "Deep Learning", type: "Semester Project", period: "Aug 2026", featured: true,
      summary: "Transfer-learning pipeline that inspects electroluminescence images of photovoltaic cells for defects.",
      description: "Defect classification and severity estimation on the ELPV dataset (2,624 electroluminescence images). VGG16 and ResNet50 were fine-tuned and compared inside an end-to-end pipeline covering preprocessing, data augmentation and evaluation. ResNet50 gave the best results for photovoltaic defect inspection.",
      tech: ["Python", "TensorFlow", "VGG16", "ResNet50", "Transfer Learning", "Data Augmentation"],
      highlights: ["Fine-tuned and benchmarked two CNN backbones", "Augmentation to handle limited data", "Severity estimation beyond binary classification"],
      metrics: ["Dataset|2,624 images", "Best model|ResNet50"],
      github: "", demo: "", video: "", report: "", image: "", images: [],
    },
    {
      id: "pilgrim-ai", title: "PilgrimAI: Global Analytics & Predictive Platform", category: "Machine Learning", type: "Research Project", period: "Aug 2026", featured: false,
      summary: "Streamlit platform analysing 25+ years of global pilgrimage data with ML and ANN predictors.",
      description: "A Python/Streamlit analytics platform that explores more than 25 years of global pilgrimage data and evaluates machine-learning and ANN models. A Gradient Boosting model predicts economic impact and reached an R² of 0.8173 on the hold-out test set.",
      tech: ["Python", "Streamlit", "Pandas", "Gradient Boosting", "ANN", "EDA"],
      highlights: ["Interactive dashboard for exploration", "Compared classical ML against ANN models"],
      metrics: ["R² (hold-out)|0.8173", "Data span|25+ years"],
      github: "", demo: "", video: "", report: "", image: "", images: [],
    },
    {
      id: "perception", title: "Vision-Based Autonomous Perception System", category: "Computer Vision", type: "Personal Project", period: "Jan 2026", featured: false,
      summary: "Lane detection plus YOLO object detection for autonomous driving, running live on Raspberry Pi.",
      description: "Real-time lane detection and YOLO-based object detection for an autonomous-driving prototype, deployed on a Raspberry Pi with TensorFlow Lite and a live Streamlit visualisation of the perception output.",
      tech: ["Python", "OpenCV", "YOLO", "TensorFlow Lite", "Streamlit", "Raspberry Pi"],
      highlights: ["Lane detection and object detection in one pipeline", "On-device inference with TensorFlow Lite", "Live visual dashboard"],
      metrics: ["Target|Raspberry Pi"],
      github: "", demo: "", video: "", report: "", image: "", images: [],
    },
    {
      id: "urdu-rag", title: "Urdu RAG Chatbot (Sybrid Internship)", category: "GenAI & NLP", type: "Internship Work", period: "2025", featured: false,
      summary: "A retrieval-augmented Urdu chatbot with Flask APIs and optimised NLP pipelines.",
      description: "Built during the AI Engineer internship at Sybrid: a RAG-based Urdu chatbot using LLMs, with Flask APIs and NLP pipelines optimised for better response accuracy. Also prepared ML-ready datasets by extracting and structuring agricultural data from unstructured PDF booklets.\n\nThis was company work, so the source code is private.",
      tech: ["Python", "RAG", "LLMs", "FAISS", "Flask", "NLP", "Urdu"],
      highlights: ["Urdu-language retrieval and answering", "Flask API layer", "Dataset extraction from unstructured PDFs"],
      metrics: ["Language|Urdu"],
      github: "", demo: "", video: "", report: "", image: "", images: [],
    },
    {
      id: "spam", title: "Intelligent Email Spam Detection", category: "Machine Learning", type: "Personal Project", period: "Feb 2025 – Jun 2025", featured: false,
      summary: "TF-IDF + Logistic Regression spam classifier with an interactive Gradio interface.",
      description: "An NLP spam/ham email classifier using TF-IDF features and machine-learning models, with over 95% F1-score. A Gradio interface gives real-time predictions, confidence scores and classification analytics.",
      tech: ["Python", "Scikit-learn", "NLP", "TF-IDF", "Logistic Regression", "Gradio", "Pandas"],
      highlights: ["Real-time prediction with confidence scores", "Classification analytics view"],
      metrics: ["F1-score|95%+"],
      github: "", demo: "", video: "", report: "", image: "", images: [],
    },
    {
      id: "edge-cv", title: "Real-Time Edge Computer Vision Pipeline", category: "Computer Vision", type: "Creative Lab", period: "Aug 2026", featured: false,
      summary: "Lightweight camera pipeline on Raspberry Pi 4 with grayscale and morphological processing.",
      description: "A real-time image and video capture pipeline on Raspberry Pi 4 using Picamera2. Grayscale conversion and morphological operations reduce noise and extract lightweight features while staying within the limits of edge hardware.",
      tech: ["Raspberry Pi 4", "Picamera2", "OpenCV", "Python"],
      highlights: ["Edge-based capture and processing", "Noise reduction via morphology"],
      metrics: [],
      github: "", demo: "", video: "", report: "", image: "", images: [],
    },
    {
      id: "curocart", title: "CuRoCart: Customer Assistant Robotic Cart", category: "Embedded & IoT", type: "Final Year Design Project", period: "Sep 2025 – Jun 2026", featured: true,
      summary: "An IoT shopping cart with sensor navigation, load-cell weighing and automated billing, controlled from a Flutter app.",
      description: "CuRoCart is an autonomous shopping cart that assists the customer, weighs what is added to it and builds the bill automatically.\n\nThe cart combines sensor-based navigation (IR and ultrasonic) with load-cell weight measurement through an HX711 amplifier. A Flutter mobile application shows the bill in real time and lets the shopper control the cart.\n\nThe project achieved the Runner-Up (2nd) position at the FYDP competition.",
      tech: ["Arduino UNO", "C/C++", "Flutter", "HX711 Load Cell", "IR Sensors", "Ultrasonic Sensor", "L298N", "IoT"],
      highlights: ["Sensor fusion for obstacle avoidance and navigation", "Automated billing from load-cell weight changes", "Flutter app for real-time bill monitoring and cart control"],
      metrics: ["FYDP|Runner-Up (2nd)"],
      github: "", demo: "", video: "",  // 👈 for hardware projects a demo VIDEO is the best "deployment"
      report: "", image: "", images: [],
    },
    {
      id: "fpga-firewall", title: "4-Bit Mini AI Firewall on Spartan-3E FPGA", category: "Embedded & IoT", type: "Personal Project", period: "Jan 2026", featured: false,
      summary: "Hardware packet filter on an FPGA: a rule-based FSM classifies packets as Allow, Alert or Block.",
      description: "A hardware-based firewall implemented in Verilog HDL on a Spartan-3E FPGA. A rule-based finite state machine filters 4-bit packets in real time and classifies each as Allow, Alert or Block, signalled through LED outputs.",
      tech: ["Verilog HDL", "Xilinx ISE", "FPGA (Spartan-3E)", "FSM", "Digital Design", "Hardware Security"],
      highlights: ["Rule-based FSM packet classifier", "Three-way verdict with LED indicators"],
      metrics: [],
      github: "", demo: "", video: "", report: "", image: "", images: [],
    },
    {
      id: "multi-branch", title: "Multi-Branch Network Infrastructure", category: "Networking", type: "Academic Project", period: "Dec 2024", featured: false,
      summary: "Secure two-branch network with VLANs, DHCP/DNS, WLAN and RIP routing in Cisco Packet Tracer.",
      description: "A multi-branch network designed in Cisco Packet Tracer with VLAN segmentation, DHCP and DNS services, WLAN access and RIP routing for secure inter-branch communication, planned with proper subnetting.",
      tech: ["Cisco Packet Tracer", "VLAN", "DHCP", "DNS", "WLAN", "RIP", "TCP/IP", "Subnetting"],
      highlights: ["VLAN segmentation per department", "Centralised DHCP/DNS", "RIP routing between branches"],
      metrics: [],
      github: "", demo: "", video: "", report: "", image: "", images: [],
    },
    {
      id: "tcp-chat", title: "Multi-Threaded TCP Chat Server", category: "Networking", type: "Personal Project", period: "May 2025 – Jun 2025", featured: false,
      summary: "A concurrent multi-client chat server in C with POSIX threads, private messaging and broadcast.",
      description: "A TCP-based multi-client chat server written in C using POSIX threads. It supports private messaging, broadcast commands, active-user listing, graceful disconnection and thread-safe client handling protected by mutexes.",
      tech: ["C", "TCP/IP", "Socket Programming", "POSIX Threads", "Mutexes", "Ubuntu"],
      highlights: ["Thread-per-client architecture", "Mutex-protected shared client list", "Private and broadcast messaging"],
      metrics: [],
      github: "", demo: "", video: "", report: "", image: "", images: [],
    },
  ],

  /* ── SKILLS: every skill from both portfolios + CV, grouped. icon = brain|eye|chat|chip|shield|chart|cloud|code|network|database|cpu|layers */
  skills: [
    { category: "AI & Machine Learning", icon: "brain", items: ["Machine Learning", "Deep Learning", "Neural Networks", "CNNs", "Transfer Learning", "NLP", "TensorFlow", "Scikit-learn", "Model Evaluation"] },
    { category: "LLM & Generative AI", icon: "chat", items: ["LLM APIs", "RAG", "Embeddings", "FAISS", "Vector Search", "AI Chatbots", "Prompt Engineering", "Hugging Face", "Groq API"] },
    { category: "Computer Vision", icon: "eye", items: ["OpenCV", "YOLOv8", "Image Processing", "Object Detection", "Image Classification", "VGG16 / ResNet50", "TensorFlow Lite"] },
    { category: "Data Science", icon: "chart", items: ["Pandas", "NumPy", "Matplotlib", "Seaborn", "EDA", "Data Analysis", "Kaggle", "Jupyter Notebook"] },
    { category: "Programming & CS Core", icon: "code", items: ["Python", "C++", "C", "C# / .NET", "Kotlin", "XML", "Data Structures & Algorithms", "OOP", "Computer Architecture", "System Programming", "Socket Programming", "Git / GitHub"] },
    { category: "Databases", icon: "database", items: ["SQL", "MySQL", "Database Design", "Data Modeling", "Vector Databases"] },
    { category: "AI Apps & Deployment", icon: "cloud", items: ["Streamlit", "Gradio", "Flask", "Docker", "AWS", "Netlify", "Linux / Ubuntu", "Cloud Fundamentals"] },
    { category: "Embedded & Hardware", icon: "chip", items: ["Raspberry Pi", "Arduino", "ESP32", "NVIDIA Jetson Nano", "IoT", "FPGA", "Verilog HDL", "Digital Design", "Sensors", "RFID", "Microcontrollers"] },
    { category: "Networking & Security", icon: "network", items: ["Cisco / CCNA Training", "Packet Tracer", "GNS3", "TCP/IP", "VLAN", "DHCP", "DNS", "WLAN", "RIP", "Kali Linux", "Nmap", "Burp Suite", "OWASP Top 10", "ELK Stack", "ElastiFlow"] },
  ],

  experience: [
    {
      role: "AI Engineer Intern", company: "Sybrid Pvt. Ltd. (a Lakson Group company)", location: "Pakistan", start: "Jul 2025", end: "Sep 2025", type: "Internship",
      description: ["Extracted and structured agricultural data from unstructured PDF booklets into ML-ready datasets.", "Cleaned, labeled, categorized and standardised data for ML/NLP applications and model development.", "Developed a RAG-based Urdu chatbot using LLMs, built Flask APIs and optimised NLP pipelines for better response accuracy.", "Worked with embeddings and FAISS vector search for semantic retrieval."],
      tech: ["Python", "RAG", "FAISS", "Embeddings", "NLP", "Flask"]
    },
    {
      role: "SOC Analyst Intern", company: "LMKR", location: "Islamabad, Pakistan", start: "Jul 2024", end: "Sep 2024", type: "Internship",
      description: ["Deployed ELK Stack, Filebeat and ElastiFlow NetFlow on Ubuntu using Docker for centralised log and network-traffic monitoring.", "Analysed system and network activity for suspicious patterns.", "Conducted Kali Linux penetration testing based on the OWASP Top 10 using Nmap and Burp Suite."],
      tech: ["ELK Stack", "Docker", "Ubuntu", "Kali Linux", "Nmap", "Burp Suite", "OWASP"]
    },
  ],

  education: [
    {
      degree: "BS Computer Engineering", institution: "International Islamic University Islamabad (IIUI)", start: "Sep 2022", end: "Aug 2026", grade: "CGPA 3.79 / 4.0",
      details: ["Star of IIUI Award: highest CGPA in class", "Final Year Design Project: CuRoCart (Runner-Up)"]
    },
    { degree: "FSc Pre-Engineering", institution: "Sir Syed Science College, Rawalpindi", start: "2020", end: "2022", grade: "75.18%", details: [] },
  ],

  achievements: [
    { icon: "🥈", title: "FYDP Runner-Up", subtitle: "2nd Position · Final Year Design Project", description: "Second place for CuRoCart, the Customer Assistant Robotic Cart." },
    { icon: "⭐", title: "Star of IIUI Award", subtitle: "Highest CGPA in class", description: "Recognised for the highest CGPA in the class at IIUI." },
    { icon: "⚡", title: "NASCON 2024", subtitle: "Semifinalist", description: "Reached the semifinal rounds in the Speed Wiring and Neuron Nexus events." },
  ],

  certificates: [
    { title: "The Bits and Bytes of Computer Networking", issuer: "Coursera", date: "", url: "" },
    { title: "Arduino Workshop", issuer: "Workshop", date: "", url: "" },
    { title: "Raspberry Pi Workshop", issuer: "Workshop", date: "", url: "" },
    { title: "NVIDIA Jetson Nano Workshop", issuer: "Workshop", date: "", url: "" },
  ],

  /* ── FREELANCE BLOCK ─────────────────────────────────────────
     Prices are intentionally left as "Custom quote". Replace with e.g. "from $300"
     when you decide your rates. Everything here is plain text you can change.   */
  freelance: {
    responseTime: "Replies within 24 hours",
    process: [
      { title: "Discovery", text: "A short call or chat to understand your goal, data and constraints. You get an honest view of what is feasible." },
      { title: "Proposal", text: "A clear scope, milestones, timeline and price before any work starts." },
      { title: "Build & demos", text: "I build in small steps and show working progress regularly, so there are no surprises at the end." },
      { title: "Handover", text: "Clean, documented code, an evaluation summary, a short guide to run it, and support after delivery." },
    ],
    packages: [
      {
        name: "AI Prototype", tag: "Validate an idea fast", price: "Custom quote",
        points: ["Data review & feasibility check", "Working proof of concept (model + simple UI)", "Evaluation results and next-step advice"]
      },
      {
        name: "Production Build", tag: "Most popular", price: "Custom quote", featured: true,
        points: ["End-to-end system: data, model, API, interface", "Deployment on your cloud / device", "Documentation, tests and handover session"]
      },
      {
        name: "Ongoing Support", tag: "Keep it improving", price: "Custom quote",
        points: ["Monitoring, retraining and fixes", "Feature additions on request", "Priority communication"]
      },
    ],
    faqs: [
      { q: "What kind of projects do you take?", a: "Computer vision (detection, classification, inspection), LLM and RAG chatbots, machine-learning models for tabular data, and AI on edge devices such as Raspberry Pi. If it is outside my area I will tell you honestly." },
      { q: "How long does a project take?", a: "Small prototypes are typically days to a couple of weeks; full builds depend on scope. You get a timeline in the proposal." },
      { q: "Who owns the code and the models?", a: "You do. On final payment the full source code, trained models and documentation are yours." },
      { q: "Can you sign an NDA?", a: "Yes. I am happy to sign an NDA before you share sensitive data." },
      { q: "How do we communicate and pay?", a: "Email, WhatsApp, or your tool of choice, with regular progress demos. Work is split into milestones, either directly or through Upwork / Fiverr escrow." },
      { q: "Do you provide support after delivery?", a: "Yes. Every project includes a handover and a short support window, and ongoing support is available." },
    ],
  },

  testimonials: [
    // { name: "Client name", role: "Company", quote: "What they said about working with you." },
  ],
  hidden: [],
};
