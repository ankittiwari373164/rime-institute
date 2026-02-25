import { GraduationCap, MapPin } from "lucide-react";

export const IMAGES = [
  "RIME VIEWS(1)",      
  "RIME VIEWS(2)", 
  "RIME VIEWS(3)",    
  "RIME VIEWS(4)",       
  "RIME VIEWS(5)",       
  "RIME VIEWS(6)",       
  "RIME VIEWS(7)",      
  "RIME VIEWS(8)"       
];

export const STATS = [
  {
    value: "17.5",
    label: "Acres",
    subLabel: "Campus Size",
    icon: <MapPin className="text-yellow-400" size={24} />,
  },
  {
    value: "20+",
    label: "No. of",
    subLabel: "Programmes",
    icon: <GraduationCap className="text-yellow-400" size={24} />,
  },
];

export const AUTO_PLAY_DURATION = 6000; // 6 seconds per slide
