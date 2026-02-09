import type { Appointment } from '../types';

interface AppointmentCardProps {
  appointment: Appointment;
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

const AppointmentCard = ({ appointment }: AppointmentCardProps) => {
  const borderColor = darkenColor(appointment.color, 30); // Darken by 40%

  return (
    <div
      className="border-b border-gray-300 px-2 py-1 text-xs shadow-sm cursor-pointer hover:shadow-md transition-shadow h-full"
      style={{ 
        backgroundColor: appointment.color, 
        borderTop: `2px solid ${borderColor}`, 
        borderRight: `3.2px solid ${borderColor}`,
        borderRadius: '0px 10px 2px 0px', // Top-Left (0), Top-Right (20), Bottom-Right (2), Bottom-Left (0)
        borderStyle: 'solid',
        borderLeft: 'none',
        borderBottom: '1px solid #e5e7eb', // Explicitly reset bottom border to match tailwind border-gray-200 if class fails
      }} 
    >
      <div className="font-medium text-gray-800 leading-tight">
        {appointment.patientName}
      </div>
      {appointment.notes && (
        <div className="text-[10px] text-gray-600 mt-0.5">
          {appointment.notes}
        </div>
      )}
    </div>
  );
};

export default AppointmentCard;
