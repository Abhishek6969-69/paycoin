"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Card = Card;
function Card({ title, children, className }) {
    return (<div className={`border p-4 rounded bg-white mx-4 ${className}`}>
      <h1 className="text-xl border-b   pb-2">
        {title}
      </h1>
      <div>{children}</div>
    </div>);
}
// border p-4  rounded  bg-[#D1B1CB] mx-4
