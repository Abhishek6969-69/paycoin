"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Option;
function Option({ onselect, options, className, }) {
    return (<div className={`w-full ${className}`}>
      <select className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500" onChange={(e) => {
            onselect(e.target.value);
        }}>
        {options.map((option) => (<option value={option.key} key={option.key}>
            {option.value}
          </option>))}
      </select>
    </div>);
}
