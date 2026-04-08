import { useEffect, useMemo, useState } from "react";
import { Check, Search } from "lucide-react";

export default function Option2({
  onselect,
  options,
  className,
  value,
  displayValue,
}: {
  onselect: (value: string) => void;
  options: { key: string; value: string; label?: string }[];
  className?: string;
  value?: string;
  displayValue?: string;
}) {
  const [search, setSearch] = useState(value || "");
  const [isOpen, setIsOpen] = useState(false);
  const [isFocused, setIsFocused] = useState(false);

  useEffect(() => {
    setSearch(value || "");
  }, [value]);

  const normalizedSearch = search.trim().toLowerCase();

  const filteredOptions = useMemo(() => {
    return options
      .filter((option) => {
        if (!normalizedSearch) {
          return true;
        }

        return (
          option.value.includes(search) ||
          option.label?.toLowerCase().includes(normalizedSearch)
        );
      })
      .sort((a, b) => {
        const aStarts = a.value.startsWith(search) || a.label?.toLowerCase().startsWith(normalizedSearch);
        const bStarts = b.value.startsWith(search) || b.label?.toLowerCase().startsWith(normalizedSearch);

        if (aStarts && !bStarts) {
          return -1;
        }

        if (!aStarts && bStarts) {
          return 1;
        }

        return (a.label || a.value).localeCompare(b.label || b.value);
      });
  }, [normalizedSearch, options, search]);

  const selectedOption = options.find((option) => option.value === value);
  const isSearching = normalizedSearch.length > 0;

  return (
    <div className={`relative w-full ${className}`}>
      <input
        type="text"
        placeholder="Search by mobile number"
        value={isFocused ? search : (displayValue ?? search)}
        onChange={(e) => setSearch(e.target.value)}
        onFocus={() => {
          setIsOpen(true);
          setIsFocused(true);
        }}
        onBlur={() => {
          // allow option click to register first
          setTimeout(() => {
            setIsOpen(false);
            setIsFocused(false);
          }, 150);
        }}
        className="w-full rounded-2xl bg-transparent px-4 py-4 text-base font-medium text-slate-900 placeholder:text-slate-400 focus:outline-none"
      />
      {isOpen && (
        <div className="absolute left-0 top-full z-20 -mt-px w-full overflow-hidden rounded-b-2xl rounded-t-none border border-slate-200 border-t-0 bg-white shadow-[0_12px_30px_rgba(15,23,42,0.12)]">
          <div className="border-b border-slate-100 bg-slate-50 px-4 py-2">
            <div className="flex items-center justify-between gap-3 text-[11px] font-semibold uppercase tracking-[0.14em] text-slate-500">
              <span>{isSearching ? "Matching recipients" : "Recent recipients"}</span>
              <span>{filteredOptions.length}</span>
            </div>
          </div>

          {filteredOptions.length > 0 ? (
            <ul className="max-h-64 overflow-y-auto py-1">
              {filteredOptions.map((option) => {
                const isSelected = option.value === value;

                return (
                  <li
                    key={option.key}
                    onMouseDown={(e) => {
                      e.preventDefault();
                      onselect(option.value);
                      setSearch(option.value);
                      setIsOpen(false);
                      setIsFocused(false);
                    }}
                    className={`cursor-pointer px-4 py-3 transition ${
                      isSelected
                        ? "bg-blue-50 text-slate-950"
                        : "text-slate-700 hover:bg-slate-50"
                    }`}
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div className="min-w-0">
                        <div className="truncate text-sm font-medium text-slate-900">
                          {option.label || "CoinPay user"}
                        </div>
                        <div className="mt-1 text-sm text-slate-500">{option.value}</div>
                      </div>

                      {isSelected ? (
                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-blue-600" />
                      ) : null}
                    </div>
                  </li>
                );
              })}
            </ul>
          ) : (
            <div className="px-4 py-5 text-center">
              <div className="mx-auto flex h-8 w-8 items-center justify-center rounded-full bg-slate-100 text-slate-400">
                <Search className="h-4 w-4" />
              </div>
              <p className="mt-3 text-sm font-medium text-slate-900">No matching recipients</p>
              <p className="mt-1 text-sm text-slate-500">Search by registered name or mobile number.</p>
            </div>
          )}

          {selectedOption && !isSearching ? (
            <div className="border-t border-slate-100 px-4 py-2.5 text-xs text-slate-500">
              Selected: <span className="font-medium text-slate-700">{selectedOption.label || selectedOption.value}</span>
            </div>
          ) : null}
        </div>
      )}
    </div>
  );
}
