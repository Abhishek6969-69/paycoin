"use client";
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Sidebaritem;
const navigation_1 = require("next/navigation");
function Sidebaritem({ href, icon, title, }) {
    const router = (0, navigation_1.useRouter)();
    return (<div onClick={() => {
            router.push(href);
        }}>
      <div className=" my-7 flex gap-2 md:gap-10 md:p-4 md:px-6 w-screen md:w-[250px] hover:cursor-pointer">
        <div>{icon}</div>
        <div>{title}</div>
      </div>
    </div>);
}
