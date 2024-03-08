import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setSubTotal } from "../../store/Clearance";

const ShoppingBox = ({id, photo, name, price, comp_value, color, size}) => {
  const dispatch = useDispatch();
  const [prevOption, setPrevOption] = useState(0)

  const onSubTotal = (e) => {
    dispatch(setSubTotal(parseInt(e.target.value - prevOption) * parseFloat(price)));
    setPrevOption(e.target.value);
  }
  return (
    <>
      <div className="flex border-1 border-t border-[#ddd]">
        <div className="w-1/4 p-[20px] flex flex-col gap-[12px] justify-center">
          <img alt="Image" src={photo.one} />
          <button className="text-[13px] underline">Edit Details</button>
        </div>
        <div className="w-1/2 p-[20px] flex flex-col gap-[16px] justify-start">
          <span className="text-[20px] font-bold">{name}</span>
          <span className="text-[16px] text-[#818181] font-bold">Color <span className="font-normal">{color}</span></span>
          <span className="text-[16px] text-[#818181] font-bold">Size <span className="font-normal">{size}</span></span>
        </div>
        <div className="p-[20px] flex flex-col gap-[12px] justify-start" style={{width: 12.5 + '%'}}>
          <select onChange={onSubTotal} className="w-full h-[40px] px-[4px] py-[0px] border border-1 border-[#ccc]">
            <option>0</option>
            <option>1</option>
            <option>2</option>
            <option>3</option>
          </select>
          <button className="text-[13px] underline text-start">Remove</button>
          <div className="text-[#59931b] font-bold text-[14px] mt-[6px]">In Stock</div>
        </div>
        <div className="p-[20px] flex flex-col justify-start gap-[12px]" style={{width: 12.5 + '%'}}>
          <span className="text-[16px] font-bold">${price}</span>
          <span className="text-[#818181] text-[14px]">Comp. Value: ${comp_value}</span>
        </div>
      </div>
    </>
  )
}

export default ShoppingBox;