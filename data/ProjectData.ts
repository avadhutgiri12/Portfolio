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
    name: "USER RESEARCH & ETHNOGRAPHY",
    percent: 92,
    icon: Target,
  },
  {
    name: "UI / UX DESIGN & PROTOTYPING",
    percent: 98,
    icon: PenTool,
  },
  {
    name: "DESIGN SYSTEMS & ARCHITECTURE",
    percent: 95,
    icon: Hexagon,
  },
  {
    name: "COMPLEX DATA VISUALIZATION",
    percent: 88,
    icon: Box,
  },
  {
    name: "INTERACTION & MOTION DESIGN",
    percent: 90,
    icon: Layout,
  },
];

export const METRICS_DATA = [
  {
    num: "5+",
    label: "YEARS OF INDUSTRY EXP",
  },
  {
    num: "42+",
    label: "COMPLETED SHIPMENTS",
  },
  {
    num: "28+",
    label: "CLIENTS & VENTURES",
  },
];

export const PROJECT_DATA: Project[] = [
  {
    id: "01",
    num: "01",
    title: "StoreWay",
    subtitle: "Hyperlocal Commerce & Merchant OS",
    category: "E-Commerce & Logistics",
    sideText: "DISTRIBUTED RETAIL & AI-DRIVEN ONBOARDING",
    year: "2026",
    role: "Lead Full-Stack Architect & Product Designer",
    tools: [
      "Next.js",
      "React",
      "Firebase / Firestore",
      "Google Maps API",
      "Tesseract OCR",
      "Tailwind CSS",
    ],
    image: "images/storeway.png",
    description:
      "StoreWay is a hyperlocal digital commerce platform designed to empower neighborhood retailers by bridging the gap between local brick-and-mortar stores and modern online shoppers. Built with Next.js, Firebase, and the Google Maps API, it creates a distributed retail network where customers can seamlessly discover nearby shops, browse localized inventories, and place orders for on-demand pickup or rapid local delivery without routing through centralized warehouses.",
    impact:
      "Cut retailer onboarding time by 85% via automated OCR invoice parsing and enabled sub-30-minute hyperlocal fulfillment across pilot neighborhood clusters.",
    tags: [
      "Hyperlocal E-Commerce",
      "Retail Tech",
      "OCR Onboarding",
      "Geospatial UI",
      "Distributed Logistics",
    ],
    liveSiteUrl: "https://homeworthh.vercel.app/",
    repositoryUrl: "https://github.com/avadhutgiri12/StoreWay",
    status: "Live",
  },
  {
    id: "02",
    num: "02",
    title: "HomeWorth",
    subtitle: "MACHINE LEARNING & PREDICTIVE ANALYTICS",
    category: "MACHINE LEARNING & WEB APPLICATION",
    sideText: "PREDICT PROPERTY VALUES WITH MACHINE LEARNING",
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
    image: "images/house-price-prediction.jpeg",
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
    id: "03",
    num: "03",
    title: "Real-Time Face Detection System",
    subtitle: "AI-POWERED COMPUTER VISION",
    category: "COMPUTER VISION & DEEP LEARNING",
    sideText: "SEEING THE WORLD THROUGH COMPUTER VISION",
    year: "2025",
    role: "Machine Learning Developer",
    tools: [
      "Python",
      "YOLO",
      "OpenCV",
      "Computer Vision",
    ],
    image: "images/ai-face-detection.jpeg",
    description:
      "An AI-powered face detection system built using the YOLO object detection model. The system analyzes visual input, identifies faces, and draws bounding boxes around detected faces, demonstrating the practical application of deep learning and computer vision.",
    impact:
      "Implemented a YOLO-based face detection pipeline capable of locating faces in visual input and displaying detection results with bounding boxes.",
    tags: [
      "YOLO",
      "Face Detection",
      "Deep Learning",
      "Computer Vision",
    ],
    liveSiteUrl: "https://homeworthh.vercel.app/",
    repositoryUrl: "https://github.com/avadhutgiri12/HousePricePrediction",
    status: "Local",
  },
  {
    id: "04",
    num: "04",
    title: "AI-Powered Fall Detection System",
    subtitle: "INTELLIGENT MONITORING & ALERTS",
    category: "COMPUTER VISION & AI SAFETY",
    sideText: "DETECT FALLS FASTER. ENABLE TIMELY ALERTS.",
    year: "2025",
    role: "Machine Learning Developer",
    tools: [
      "Python",
      "YOLO",
      "OpenCV",
      "Computer Vision",
      "Email Automation",
    ],
    image: "images/fall-detection.jpeg",
    description:
      "An AI-powered fall detection system designed to identify when a person falls and automatically send an email alert. By combining computer vision with automated notifications, the system demonstrates how AI can support safety monitoring and help communicate potential emergencies.",
    impact:
      "Implemented an automated fall detection workflow that identifies potential falls and triggers email notifications, demonstrating the integration of computer vision and alert automation.",
    tags: [
      "Fall Detection",
      "YOLO",
      "Computer Vision",
      "Email Automation",
      "AI Safety",
    ],
    liveSiteUrl: "https://homeworthh.vercel.app/",
    repositoryUrl: "https://github.com/avadhutgiri12/HousePricePrediction",
    status: "Local",
  },
];