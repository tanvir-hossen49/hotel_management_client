import Icon from "../../Icon/Icon";

const CalendarButton = ({ onClick, startDate, endDate }) => {
  const formatDate = date => {
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  return (
    <button
      onClick={onClick}
      className="flex gap-3 items-center p-2 border rounded-md md:flex-row md:gap-4 md:p-4"
    >
      <span>
        <Icon name="calendar" />
      </span>
      <span className="text-sm md:text-base">
        {`${formatDate(startDate)} - ${formatDate(endDate)}`}
      </span>
    </button>
  );
};

export default CalendarButton;
