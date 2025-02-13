"use client";
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_2 = require("react");
const card_1 = require("@repo/ui/card");
const input_1 = __importDefault(require("@repo/ui/input"));
const button_1 = require("@repo/ui/button");
const p2ptransfer_1 = __importDefault(require("../../lib/actions/p2ptransfer"));
const label_1 = require("@repo/ui/label");
function P2PTransfer() {
    const [to, setto] = (0, react_2.useState)('');
    const [amount, setamount] = (0, react_2.useState)('');
    const [sentmoney1, setsentmoney] = (0, react_2.useState)(false);
    return (<div className=' mb-36 flex justify-center  items-center  md:w-[900px] md:h-[100%]'>
        <card_1.Card title="send" className=' md:w-[500px]'>
            <div className='p-2 py-4 '>
              <label_1.Label label='Number' className='md:ml-5'/>
            <input_1.default type='tel' placeholder='number' className=' w-full md:w-[400px] md:ml-4' onChange={(value) => setto(value)}/>
            <label_1.Label label='Amount' className=''/>
            <input_1.default placeholder='amount' type="number" className="w-full md:w-[400px] md:ml-4" onChange={(value) => setamount(value)}/>
            <div className=' flex justify-center items-center mt-4'>
            {sentmoney1 ? <p className='text-[#28A745] capitalize text-xl'>sent   ₹{amount} to {to}</p> : null}
            </div>
            <div className=' mt-4   flex justify-center'>
            <button_1.Button type='submit' className='w-full md:w-[400px] md:mr-5 p-3 text-xl' onClick={async () => {
            const sentmoney = await (0, p2ptransfer_1.default)(to, Number(amount) * 100);
            setsentmoney(sentmoney);
        }}>send</button_1.Button>
            
            </div>
            
            </div>
        </card_1.Card>
    </div>);
}
exports.default = P2PTransfer;
