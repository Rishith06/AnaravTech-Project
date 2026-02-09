import type { Appointment } from '../types';
import TimelineColumn from './TimelineColumn';
import AppointmentCard from './AppointmentCard';

interface AppointmentListProps {
  resourceName?: string; // e.g., "JONES"
  resourceCount?: number; // e.g., 23
  appointments: Appointment[];
  startHour: number;
  endHour: number;
  slotHeight?: number;
  width?: string;
}

const AppointmentList = ({
  resourceName = "Unknown",
  resourceCount,
  appointments,
  startHour,
  endHour,
  slotHeight = 40,
  width = '300px', 
}: AppointmentListProps) => {
  
  // Calculate relative time minutes
  const timeToMinutes = (time: string): number => {
    const [hours, minutes] = time.split(':').map(Number);
    return hours * 60 + minutes;
  };

  const getTopPosition = (startTime: string): number => {
    const gridStartMinutes = startHour * 60;
    const startMinutes = timeToMinutes(startTime);
    const minutesFromStart = startMinutes - gridStartMinutes;
    const slotsFromStart = minutesFromStart / 15; 
    return (slotsFromStart * (slotHeight / 2)); 
  };

  const getHeight = (startTime: string, endTime: string): number => {
    const duration = timeToMinutes(endTime) - timeToMinutes(startTime);
    const slots = duration / 15;
    return slots * (slotHeight / 2);
  };

  const totalSlots = (endHour - startHour) * 4;
  const totalHeight = totalSlots * (slotHeight / 2);

  return (
    <div 
      className="flex flex-col h-full border-r border-gray-300 flex-shrink-0" // Added flex-shrink-0 so it respects width
      style={{ width }}
    >
      {/* Column Header */}
      <div 
        className="flex items-center justify-between px-2 py-1 border-b border-gray-300"
        style={{ backgroundColor: '#bae6fd' , padding: '5px'}} // sky-200
      >
        <span className="font-bold text-sm" style={{ color: '#0c4a6e' }}> <b>{resourceName}</b> </span>
        {/* {resourceCount !== undefined && (
          <span className="text-gray-500 text-xs">{resourceCount}</span>
        )} */}
      </div>

      {/* Scrollable Content Area */}
      <div className="flex-1 overflow-y-auto custom-scrollbar relative">
        <div className="flex flex-row">
          {/* Timeline Column (Left) */}
          <TimelineColumn 
            startHour={startHour}
            endHour={endHour}
            slotHeight={slotHeight}
          />

          {/* Appointments Grid (Right) */}
          <div 
            className="relative bg-white flex-1" // flex-1 to fill remaining width
            style={{ height: `${totalHeight}px` }} // Removed width prop to let flex control it
          >
            {/* Background grid lines */}
            {Array.from({ length: totalSlots }).map((_, index) => (
              <div
                key={`grid-${index}`}
                className="absolute w-full border-gray-100"
                style={{
                  top: `${index * (slotHeight / 2)}px`,
                  height: `${(slotHeight / 2)}px`,
                  borderBottomWidth: index % 4 === 3 ? '1px' : '0.5px',
                  borderBottomStyle: 'solid',
                  borderColor: index % 4 === 3 ? '#e5e7eb' : '#f3f4f6',
                }}
              />
            ))}

            {/* Appointments */}
            {appointments.map((appointment) => (
              <div
                key={appointment.id}
                className="absolute"
                style={{
                  top: `${getTopPosition(appointment.startTime)}px`,
                  height: `${getHeight(appointment.startTime, appointment.endTime)}px`,
                  left: '0', 
                  right: '4px',
                }}
              >
                <AppointmentCard appointment={appointment} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppointmentList;


