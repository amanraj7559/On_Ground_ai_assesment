// Mock data for the Call Centre Staff Application.
// In a real app this would come from a backend API.

export const agentName = "Jordan Lee";

// List of callers currently waiting in the queue.
export const callQueue = [
  {
    id: 1,
    name: "Priya Sharma",
    phone: "(555) 123-4567",
    email: "priya.sharma@example.com",
    accountStatus: "Active",
    history: [
      "Called on 02 Oct - Billing question resolved",
      "Called on 15 Sep - Upgraded plan",
      "Called on 01 Sep - Requested invoice copy",
    ],
  },
  {
    id: 2,
    name: "Marcus Chen",
    phone: "(555) 987-6543",
    email: "marcus.chen@example.com",
    accountStatus: "Past Due",
    history: [
      "Called on 28 Sep - Payment reminder sent",
      "Called on 10 Sep - Disputed a charge",
    ],
  },
  {
    id: 3,
    name: "Aisha Khan",
    phone: "(555) 456-7890",
    email: "aisha.khan@example.com",
    accountStatus: "Active",
    history: [
      "Called on 05 Oct - Technical support, resolved",
      "Called on 20 Sep - Asked about new features",
      "Called on 02 Sep - Signed up for newsletter",
    ],
  },
  {
    id: 4,
    name: "Diego Alvarez",
    phone: "(555) 222-3333",
    email: "diego.alvarez@example.com",
    accountStatus: "Suspended",
    history: ["Called on 18 Sep - Account suspended due to non-payment"],
  },
];

// The possible statuses an agent can be in.
export const agentStatuses = ["Available", "On Call", "Break", "Offline"];

// The possible outcomes an agent can log for a call.
export const dispositionOptions = [
  "Resolved",
  "Follow-up Needed",
  "Escalated",
];
