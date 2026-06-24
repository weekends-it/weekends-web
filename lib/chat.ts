// Pre-filled Intercom chat messages for different CTA types.
// Passed to <ContactButton message={...}> — the text lands in the chat
// composer when the messenger opens. Edit the wording here in one place.
export const CHAT = {
  consultation:
    "Hi! I'd like to book a consultation. Some days and times that suit me are: ",
  getInTouch: "Hi! I'd like to get in touch about ",
  question: "Hi! I have a question: ",
  quote: "Hi! I'd like to get a quote. Here's what I need: ",
  getStarted: "Hi! I'd like to get started with Weekends IT. ",
  groupBooking:
    "Hi! I'd like to enquire about group tech sessions for our facility. We're a nursing home / retirement village with around [number] residents, and a few dates that could work are: ",
} as const;
