export default function ButtonNextPrev() {
  const handleIncreaseLimit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
  };
  return (
    <div className="inline-flex pb-10">
      <button
        onClick={handleIncreaseLimit}
        className="bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded-r gradient-text-hover hover:text-white"
      >
        View More
      </button>
    </div>
  );
}
