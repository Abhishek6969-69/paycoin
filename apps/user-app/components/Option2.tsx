import { useState } from "react";

export default function Option2({
  onselect,
  options,
  className,
}: {
  onselect: (value: string) => void;
  options: { key: string; value: string; label: string }[];
  className?: string;
}) {
  const [search, setSearch] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  // 🔄 Filter options based on number (option.value) instead of label
  const filteredOptions = options.filter((option) =>
    option.value.includes(search) // Filtering by number only
  );

  return (
    <div className={`relative w-full ${className}`}>
      <input
        type="text"
        placeholder="Type to search number..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        onFocus={() => setIsOpen(true)}
        className="w-full text-gray-500 px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      {isOpen && filteredOptions.length > 0 && (
        <ul className="absolute z-10 w-full bg-gray-400 border-gray-300 rounded shadow-md max-h-40 overflow-y-auto">
          {filteredOptions.map((option) => (
            <li
              key={option.key}
              onClick={() => {
                onselect(option.value);
                setSearch(option.value);  // Show the selected number in input
                setIsOpen(false);
                
              }}
              className="px-4 py-2 cursor-pointer hover:bg-blue-100"
            >
              {option.value}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
