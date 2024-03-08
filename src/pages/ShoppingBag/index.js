import { lazy, useState } from "react";
import { useSelector } from "react-redux";
import Loadable from "../../utils/Loadable";

const ShoppingBox = Loadable(lazy(() => import('../../components/ShoppingBox')));

const ShoppingBag = () => {
  const bagProducts = [
    {
      id: "3",
      photo: {
        one: "/test.png",
        two: "/test1.png",
        three: "/test2.png",
      },
      name: "High-Rise Curvy Denim Midi Shorts",
      price: '9.99',
      comp_value: '49.95',
      color: "Dark Wash",
      size: '10',
    },
    {
      id: "5",
      photo: {
        one: "/test.png",
        two: "/test1.png",
        three: "/test2.png",
      },
      name: "High-Rise Curvy Denim Midi Shorts",
      price: '9.99',
      comp_value: '49.95',
      color: "Dark Wash",
      size: '10',
    },
    {
      id: "6",
      photo: {
        one: "/test.png",
        two: "/test1.png",
        three: "/test2.png",
      },
      name: "High-Rise Curvy Denim Midi Shorts",
      price: '9.99',
      comp_value: '49.95',
      color: "Dark Wash",
      size: '10',
    },
  ];
  const subTotal = useSelector((state) => state.clearance.subtotal);
  const [selectedOption, setSelectedOption] = useState('5');
  const format_subtotal = subTotal.toFixed(2);
  const economy = parseInt(selectedOption);
  const discount = 5;
  const tax = 4.15;
  const total = subTotal + economy - discount + tax;
  const format_total = total.toFixed(2);

  const handleOptionChange = (e) => {
    setSelectedOption(e.target.value);
};

  return (
    <>
    <div className="w-5/6 mx-auto mt-[12px] flex items-end gap-[12px]">
      <span className="font-bold font-sans text-[25px]">Shopping Bag</span>
      <span className="text-[20px] text-[#979797]">{bagProducts.length} Items</span>
    </div>
    <div className="w-5/6 mx-auto mt-[12px] flex gap-[12px]">
      <div className="w-2/3">
        <div className="w-full border-b border-1 border-[#ddd] flex">
          <div className="w-3/4 p-[20px] font-bold text-[16px]">ITEM</div>
          <div className="p-[20px] font-bold text-[16px]" style={{width: 12.5 + '%'}}>QUANTITY</div>
          <div className="p-[20px] font-bold text-[16px]" style={{width: 12.5 + '%'}}>PRICE</div>
        </div>
        <div className="w-full">
        {
          bagProducts.map((product, index) => {
            return <ShoppingBox key={index} {...product} />
          })
        }
        </div>
      </div>
      <div className="w-1/3">
        <div className="w-full p-[20px] bg-[#ededed]">
          <span className="font-bold text-[20px] mt-[16px]">ORDER SUMMARY</span>
          <ul className="flex flex-col gap-[14px] mt-[16px]">
            <li className="flex justify-between">
              <span className="text-[#5a5a5a] text-[14px]">Subtotal</span>
              <span className="text-[#5a5a5a] text-[14px]">${format_subtotal}</span>
            </li>
            <li className="flex justify-between">
              <span className="text-[#5a5a5a] text-[14px]">Shipping Economy Ground</span>
              <span className="text-[#5a5a5a] text-[14px]">${economy}</span>
            </li>
            <li className="flex justify-between">
              <span className="text-[#5a5a5a] text-[14px]">Shipping Discount</span>
              <span className="text-[#5a5a5a] text-[14px]">-${discount}</span>
            </li>
            <li className="flex justify-between">
              <span className="text-[#5a5a5a] text-[14px]">Sales Tax</span>
              <span className="text-[#5a5a5a] text-[14px]">${tax}</span>
            </li>
            <li className="flex justify-between">
              <span className="text-[#5a5a5a] text-[14px] font-bold">Estimated Total</span>
              <span className="text-[#5a5a5a] text-[14px] font-bold">${format_total}</span>
            </li>
          </ul>
          <button className="w-full bg-[#182638] text-white text-center h-[50px] font-bold mt-[20px]">CHECKOUT</button>
          <div className="flex flex-col mt-[16px]">
            <button className="w-2/3 mx-auto bg-[#fbde02] px-[22px] py-[8px] text-black font-bold rounded-full flex gap-[6px] items-center justify-center">
              <img alt="paypal" className="w-[100px]" src="/paypal.png"></img>
              <span className="text-[14px] pt-[3px] hover:underline">Checkout</span>
            </button>
            <span className="text-center text-[12px] mt-[8px]">The safer, easier way to pay</span>
          </div>
          <div className="font-bold text-[18px] mt-[12px]">Estimated Shipping Cost</div>
          <ul className="flex flex-col gap-[14px] mt-[16px]">
            <li className="flex gap-[4px] items-start">
              <input type="radio" value="5" name="ground_price" checked={selectedOption === '5'} onChange={handleOptionChange}></input>
              <span className={selectedOption === '5' ? "font-bold" : ''}>Economy Ground (Delivered In 3 - 7 Business Days.): $5.00</span>
            </li>
            <li className="flex gap-[4px] items-start">
              <input type="radio" value="8" name="ground_price" checked={selectedOption === '8'} onChange={handleOptionChange}></input>
              <span className={selectedOption === '8' ? "font-bold" : ''}>Standard Ground (Delivered In 3 - 5 Business Days.): $8.00</span>
            </li>
            <li className="flex gap-[4px] items-start">
              <input type="radio" value="13" name="ground_price" checked={selectedOption === '13'} onChange={handleOptionChange}></input>
              <span className={selectedOption === '13' ? "font-bold" : ''}>2 Business Days (Order By 1:30PM EST, No Weekend Deliveries): $13.00</span>
            </li>
            <li className="flex gap-[4px] items-start">
              <input type="radio" value="25" name="ground_price" checked={selectedOption === '25'} onChange={handleOptionChange}></input>
              <span className={selectedOption === '25' ? "font-bold" : ''}>Overnight (Order By 1:30pm EST, No Weekend Deliveries): $25.00</span>
            </li>
          </ul>
          <div className="bg-white mt-[12px] rounded-[5px] py-[4px] text-center text-[12px]">
            4 interest-free payments of $21.77 with Klarna. <a className="text-[#337ab7] no-underline cursor-pointer">Learn More</a>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default ShoppingBag;