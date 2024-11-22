import CounterButton from "../Button/CounterButton";
import Icon from "../Icon/Icon";

const GuestCounter = ({ guestCounts, setGuestCounts }) => {
  const increment = name => {
    setGuestCounts(prev =>
      prev.map(item =>
        item.name === name ? { ...item, count: item.count + 1 } : item
      )
    );
  };

  const decrement = name => {
    setGuestCounts(prev =>
      prev.map(item =>
        item.name === name
          ? { ...item, count: Math.max(item.default, item.count - 1) }
          : item
      )
    );
  };

  return (
    <div className="absolute bg-white mt-8 border border-1 rounded-lg p-4">
      {guestCounts.map(guestCount => (
        <div key={guestCount.name} className="mb-2">
          <span className="block font-medium text-gray-700">
            {guestCount.name}
          </span>
          <div className="flex items-center mx-auto border border-gray-200 rounded-md">
            <CounterButton onClick={() => decrement(guestCount.name)}>
              <Icon name="minus" />
            </CounterButton>
            <div className="w-12 text-center mx-2">{guestCount.count}</div>

            <CounterButton onClick={() => increment(guestCount.name)}>
              <Icon name="plus" />
            </CounterButton>
          </div>
        </div>
      ))}
    </div>
  );
};

export default GuestCounter;
