// HTTP Status Codes
export const HTTP_STATUS = {
  OK: 200,
  CREATED: 201,
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  CONFLICT: 409,
  INTERNAL_SERVER_ERROR: 500,
  SERVICE_UNAVAILABLE: 503,
} as const;

// Error Messages
export const ERROR_MESSAGES = {
  NETWORK_ERROR: "Network error. Please check your connection.",
  SERVER_ERROR: "Server error. Please try again later.",
  INVALID_EMAIL: "Please enter a valid email address.",
  REQUIRED_FIELD: "This field is required.",
  EMAIL_ALREADY_SUBSCRIBED: "This email is already subscribed.",
  INVALID_FORM: "Please fill in all required fields.",
} as const;

// Success Messages
export const SUCCESS_MESSAGES = {
  LEAD_SUBMITTED:
    "Thank you! We received your message and will contact you soon.",
  NEWSLETTER_SUBSCRIBED: "Successfully subscribed to the newsletter!",
  FORM_SUBMITTED: "Form submitted successfully!",
} as const;
