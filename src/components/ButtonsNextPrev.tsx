import { ButtonNextPrevProps } from "../interfaces/comics";

export default function ButtonNextPrev({ increaseLimit }: ButtonNextPrevProps) {
  const handleIncreaseLimit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    increaseLimit();
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
