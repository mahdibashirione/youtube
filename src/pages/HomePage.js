import {
  RiWindow2Line,
  RiLineChartLine,
  RiShieldCheckLine,
} from "react-icons/ri";
import {
  FiChevronRight,
  FiHardDrive,
  FiDroplet,
  FiFileText,
  FiWifi,
  FiThumbsUp,
} from "react-icons/fi";

const HomePage = () => {
  
  const ANALTYTICS = [
    {
      id: 1,
      label: "Dashboard",
      href: "/dashboard",
      icon: <RiWindow2Line className="text-lg" />,
    },
    {
      id: 2,
      label: "Performance",
      href: "/performance",
      icon: <RiLineChartLine className="text-lg" />,
    },
  ];
  const CONTENT = [
    {
      id: 1,
      label: "Guides",
      href: "/guides",
      icon: <FiFileText className="text-lg" />,
    },
    {
      id: 2,
      label: "Hotspots",
      href: "/hotspots",
      icon: <FiWifi className="text-lg" />,
    },
    {
      id: 3,
      label: "Checklist",
      href: "/checklist",
      icon: <RiShieldCheckLine className="text-lg" />,
    },
    {
      id: 4,
      label: "NPS",
      href: "/nps",
      icon: <FiThumbsUp className="text-lg" />,
    },
  ];
  const CUSTOMIZATION = [
    {
      id: 1,
      label: "Segments",
      href: "/segments",
      icon: <FiHardDrive className="text-lg" />,
    },
    {
      id: 2,
      label: "Themes",
      href: "/themes",
      icon: <FiDroplet className="text-lg" />,
    },
  ];

  return <main></main>;
};

export default HomePage;
