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
      {guestCounts.map(guestCount => {
        const { name, count } = guestCount;
        return (
          <div key={name} className="mb-2">
            <span className="block font-medium text-gray-700">{name}</span>
            <div className="flex items-center">
              <button
                onClick={() => decrement(name)}
                className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300"
              >
                -
              </button>
              <input
                type="text"
                value={count}
                readOnly
                className="w-12 text-center mx-2 border border-gray-300 rounded"
              />
              <button
                onClick={() => increment(name)}
                className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300"
              >
                +
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default GuestCounter;
