
import React, { useState } from 'react';

// Types for the sidebar items
interface SidebarItem {
  id: string;
  name: string;
  detail: string;
  time: string;
  duration?: string;
  status: 'comingUp' | 'inOffice' | 'checkedOut' | 'waitList';
  color: string; // Tailwind border class
  hexBg?: string; // Inline hex background
  hexBorder?: string; // Inline hex border top
}

interface SidebarSection {
  title: string;
  items: SidebarItem[];
  bgColor: string; // Header/Accent color
}

const darkenColor = (hex: string, percent: number) => {
  let num = parseInt(hex.replace('#', ''), 16),
  amt = Math.round(2.55 * percent),
  R = (num >> 16) - amt,
  B = ((num >> 8) & 0x00ff) - amt,
  G = (num & 0x00ff) - amt;
  return (
    '#' +
    (
      0x1000000 +
      (R < 255 ? (R < 1 ? 0 : R) : 255) * 0x10000 +
      (B < 255 ? (B < 1 ? 0 : B) : 255) * 0x100 +
      (G < 255 ? (G < 1 ? 0 : G) : 255)
    )
      .toString(16)
      .slice(1)
  );
};

const dummySidebarData: SidebarSection[] = [
  {
    title: 'Coming Up',
    bgColor: '#f3f4f6', // Grey-100 Header
    items: [
      { id: '1', name: 'BRADFORD, JIM', detail: 'PT RE-EVAL', time: '12:00 PM', duration: '20 min', status: 'comingUp', color: 'border-l-4 border-red-500', hexBg: '#FFB3BA' },
      { id: '2', name: 'ADAMS, MARIE J', detail: 'IMMUNIZATIONS ONLY', time: '12:15 PM', duration: '10 min', status: 'comingUp', color: 'border-l-4 border-blue-500', hexBg: '#BAE1FF' },
      { id: '3', name: 'CAMPBELL, LISA C', detail: 'WCC - 24 MOS', time: '1:30 PM', duration: '15 min', status: 'comingUp', color: 'border-l-4 border-orange-500', hexBg: '#FFDFBA' },
      { id: '4', name: 'HANSBERRY, BETTY', detail: 'CONSULTATION', time: '1:45 PM', duration: '30 min', status: 'comingUp', color: 'border-l-4 border-purple-500', hexBg: '#E0BBE4' },
      { id: '5', name: 'ROBINSON, TRACIE', detail: 'MENTAL HEALTH EVAL', time: '2:15 PM', duration: '30 min', status: 'comingUp', color: 'border-l-4 border-pink-500', hexBg: '#FFB3BA' },
    ]
  },
  {
    title: 'In Office',
    bgColor: '#f3f4f6', // Grey header
    items: [
      { id: '6', name: 'BIANCHI, BRENDA', detail: 'FOLLOW UP', time: '8:00 AM', duration: '15 min', status: 'inOffice', color: 'border-l-4 border-yellow-500', hexBg: '#FFFFBA' },
       { id: '7', name: 'JONES, ABERNATHY A', detail: 'NP - NEW PATIENT', time: '8:15 AM', duration: '30 min', status: 'inOffice', color: 'border-l-4 border-green-500', hexBg: '#BAFFC9' },
    ]
  },
  {
    title: 'Checked Out',
    bgColor: '#f3f4f6',
    items: []
  },
  {
    title: 'On Wait List',
    bgColor: '#f3f4f6',
    items: []
  }
];

const PatientSidebar = () => {
  const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>({
    'Coming Up': true,
    'In Office': true,
    'Checked Out': false,
    'On Wait List': false,
  });

  const toggleSection = (title: string) => {
    setExpandedSections(prev => ({ ...prev, [title]: !prev[title] }));
  };

  return (
    <div 
      className="bg-white flex flex-col h-full border-r border-gray-300 flex-shrink-0"
      style={{ width: '17%', minWidth: '17%' }} 
    >
           
      {/* Sections List */}
      <div className="flex-1 overflow-y-auto custom-scrollbar">
        {dummySidebarData.map((section) => (
          <div key={section.title} className="border-b border-gray-200" >
            {/* Section Header */}
            <div 
              className="px-3 py-2 flex items-center justify-between cursor-pointer hover:bg-gray-100"
              style={{ backgroundColor: section.bgColor , padding: '5px 0px' }} // Now using section.bgColor (grey)
              onClick={() => toggleSection(section.title)}
            >
              <div className="flex items-center space-x-2">
                 <span className={`transform transition-transform ${expandedSections[section.title] ? 'rotate-90' : ''}`}>
                   ▶
                 </span>
                 <span className="font-bold text-gray-700 text-sm">{section.title}</span>
              </div>
            </div>

            {/* Section Items */}
            {expandedSections[section.title] && (
              <div className="bg-white">
                {section.items.map((item) => (
                  <div 
                    key={item.id} 
                    className={`p-2 border-b border-gray-100 hover:bg-gray-50 cursor-pointer ${item.color} my-1`}
                    style={{ 
                      backgroundColor: item.hexBg,
                      borderTop: item.hexBg ? `3px solid ${darkenColor(item.hexBg, 30)}` : undefined, // Using darken function
                    }}
                  >
                    <div className="flex justify-between items-start" style={{padding: '4px 0px' }}>
                      <div className="flex-1">
                        <div className="font-bold text-gray-800 text-xs truncate">{item.name}</div>
                        <div className="text-gray-600 text-[10px] uppercase truncate">{item.detail}</div>
                      </div>
                      <div className="text-right ml-2 flex flex-col items-end min-w-[50px]">
                        {item.duration && <div className="text-gray-500 text-[10px]">{item.duration}</div>}
                        <div className="font-medium text-gray-700 text-[10px]">{item.time}</div>
                      </div>
                    </div>
                  </div>
                ))}
                {section.items.length === 0 && (
                   <div className="p-2 text-xs text-gray-400 italic text-center">No patients</div>
                )}
              </div>
            )}
          </div>
        ))}
      </div>
      
      {/* Bottom Actions/Status */}
      <div className="p-2 border-t border-gray-200 bg-gray-50 text-xs flex justify-between">
          <div className="flex items-center space-x-1 text-gray-600">
            <span className="w-2 h-2 rounded-full bg-green-500"></span>
            <span>Online</span>
          </div>
          <button className="text-blue-600 hover:underline">Settings</button>
      </div>
    </div>
  );
};

export default PatientSidebar;
