import {
  Target,
  PenTool,
  Hexagon,
  Box,
  Layout,
  LucideIcon,
} from "lucide-react";

export interface Project {
  id: string;
  num: string;
  title: string;
  subtitle: string;
  category: string;
  sideText: string;
  year: string;
  role: string;
  tools: string[];
  image: string;
  description: string;
  impact: string;
  tags: string[];
  // New fields for enhanced project showcase
  liveSiteUrl?: string;
  repositoryUrl?: string;
  status?: string;
}

export interface Skill {
  name: string;
  percent: number;
  icon: LucideIcon;
}

export const SKILLS_DATA: Skill[] = [
  {
    name: "User research & ethnography",
    percent: 92,
    icon: Target,
  },
  {
    name: "UI / UX design & prototyping",
    percent: 98,
    icon: PenTool,
  },
  {
    name: "Design systems & architecture",
    percent: 95,
    icon: Hexagon,
  },
  {
    name: "Complex data visualization",
    percent: 88,
    icon: Box,
  },
  {
    name: "Interaction & motion design",
    percent: 90,
    icon: Layout,
  },
];

export const METRICS_DATA = [
  {
    num: "5+",
    label: "Years of industry exp",
  },
  {
    num: "42+",
    label: "Completed shipments",
  },
  {
    num: "28+",
    label: "Clients & ventures",
  },
];

export const PROJECT_DATA: Project[] = [
  {
    id: "01",
    num: "01",
    title: "HomeWorth",
    subtitle: "Machine learning & predictive analytics",
    category: "Machine learning & web application",
    sideText: "Predict property values with machine learning",
    year: "2025",
    role: "ML Engineer & Developer",
    tools: [
      "Python",
      "Scikit-learn",
      "Pandas",
      "NumPy",
      "Streamlit",
      "Joblib",
    ],
    image: "/images/house-price-prediction.jpeg",
    description:
      "A machine learning-based house price prediction system that analyzes housing data and applies predictive modeling to estimate property values. The project explores data preprocessing, feature engineering, model training, and evaluation to build a complete predictive analytics workflow.",
    impact:
      "Developed an end-to-end machine learning pipeline using the California Housing Dataset, comparing regression models and evaluating their predictive performance through RMSE and cross-validation.",
    tags: [
      "Machine Learning",
      "Regression",
      "Data Analysis",
      "Predictive Analytics",
    ],
    liveSiteUrl: "https://homeworthh.vercel.app/",
    repositoryUrl: "https://github.com/avadhutgiri12/HousePricePrediction",
    status: "Live",
  },
  {
    id: "02",
    num: "02",
    title: "CareSight AI",
    subtitle: "Real-time fall detection",
    category: "Computer vision & AI safety",
    sideText: "Detect falls faster. Enable timely alerts.",
    year: "2025",
    role: "Machine Learning & Full-Stack Developer",
    tools: [
      "Python",
      "YOLOv8",
      "PyTorch",
      "OpenCV",
      "FastAPI",
      "WebSockets",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "SMTP Email",
    ],
    image: "/images/fall-detection.jpeg",
    description:
      "A real-time fall detection system for elderly care and safety monitoring. Stream a live webcam or upload a video, and a YOLOv8 pose model tracks each person frame by frame, flags a fall the moment it happens, and emails an alert to a chosen contact. A Next.js dashboard on Vercel talks to a FastAPI + YOLOv8 API on Render over HTTPS and secure WebSockets.",
    impact:
      "Shipped an end-to-end product with a live public demo: real-time webcam detection over WebSockets, batch video analysis with progress tracking, and rate-limited email alerts (one per minute per session). Tuned the ML backend to run on Render's 512 MB free tier with CPU-only PyTorch, serialized inference, streamed uploads and automatic cleanup.",
    tags: [
      "Fall Detection",
      "YOLOv8 Pose",
      "Computer Vision",
      "Real-Time Streaming",
      "Email Alerts",
      "Elderly Care",
    ],
    liveSiteUrl: "https://caresightai.vercel.app",
    repositoryUrl: "https://github.com/avadhutgiri12/fall-detection",
    status: "Live",
  },
  {
    id: "03",
    num: "03",
    title: "LibraryHub",
    subtitle: "Library management system",
    category: "Web application & admin dashboard",
    sideText: "Keep a library catalogue in one place",
    year: "2026",
    role: "Front-End Developer",
    tools: [
      "Next.js 16",
      "React 19",
      "TypeScript",
      "Tailwind CSS v4",
      "SheetJS",
      "lucide-react",
      "localStorage",
    ],
    image: "/images/libraryhub-dashboard.png",
    description:
      "A library management app built as a demo for a presentation. An admin signs in, sees the total book count on a dashboard, and adds, edits, views and deletes books from the catalogue. Books can also be bulk-imported from an Excel or CSV file. Everything is stored in the browser's localStorage, so it runs with no backend.",
    impact:
      "A working admin flow from sign-in to catalogue: search by title or author, filter by category and availability, and a bulk importer that reads messy spreadsheets. It works out which column is which from the headers and the data itself, then shows the mapping before anything is imported.",
    tags: [
      "Admin login with demo credentials",
      "Add, edit, view and delete books",
      "Search by title or author",
      "Filter by category and availability",
      "Excel / CSV bulk import",
      "No backend (localStorage)",
    ],
    repositoryUrl:
      "https://github.com/avadhutgiri12/library-management-system",
    status: "Demo",
  },
];
