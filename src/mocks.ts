import { Comment, Feature, Release, User, Notification } from "./types.ts";

export const mockAuthor: User = {
  id: "1",
  name: "Allan Kim",
};

export const commentJohnDoe: Comment = {
  id: "1",
  author: { id: "u1", name: "John Doe" },
  date: Date.now() - 86400000,
  text: "Impressive update! This adds some neat functionality we've been looking forward to.",
};

export const commentSarahSmith: Comment = {
  id: "2",
  author: { id: "u2", name: "Sarah Smith" },
  date: Date.now() - 43200000,
  text: "Excited to see how these changes improve the overall experience.",
};

export const commentMichaelBrown: Comment = {
  id: "3",
  author: { id: "u3", name: "Michael Brown" },
  date: Date.now() - 10800000,
  text: "Nice release. The team did a great job addressing some key issues here.",
};

export const commentEmilyDavis: Comment = {
  id: "4",
  author: { id: "u4", name: "Emily Davis" },
  date: Date.now() - 7200000,
  text: "Looking forward to testing the new features! These seem well-thought-out.",
};

export const commentDavidWilson: Comment = {
  id: "5",
  author: { id: "u5", name: "David Wilson" },
  date: Date.now() - 3600000,
  text: "It’s great to see these improvements finally rolled out. This will make a difference!",
};

export const mockNotification: Notification = {
  id: "1",
  title: "Datahub 2.4 is updated with your feature request!",
  date: new Date().getTime(),
  read: false,
};

export const mockReadNotification: Notification = {
  ...mockNotification,
  read: true,
};

export const mockFeatureRealTimeNotifications: Feature = {
  name: "DH-215",
  author: mockAuthor,
  id: "CSUSE0045238",
  description:
    "A notification system to automatically notify customers of updates and releases, with customizable options for topics of interest, such as security updates and new features.",
  status: "proposed",
  likes: 45,
  dislikes: 2,
  comments: [commentSarahSmith, commentJohnDoe, commentSarahSmith],
  children: [],
};

export const mockFeatureEnhancementTracking: Feature = {
  name: "DH-432",
  author: mockAuthor,
  id: "CSUSE0013824",
  description:
    "An interface for customers to track their change requests, with visual milestone tracking and priority labels to enhance navigation.",
  status: "in progress",
  likes: 30,
  dislikes: 1,
  comments: [commentSarahSmith, commentDavidWilson, commentEmilyDavis],
  children: [],
};

export const mockFeatureInteractiveDocs: Feature = {
  name: "DH-540",
  author: mockAuthor,
  id: "CSUSE0073452",
  description:
    "Enhanced documentation with visual indicators of recent changes, hints for new features, and an AI assistant to guide customers based on queries.",
  status: "planned",
  likes: 50,
  dislikes: 3,
  comments: [commentSarahSmith, commentDavidWilson],
  children: [],
};

export const mockFeatureBulkPermissions: Feature = {
  name: "DH-120",
  author: mockAuthor,
  id: "CSUSE0076346",
  description:
    "An interface to manage access and permissions in bulk for all consumption points, with quick switching between roles (e.g., vendor, third party).",
  status: "review",
  likes: 25,
  dislikes: 0,
  comments: [commentJohnDoe],
  children: [mockFeatureInteractiveDocs, mockFeatureEnhancementTracking],
};

export const mockFeaturePreferenceAnalytics: Feature = {
  name: "DH-700",
  author: mockAuthor,
  id: "CSUSE0065213",
  description:
    "Interactive forms to gather user feedback and preferences to better understand customer needs and engage them in improvement processes.",
  status: "proposed",
  likes: 40,
  dislikes: 1,
  comments: [commentEmilyDavis, commentMichaelBrown],
  children: [],
};

export const mockFeatureReleaseTimeline: Feature = {
  name: "DH-50",
  author: mockAuthor,
  id: "CSUSE0009323",
  description:
    "A visual timeline of upcoming releases, allowing customers to filter by topics of interest, along with an accessible change history.",
  status: "planned",
  likes: 60,
  dislikes: 2,
  comments: [commentDavidWilson, commentMichaelBrown],
  children: [],
};

export const mockRelease24: Release = {
  id: "RELEASE-24",
  name: "Datahub 2.4",
  description:
    "Datahub will be updated to version 2.4 on May 13, 2025. The Datahub 2.3 version update contains changes to Datahub processes and functionality listed below, as well as bug fixes. The version also contains improvements to the Datahub CMS product.",
  author: mockAuthor,
  type: "Release",
  tags: ["Accounting", "Retrospective", "Netting", "Balance", "Validation"],
  date: new Date("2024-11-09").getTime(),
  features: [mockFeatureRealTimeNotifications, mockFeatureEnhancementTracking],
  comments: [commentDavidWilson, commentMichaelBrown],
  downloadUrl: "https://google.com",
};

export const mockRelease23: Release = {
  id: "RELEASE-23",
  name: "Datahub 2.3",
  description:
    "Datahub will be updated to version 2.3 on Tuesday November 12, 2024. The Datahub 2.3 version update contains changes to Datahub processes and functionality listed below, as well as bug fixes. The version also contains improvements to the Datahub CMS product.",
  author: mockAuthor,
  type: "Release",
  tags: [
    "Reporting",
    "Monitoring",
    "Agreement",
    "Data Protection",
    "Calculations",
    "Transactions",
  ],
  date: new Date("2024-10-20").getTime(),
  features: [
    mockFeaturePreferenceAnalytics,
    mockFeatureRealTimeNotifications,
    mockFeatureEnhancementTracking,
  ],
  comments: [commentDavidWilson, commentMichaelBrown],
  downloadUrl: "https://google.com",
};

export const mockRelease22x: Release = {
  id: "RELEASE-22X",
  name: "Datahub 2.2.X",
  description:
    "Datahub version 2.2 has been supplemented during 2024, after the go-live. Below is a summary of the changes made.",
  author: mockAuthor,
  type: "Release",
  tags: [
    "Law Compliance",
    "Balance Agreements",
    "Reporting",
    "Authorization",
    "Product Taxation",
  ],
  date: new Date("2024-10-10").getTime(),
  features: [
    mockFeatureReleaseTimeline,
    mockFeaturePreferenceAnalytics,
    mockFeatureBulkPermissions,
  ],
  comments: [commentJohnDoe, commentSarahSmith],
  downloadUrl: "https://google.com",
};

export const mockRelease21: Release = {
  id: "RELEASE-21",
  name: "Datahub 2.1",
  description:
    "Datahub 2.1 version update was done on September 19, 2023 (Tuesday).",
  author: mockAuthor,
  type: "Release",
  tags: [
    "Agreement",
    "Calculations",
    "Reporting",
    "Authorization",
    "Message Management",
  ],
  date: new Date("2024-01-19").getTime(),
  features: [
    mockFeatureBulkPermissions,
    mockFeaturePreferenceAnalytics,
    mockFeatureReleaseTimeline,
  ],
  comments: [commentMichaelBrown, commentMichaelBrown],
  downloadUrl: "https://google.com",
};
