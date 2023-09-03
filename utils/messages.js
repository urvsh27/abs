const generalMessages = {
  dbConnectionSuccess : 'Postgresql connected successfully.',
  dbConnectionFail : 'Unable to connect to the database.',
  dbSyncSuccess : 'Database synced.',
  welcomeMessage : 'Welcome to the Appointment Scheduling mern web app',
  jwtTokenRequired : 'Authorization token required.',
  jwtTokenExpired : 'JWT token expired.',
  unableToVerifyJwtToken : 'Unable to verify jwt token.',
};

const userMessages = {
  userRegisterSuccess: 'User registered successfully.',
  userRegisterFail: 'User registration failed, please try again later.',
  userAlreadyExists: 'User already exists with this email address.',
  userNotFound : 'User not found with this email address.',
  userLoginSuccess : 'User login successfully.',
  userLoginFailure : 'User login failed, please check email and password.',
};

const dateTimeMessages = {
  invalidDate : 'You have selected Invalid date (past date).',
  invalidStartTime : 'Start time should be 08:00 or more.',
  invalidEndTime : 'End time should be 20:00 or less.',
};

const appointmentMessages = {
  notAllowedToScheduleAppointment : 'You are not allowed to schedule an appointment with yourself.',
  appointmentsDetailsNotFound : 'Appointments details not found. Please try again later.',
  appointmentsDetailsFound : 'Appointments details found successfully.',
};

module.exports = {
  generalMessages,
  userMessages,
  dateTimeMessages,
  appointmentMessages,
};
