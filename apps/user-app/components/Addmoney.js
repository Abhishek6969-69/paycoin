"use client";
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = AddMoney;
const label_1 = require("@repo/ui/label");
const createonRamtransaction_1 = __importDefault(require("app/lib/actions/createonRamtransaction"));
const card_1 = require("@repo/ui/card");
const option_1 = __importDefault(require("@repo/ui/option"));
const input_1 = __importDefault(require("@repo/ui/input"));
const react_1 = require("react");
const button_1 = require("@repo/ui/button");
function AddMoney() {
    const SUPPORTED_BANK = [
        { name: "HDFC", redirecturl: "https://netbanking.hdfcbank.com/netbanking/" },
        { name: "KOTAK", redirecturl: "https://netbanking.kotak.com/knb2/" },
    ];
    const [redirecturl, setRedirecturl] = (0, react_1.useState)(SUPPORTED_BANK[0]?.redirecturl);
    const [amount, setAmount] = (0, react_1.useState)("");
    const [token4, setToken] = (0, react_1.useState)("");
    const [provider, setProvider] = (0, react_1.useState)(SUPPORTED_BANK[0]?.name || "");
    return (<div className="w-full max-w-lg mx-auto px-4">
      <card_1.Card title="Add Money" className="border p-6 rounded-lg shadow-md">
        <div className="mb-4">
          <label_1.Label label="Amount" className="block mb-1 capitalize"/>
          <input_1.default className="w-full" placeholder="Enter amount" type="number" onChange={(value) => setAmount(value)}/>
        </div>

        <div className="mb-4">
          <label_1.Label label="Bank" className="block mb-1 capitalize"/>
          <option_1.default onselect={(value) => {
            const selectedBank = SUPPORTED_BANK.find((x) => x.name === value);
            setRedirecturl(selectedBank?.redirecturl || "");
            setProvider(selectedBank?.name || "");
        }} options={SUPPORTED_BANK.map((x) => ({ key: x.name, value: x.name }))}/>
        </div>

        <div className="flex justify-center pt-4">
          <button_1.Button type="submit" className="w-full md:w-auto" onClick={async () => {
            console.log("Button clicked");
            const newToken = await (0, createonRamtransaction_1.default)({ amount, provider });
            console.log(newToken, "Token generated");
            setToken(newToken || "");
            window.location.href = `http://localhost:3001/transactions/fakebankingui?token=${newToken}` || "";
        }}>
            Add Money
          </button_1.Button>
        </div>
      </card_1.Card>
    </div>);
}
