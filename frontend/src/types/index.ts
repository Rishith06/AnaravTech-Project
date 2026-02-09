// Core data types for the healthcare appointment system

export interface Appointment {
  id: string;
  patientName: string;
  startTime: string; // Format: "HH:MM" (e.g., "09:00")
  endTime: string;   // Format: "HH:MM" (e.g., "09:30")
  resourceId: string; // Which column (provider/room)
  color: string;     // Background color for the card
  appointmentType?: string;
  notes?: string;
}

export interface Resource {
  id: string;
  name: string;      // e.g., "MILLER EAST", "RICHEY"
  roomNumber?: string; // e.g., "19", "23"
}

export interface PatientListItem {
  id: string;
  name: string;
  time: string;      // Display time (e.g., "12:00 PM")
  status: PatientStatus;
  appointmentId?: string; // Link to appointment in calendar
}

export type PatientStatus = 
  | 'coming-up'
  | 'in-office'
  | 'checked-out'
  | 'wait-list'
  | 'no-show';

export interface PatientCategory {
  status: PatientStatus;
  label: string;
  patients: PatientListItem[];
}
