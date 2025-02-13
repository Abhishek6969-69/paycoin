"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Appbar = void 0;
const button_1 = require("./button");
const Appbar = ({ user, onSignin, onSignout }) => {
    return <div className="flex justify-between border-b px-4 py-3">
        <div className="text-lg flex flex-col justify-center">
            <div className=" flex justify-center  gap-2">
            <div>
            <Logo />
            </div>
            <div className=" flex justify-center items-center">
            CoinPay
            </div>
           
            </div>
        </div>
        <div className="flex flex-col justify-center  items-center pt-2">
            <button_1.Button type="submit" className="" onClick={user ? onSignout : onSignin}>{user ? "Logout" : "Login"}</button_1.Button>
        </div>
    </div>;
};
exports.Appbar = Appbar;
function Logo() {
    return (<div className="">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-10">
  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/>
    </svg>

        </div>);
}
