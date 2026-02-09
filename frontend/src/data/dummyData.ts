
export interface Resource {
  id: string;
  name: string; // e.g., "JONES"
  count: number; // e.g., 23
}

export interface Appointment {
  id: string;
  patientName: string;
  startTime: string; // HH:mm (24h)
  endTime: string;   // HH:mm (24h)
  resourceId: string;
  color: string;
  notes?: string;
}

export const resources: Resource[] = [
  { id: 'jones', name: 'JONES', count: 7 },
  { id: 'miller_east', name: 'MILLER EAST', count: 6 },
  { id: 'richey', name: 'RICHEY', count: 7 },
  { id: 'tracey', name: 'TRACEY', count: 5 },
  { id: 'nurse_east', name: 'NURSE EAST', count: 8 },
];

export const appointments: Appointment[] = [
  // JONES Column - Balanced Day
  { id: 'j1', resourceId: 'jones', startTime: '08:00', endTime: '09:00', patientName: 'BIANCHI, BRENDA', color: '#FFFFBA' }, // Yellow - 1h
  { id: 'j2', resourceId: 'jones', startTime: '09:30', endTime: '10:15', patientName: 'JONES, ABERNATHY A', color: '#BAFFC9' }, // Green - 45m
  { id: 'j3', resourceId: 'jones', startTime: '10:45', endTime: '11:45', patientName: 'VERSCHAVE, MARY', color: '#FFB3BA' }, // Pink - 1h
  { id: 'j4', resourceId: 'jones', startTime: '12:00', endTime: '12:30', patientName: 'CARLSON, JODIE', color: '#BAE1FF' }, // Blue - 30m
  { id: 'j5', resourceId: 'jones', startTime: '13:30', endTime: '14:30', patientName: 'MARTIN, JACK H', color: '#FFDFBA' }, // Orange - 1h
  { id: 'j6', resourceId: 'jones', startTime: '15:00', endTime: '15:45', patientName: 'VONDERHEIDE, RON', color: '#E0BBE4' }, // Purple - 45m
  { id: 'j7', resourceId: 'jones', startTime: '16:00', endTime: '17:00', patientName: 'ABBOTT, BRIAN', color: '#BAFFC9' }, // Green - 1h

  // MILLER EAST Column - Interleaved
  { id: 'm1', resourceId: 'miller_east', startTime: '08:30', endTime: '09:30', patientName: 'DURANT, OLIVIA', color: '#FFB3BA' }, // Pink - 1h
  { id: 'm2', resourceId: 'miller_east', startTime: '10:00', endTime: '10:45', patientName: 'ELOMRABI, SAMUEL', color: '#BAE1FF' }, // Blue - 45m
  { id: 'm3', resourceId: 'miller_east', startTime: '11:00', endTime: '12:30', patientName: 'VASQUEZ, GINGER', color: '#FFFFBA' }, // Yellow - 1.5h
  { id: 'm4', resourceId: 'miller_east', startTime: '13:00', endTime: '14:00', patientName: 'MOLINA, LILA', color: '#BAFFC9' }, // Green - 1h
  { id: 'm5', resourceId: 'miller_east', startTime: '14:30', endTime: '15:15', patientName: 'GARDNER, DIANE', color: '#E0BBE4' }, // Purple - 45m
  { id: 'm6', resourceId: 'miller_east', startTime: '15:45', endTime: '16:45', patientName: 'LONG, KRISTI', color: '#FFDFBA' }, // Orange - 1h

  // RICHEY Column - Early Start
  { id: 'r1', resourceId: 'richey', startTime: '07:30', endTime: '08:15', patientName: 'MOORE, LISA', color: '#E0BBE4' }, // Purple - 45m
  { id: 'r2', resourceId: 'richey', startTime: '08:30', endTime: '09:15', patientName: 'FERNANDEZ, BRIAN', color: '#FFDFBA' }, // Orange - 45m
  { id: 'r3', resourceId: 'richey', startTime: '09:30', endTime: '10:30', patientName: 'EHRMAN, BECKY', color: '#FFB3BA' }, // Pink - 1h (gap 15m)
  { id: 'r4', resourceId: 'richey', startTime: '11:00', endTime: '11:45', patientName: 'INGRAM, BRIAN', color: '#BAE1FF' }, // Blue - 45m
  { id: 'r5', resourceId: 'richey', startTime: '12:00', endTime: '13:00', patientName: 'GARDNER, DIANE', color: '#FFFFBA' }, // Yellow - 1h
  { id: 'r6', resourceId: 'richey', startTime: '13:00', endTime: '14:00', patientName: 'GEDDES, BRIAN', color: '#BAFFC9' }, // Green - 1.5h
  { id: 'r7', resourceId: 'richey', startTime: '15:30', endTime: '16:30', patientName: 'LONG, KRISTI', color: '#FFDFBA' }, // Orange - 1h

  // TRACEY Column - Sparse
  { id: 't1', resourceId: 'tracey', startTime: '09:00', endTime: '09:45', patientName: 'HOLLAND, TERRI', color: '#FFB3BA' }, // Pink - 45m
  { id: 't2', resourceId: 'tracey', startTime: '10:00', endTime: '11:00', patientName: 'NULL, CLARA', color: '#F3F4F6' }, // Gray/White - 1h
  { id: 't3', resourceId: 'tracey', startTime: '11:30', endTime: '12:15', patientName: 'PACA, GINA', color: '#BAFFC9' }, // Green - 45m
  { id: 't4', resourceId: 'tracey', startTime: '13:00', endTime: '14:30', patientName: 'SCHNEIDER, ALICIA', color: '#E0BBE4' }, // Purple - 1.5h
  { id: 't5', resourceId: 'tracey', startTime: '15:00', endTime: '16:00', patientName: 'ADHALLAH, MATTHEW', color: '#BAE1FF' }, // Blue - 1h

  // NURSE EAST Column - Detailed
  { id: 'n1', resourceId: 'nurse_east', startTime: '08:00', endTime: '08:45', patientName: 'LUNDY, JULIE', color: '#BAE1FF' }, // Blue - 45m
  { id: 'n2', resourceId: 'nurse_east', startTime: '09:00', endTime: '09:45', patientName: 'HARRIS, KATHY', color: '#FFFFBA' }, // Yellow - 45m
  { id: 'n3', resourceId: 'nurse_east', startTime: '10:00', endTime: '11:00', patientName: 'GEDDES, BRIAN', color: '#FFB3BA' }, // Pink - 1h
  { id: 'n4', resourceId: 'nurse_east', startTime: '11:15', endTime: '12:00', patientName: 'ESQUIVEL, HEIDI', color: '#BAFFC9' }, // Green - 45m
  { id: 'n5', resourceId: 'nurse_east', startTime: '12:30', endTime: '13:00', patientName: 'DETWILER, KIM', color: '#FFB3BA' }, // Pink - 30m
  { id: 'n6', resourceId: 'nurse_east', startTime: '13:30', endTime: '14:15', patientName: 'WHITE, MICHELLE A', color: '#FFFFBA' }, // Yellow - 45m
  { id: 'n7', resourceId: 'nurse_east', startTime: '14:30', endTime: '15:30', patientName: 'STOLFUS, LINDSAY', color: '#FFDFBA' }, // Orange - 1h
  { id: 'n8', resourceId: 'nurse_east', startTime: '16:00', endTime: '16:45', patientName: 'PACA, MOBASHA', color: '#E0BBE4' }, // Purple - 45m
];
