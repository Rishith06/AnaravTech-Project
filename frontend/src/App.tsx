import './index.css';
import AppointmentList from './components/AppointmentList';
import PatientSidebar from './components/PatientSidebar';
import { resources, appointments } from './data/dummyData';

function App() {
  const startHour = 6;
  const endHour = 21; // 6 PM
  const slotHeight = 40; // Height of 30-min block (so 15-min is 20px)

  return (
    <div className="bg-gray-100 h-screen flex flex-col overflow-hidden">
      {/* Top Full-Width Header */}

      <div className="flex flex-1 overflow-hidden">
        {/* Left Sidebar */}
        <PatientSidebar />
        
        {/* Main Content Area */}
        <div className="flex-1 flex flex-col h-full bg-white relative">
          
          {/* Multi-User Calendar View */}
          <div className="flex-1 flex flex-row overflow-x-auto min-w-[800px] h-full"> 
            {/* Timeline Column (Fixed on left of scrollable area? Ideally sticky) */} 

            {/* Dynamic Resource Columns */}
            {resources.map((resource) => {
              const resourceAppointments = appointments.filter(apt => apt.resourceId === resource.id);
              return (
                <AppointmentList 
                  key={resource.id}
                  resourceName={`${resource.name} ${resource.count}`} 
                  resourceCount={resource.count}
                  appointments={resourceAppointments}
                  startHour={startHour}
                  endHour={endHour}
                  slotHeight={slotHeight}
                  width="25%" // 5 columns -> 20% each (or min-width)
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
