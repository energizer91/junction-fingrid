export const formattedDate = (date: number) =>
  new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
  }).format(date);

export const getBadgeColor = (tag: string) => {
  switch (tag) {
    case "in progress":
      return "border-blue-600 bg-blue-100 text-blue-600";
    case "review":
      return "border-orange-600 bg-orange-100 text-orange-600 shadow-none";
    case "planned":
      return "border-yellow-600 bg-yellow-100 text-yellow-600 shadow-none";
    case "proposed":
      return "border-violet-600 bg-violet-100 text-violet-600 shadow-none";
    default:
      return "border-gray-600 bg-gray-100 text-gray-600 shadow-none";
  }
};
