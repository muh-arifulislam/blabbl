// Current user data
export const currentUser = {
  id: "current",
  name: "John Doe",
  email: "john.doe@example.com",
  avatar: "/placeholder.svg?height=80&width=80",
  bio: "Software developer passionate about creating amazing user experiences. Always learning something new!",
  location: "San Francisco, CA",
  joinDate: "January 2023",
  status: "Available",
};

// Sample conversations
export const conversations = [
  {
    id: 1,
    name: "Alice Johnson",
    lastMessage: "Hey, how are you doing?",
    time: "2m",
    unread: 2,
    avatar: "/placeholder.svg?height=40&width=40",
    online: true,
  },
  {
    id: 2,
    name: "Bob Smith",
    lastMessage: "Can we meet tomorrow?",
    time: "1h",
    unread: 0,
    avatar: "/placeholder.svg?height=40&width=40",
    online: false,
  },
  {
    id: 3,
    name: "Carol Davis",
    lastMessage: "Thanks for your help!",
    time: "3h",
    unread: 1,
    avatar: "/placeholder.svg?height=40&width=40",
    online: true,
  },
];

// Friend requests
export const friendRequests = {
  received: [
    {
      id: 1,
      name: "Emma Wilson",
      avatar: "/placeholder.svg?height=40&width=40",
      mutualFriends: 3,
      time: "2h ago",
    },
    {
      id: 2,
      name: "Mike Johnson",
      avatar: "/placeholder.svg?height=40&width=40",
      mutualFriends: 1,
      time: "1d ago",
    },
  ],
  sent: [
    {
      id: 3,
      name: "Sarah Davis",
      avatar: "/placeholder.svg?height=40&width=40",
      time: "3d ago",
    },
  ],
};

// Friends list
export const friends = [
  {
    id: 1,
    name: "Alice Johnson",
    avatar: "/placeholder.svg?height=40&width=40",
    online: true,
    lastSeen: "Online",
  },
  {
    id: 2,
    name: "Bob Smith",
    avatar: "/placeholder.svg?height=40&width=40",
    online: false,
    lastSeen: "2h ago",
  },
  {
    id: 3,
    name: "Carol Davis",
    avatar: "/placeholder.svg?height=40&width=40",
    online: true,
    lastSeen: "Online",
  },
];

// Status data
export const myStatus = {
  id: "my-status",
  user: currentUser,
  statuses: [
    {
      id: 1,
      type: "text",
      content: "Working on something exciting! 🚀",
      backgroundColor: "#4F46E5",
      timestamp: "2h ago",
      views: 12,
      isViewed: false,
    },
    {
      id: 2,
      type: "image",
      content: "/placeholder.svg?height=400&width=300",
      caption: "Beautiful sunset today",
      timestamp: "5h ago",
      views: 8,
      isViewed: false,
    },
  ],
};

export const friendStatuses = [
  {
    id: "alice-status",
    user: {
      id: 1,
      name: "Alice Johnson",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    statuses: [
      {
        id: 1,
        type: "text",
        content: "Having a great day! ☀️",
        backgroundColor: "#10B981",
        timestamp: "1h ago",
        isViewed: false,
      },
    ],
    lastUpdated: "1h ago",
  },
  {
    id: "bob-status",
    user: {
      id: 2,
      name: "Bob Smith",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    statuses: [
      {
        id: 1,
        type: "image",
        content: "/placeholder.svg?height=400&width=300",
        caption: "Coffee time ☕",
        timestamp: "3h ago",
        isViewed: true,
      },
    ],
    lastUpdated: "3h ago",
  },
  {
    id: "carol-status",
    user: {
      id: 3,
      name: "Carol Davis",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    statuses: [
      {
        id: 1,
        type: "text",
        content: "Weekend vibes! 🎉",
        backgroundColor: "#F59E0B",
        timestamp: "6h ago",
        isViewed: false,
      },
    ],
    lastUpdated: "6h ago",
  },
];

// Messages
export const messages = [
  {
    id: 1,
    sender: "Alice Johnson",
    content: "Hey there! How are you doing?",
    time: "10:30 AM",
    isOwn: false,
  },
  {
    id: 2,
    sender: "You",
    content: "Hi Alice! I'm doing great, thanks for asking. How about you?",
    time: "10:32 AM",
    isOwn: true,
  },
  {
    id: 3,
    sender: "Alice Johnson",
    content:
      "I'm doing well too! Just wanted to check in and see how your project is going.",
    time: "10:33 AM",
    isOwn: false,
  },
];
