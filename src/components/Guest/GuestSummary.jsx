const GuestSummary = ({ guestCounts }) => {
  const [adults, children, rooms] = guestCounts;
  const adultText = `${adults.count} Adult${adults.count > 1 ? "s" : ""}`;
  const childrenText = `${children.count} ${
    children.count > 1 ? "Children" : "Child"
  }`;
  const roomText = `${rooms.count} Room${rooms.count > 1 ? "s" : ""}`;

  return (
    <div className="flex gap-3">
      <span>{adultText}</span>
      <span>{childrenText}</span>
      <span>{roomText}</span>
    </div>
  );
};

export default GuestSummary;
