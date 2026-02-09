interface TimelineColumnProps {
  startHour: number;    // Starting hour (e.g., 8 for 8:00 AM)
  endHour: number;      // Ending hour (e.g., 18 for 6:00 PM)
  slotHeight?: number;  // Height of each 30-min slot in pixels, default: 40
}

const TimelineColumn = ({
  startHour,
  endHour,
  slotHeight = 40,
}: TimelineColumnProps) => {
  
  const hours = Array.from({ length: endHour - startHour }, (_, i) => startHour + i);
  const slotHeightPer15Min = slotHeight / 2;
  const hourHeight = slotHeight * 2; // 2 slots of 30min per hour

  return (
    <div 
      className="flex-shrink-0 border-r border-gray-300 bg-white"
      style={{ width: '50px' }} // Narrower width as per screenshot
    >
      {hours.map((hour) => {
         const displayHour = hour > 12 ? hour - 12 : hour; // 12-hour format, no AM/PM
         return (
          <div key={hour} className="relative border-b-0 border-gray-100" style={{ height: `${hourHeight}px` }}>
            {/* Hour Tick */}
            <div className="absolute top-0 right-0 w-3 h-[2px] bg-gray-300" /> {/* Larger/darker tick for hour */}

            {/* Hour Label */}
            <div className="absolute top-0 w-full text-center text-xl font-bold text-gray-800 leading-none pr-1">
              {displayHour}
            </div>
            
            {/* Minute Markers & Ticks */}
            <>
              <div className="absolute right-0 w-2 h-[1px] bg-gray-200" style={{ top: `${slotHeightPer15Min}px` }} />
              <div 
                className="absolute w-full text-center text-[10px] text-gray-500 font-medium leading-none pr-1"
                style={{ top: `${slotHeightPer15Min}px` }}
              >
                15
              </div>
            </>
            
            <>
              <div className="absolute right-0 w-2 h-[1px] bg-gray-200" style={{ top: `${slotHeightPer15Min * 2}px` }} />
              <div 
                className="absolute w-full text-center text-[10px] text-gray-500 font-medium leading-none pr-1"
                style={{ top: `${slotHeightPer15Min * 2}px` }}
              >
                30
              </div>
            </>

            <>
              <div className="absolute right-0 w-2 h-[1px] bg-gray-200" style={{ top: `${slotHeightPer15Min * 3}px` }} />
              <div 
                className="absolute w-full text-center text-[10px] text-gray-500 font-medium leading-none pr-1"
                style={{ top: `${slotHeightPer15Min * 3}px` }}
              >
                45
              </div>
            </>
          </div>
         );
      })}
    </div>
  );
};

export default TimelineColumn;

