import React, { lazy, useEffect, useState } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { showFilter, setShowCount } from "../../store/Clearance";
import Loadable from "../../utils/Loadable";

const ProductBox = Loadable(lazy(() => import('../../components/ProductBox')));

const Clearance = () => {
  const products = [
    {
      id: "1",
      wishlist: 0,
      photo: {
        one: "/test.png",
        two: "/test1.png",
        three: "/test2.png",
      },
      name: "High-Rise Curvy Denim Midi Shorts",
      price: '9.99',
      comp_value: '49.95',
      wishlist: 0,
      star: 3,
    },
    {
      id: "2",
      wishlist: 0,
      photo: {
        one: "/test.png",
        two: "/test1.png",
        three: "/test2.png",
      },
      name: "High-Rise Curvy Denim Midi Shorts",
      price: '9.99',
      comp_value: '49.95',
      star: 3
    },
    {
      id: "3",
      wishlist: 1,
      photo: {
        one: "/test.png",
        two: "/test1.png",
        three: "/test2.png",
      },
      name: "High-Rise Curvy Denim Midi Shorts",
      price: '9.99',
      comp_value: '49.95',
      star: 3
    },
    {
      id: "4",
      wishlist: 0,
      photo: {
        one: "/test.png",
        two: "/test1.png",
        three: "/test2.png",
      },
      name: "High-Rise Curvy Denim Midi Shorts",
      price: '9.99',
      comp_value: '49.95',
      star: 3
    },
    {
      id: "5",
      wishlist: 1,
      photo: {
        one: "/test.png",
        two: "/test1.png",
        three: "/test2.png",
      },
      name: "High-Rise Curvy Denim Midi Shorts",
      price: '9.99',
      comp_value: '49.95',
      star: 3
    },
    {
      id: "6",
      wishlist: 1,
      photo: {
        one: "/test.png",
        two: "/test1.png",
        three: "/test2.png",
      },
      name: "High-Rise Curvy Denim Midi Shorts",
      price: '9.99',
      comp_value: '49.95',
      star: 3
    },
  ];

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();

  const filterState = useSelector((state) => state.clearance.filter);
  const showNumber = useSelector((state) => state.clearance.showNumber);
  const sizeItems = ["O/S", "XXS", "XS", "S", "M", "L", "XL", "XXL", "XXXL", "000S", "000", "000L", "00S", "00", "0S", "0", "0L", "2S", "S", 
                      "2", "2L", "4S", "4", "4L"];
  const colorItems = ["Black", "White", "Grey", "Brown", "Beige", "Blue", "Red", "Pink", "Purple", "Green", "Aqua", "Multi", "Orange", "Yellow"];

  const marginFilterBox = filterState ? -250 : 0;
  const productBoxPadding = filterState ? 0: 263;
  const productBoxFloat = filterState ? 'left' : 'unset';
  const [wishListState, setWishListState] = useState(false);
  
  useEffect(() => {
    products.map((product, index) => {
      if (product.wishlist) {
        setWishListState(true);
      }
    });
  }, []);

  const [gender, setActiveGender] = useState(false);
  const [size, setActiveSize] = useState(false);
  const [color, setActiveColor] = useState(false);

  const onGender = () => {
    setActiveGender(!gender);
    setActiveSize(false);
    setActiveColor(false);
  }
  const onSize = () => {
    setActiveGender(false);
    setActiveSize(!size);
    setActiveColor(false);
  }
  const onColor = () => {
    setActiveGender(false);
    setActiveSize(false);
    setActiveColor(!color);
  }
  const onClearance = () => {
    navigate("/clearance");
  }
  const onWomen = () => {
    navigate("/clearance/women");
  }
  const onMen = () => {
    navigate("/clearance/men");
  }
  const onKids = () => {
    navigate("/clearance/kids");
  }
  const onShowFilter = () => {
    dispatch(showFilter());
  }
  const onThreeShow = () => {
    dispatch(setShowCount(3));
  }
  const onFourShow = () => {
    dispatch(setShowCount(4));
  }
  const onWishList = () => {
    navigate("/clearance/wishlist");
  }
  const onShoppingBag = () => {
    navigate("/clearance/shoppingbag");
  }

  return (
    <>
      <div className="font-serif w-5/6 h-[45px] mx-auto mt-[10px] flex gap-[20px] justify-between items-center border-b border-b-1 pb-[12px]">
        <div className="flex gap-[20px] items-center">
          <div className="text-[26px] hover:cursor-pointer" onClick={onClearance}>Clearance</div>
          <div className="flex gap-[16px] pt-[6px] text-[15px]">
            <button onClick={onWomen}>Women</button>
            <button onClick={onMen}>Men</button>
            <button onClick={onKids}>Kids</button>
          </div>
        </div>
        <div className="flex gap-[16px] items-center">
          <div className="relative w-[140px]">
            <input type="text" aria-autocomplete="off" className="bg-transparent float-left w-full pl-[16px] pr-[16px] rounded-[20px] text-[14px] py-[6px] border border-2 border-[#e0e0e0]"></input>
            <button className="absolute right-[15px] top-[8px]">
              <i className="fa fa-search text-[16px]"></i>
            </button>
          </div>
          <button onClick={onWishList} className="flex items-center">
            {
              wishListState ? 
              <i className="fa fa-heart text-[20px] font-bold"></i> :
              <i className="fa fa-heart-o text-[20px] font-bold"></i>
            }
          </button>
          <button className="flex items-center">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M10.705 18.2991C10.315 18.6869 9.68503 18.6869 9.29498 18.2991L4.69667 13.7279C3.64778 12.6852 2.93349 11.3567 2.64411 9.91037C2.35473 8.46408 2.50326 6.96497 3.07092 5.60259C3.63858 4.24022 4.59987 3.07578 5.83323 2.25653C7.0666 1.43728 8.51664 1 10 1C11.4834 1 12.9334 1.43728 14.1668 2.25653C15.4001 3.07578 16.3614 4.24022 16.9291 5.60259C17.4967 6.96497 17.6453 8.46408 17.3559 9.91037C17.0665 11.3567 16.3522 12.6852 15.3033 13.7279L10.705 18.2991ZM14.125 12.5565C14.9407 11.7455 15.4963 10.7122 15.7213 9.58731C15.9463 8.46243 15.8308 7.29648 15.3892 6.23688C14.9477 5.17729 14.2 4.27165 13.2408 3.63447C12.2815 2.9973 11.1537 2.65721 10 2.65721C8.8463 2.65721 7.71851 2.9973 6.75924 3.63447C5.79996 4.27165 5.05229 5.17729 4.61076 6.23688C4.16923 7.29648 4.05368 8.46243 4.27871 9.58731C4.50374 10.7122 5.05926 11.7455 5.875 12.5565L10 16.6572L14.125 12.5565ZM10 10.1126C9.55797 10.1126 9.13405 9.93807 8.82149 9.62735C8.50893 9.31663 8.33333 8.8952 8.33333 8.45578C8.33333 8.01635 8.50893 7.59493 8.82149 7.28421C9.13405 6.97349 9.55797 6.79893 10 6.79893C10.442 6.79893 10.866 6.97349 11.1785 7.28421C11.4911 7.59493 11.6667 8.01635 11.6667 8.45578C11.6667 8.8952 11.4911 9.31663 11.1785 9.62735C10.866 9.93807 10.442 10.1126 10 10.1126Z" fill="black"></path>
            </svg>
          </button>
          <button className="flex items-center">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M10 10.8333C7.2375 10.8333 5 8.59575 5 5.83325C5 3.07075 7.2375 0.833252 10 0.833252C12.7625 0.833252 15 3.07075 15 5.83325C15 8.59575 12.7625 10.8333 10 10.8333ZM10 9.16658C11.8417 9.16658 13.3333 7.67492 13.3333 5.83325C13.3333 3.99159 11.8417 2.49992 10 2.49992C8.15833 2.49992 6.66667 3.99159 6.66667 5.83325C6.66667 7.67492 8.15833 9.16658 10 9.16658Z" fill="black"></path>
              <path d="M4.41017 13.6194C3.37615 14.6764 2.72521 16.0518 2.54869 17.5201C2.49495 17.9671 2.86499 18.3334 3.31522 18.3334C3.76545 18.3334 4.12376 17.9661 4.19531 17.5216C4.36032 16.4965 4.83512 15.542 5.56306 14.7979C6.48036 13.8602 7.72448 13.3334 9.02174 13.3334C9.03703 13.3334 11.0088 13.3335 11.0241 13.3336C12.3048 13.3459 13.5305 13.8713 14.4369 14.7979C15.1649 15.542 15.6397 16.4965 15.8047 17.5216C15.8762 17.9661 16.2346 18.3334 16.6848 18.3334C17.135 18.3334 17.5051 17.9671 17.4513 17.5201C17.2748 16.0518 16.6238 14.6764 15.5898 13.6194C14.3776 12.3802 12.7372 11.6792 11.0241 11.6669C11.0088 11.6668 9.03703 11.6667 9.02174 11.6667C7.29207 11.6667 5.63324 12.3691 4.41017 13.6194Z" fill="black"></path>
            </svg>
          </button>
          <button onClick={onShoppingBag} className="flex items-center">
            <svg width="16" height="18" viewBox="0 0 16 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M3.83333 6.16667V4.54762C3.83333 3.47412 4.27232 2.4446 5.05372 1.68552C5.83512 0.926444 6.89493 0.5 8 0.5C9.10507 0.5 10.1649 0.926444 10.9463 1.68552C11.7277 2.4446 12.1667 3.47412 12.1667 4.54762V6.16667H13.6667C13.8877 6.16667 14.0996 6.25196 14.2559 6.40377C14.4122 6.55559 14.5 6.76149 14.5 6.97619L15.5 16.6905C15.5 16.9052 15.4122 17.1111 15.2559 17.2629C15.0996 17.4147 14.8877 17.5 14.6667 17.5H1.33333C1.11232 17.5 0.900358 17.4147 0.744078 17.2629C0.587797 17.1111 0.5 16.9052 0.5 16.6905L1.5 6.97619C1.5 6.76149 1.5878 6.55559 1.74408 6.40377C1.90036 6.25196 2.11232 6.16667 2.33333 6.16667H3.83333ZM3.83333 7.78571H3.16667L2.16667 15.881H13.8333L12.8333 7.78571H12.1667V9.40476H10.5V7.78571H5.5V9.40476H3.83333V7.78571ZM5.5 6.16667H10.5V4.54762C10.5 3.90352 10.2366 3.28581 9.76777 2.83036C9.29893 2.37491 8.66304 2.11905 8 2.11905C7.33696 2.11905 6.70107 2.37491 6.23223 2.83036C5.76339 3.28581 5.5 3.90352 5.5 4.54762V6.16667Z" fill="black"></path>
            </svg>
          </button>
        </div>
      </div>

      {
      location.pathname != '/clearance/wishlist' && location.pathname != '/clearance/shoppingbag' ?
        <>
        <div className="font-serif w-5/6 mx-auto flex justify-between mt-[12px]">
          {filterState ?
            <button onClick={onShowFilter} className="flex gap-[6px] items-center border border-black border-1 rounded-full px-[8px] py-[4px]">
              <svg aria-hidden="true" focusable="false" className="svg-icon" width="15.893" height="10.334" viewBox="0 0 15.893 10.334"><path d="M8.748,7.817a2.385,2.385,0,0,1,4.5,0H16.56V9.406H13.246a2.385,2.385,0,0,1-4.5,0H.667V7.817ZM3.98,2.254a2.385,2.385,0,0,1,4.5,0H16.56V3.844H8.478a2.385,2.385,0,0,1-4.5,0H.667V2.254ZM6.229,3.844a.795.795,0,1,0-.562-.233A.795.795,0,0,0,6.229,3.844ZM11,9.406a.795.795,0,1,0-.562-.233A.795.795,0,0,0,11,9.406Z" transform="translate(-0.667 -0.663)"></path></svg>
              <div>Show filters</div>
            </button> :
            <button onClick={onShowFilter} className="flex gap-[6px] items-center border border-black border-1 rounded-full px-[8px] py-[4px]">
              <svg aria-hidden="true" focusable="false" className="svg-icon" width="15.893" height="10.334" viewBox="0 0 15.893 10.334"><path d="M8.748,7.817a2.385,2.385,0,0,1,4.5,0H16.56V9.406H13.246a2.385,2.385,0,0,1-4.5,0H.667V7.817ZM3.98,2.254a2.385,2.385,0,0,1,4.5,0H16.56V3.844H8.478a2.385,2.385,0,0,1-4.5,0H.667V2.254ZM6.229,3.844a.795.795,0,1,0-.562-.233A.795.795,0,0,0,6.229,3.844ZM11,9.406a.795.795,0,1,0-.562-.233A.795.795,0,0,0,11,9.406Z" transform="translate(-0.667 -0.663)"></path></svg>
              <div>Hide filters</div>
            </button>
          }
          <div className="flex gap-[12px] items-center">
            <div className="font-sans font-medium">({products.length} Items)</div>
            <div className="flex gap-[6px] items-center">
              <button onClick={onThreeShow}><i className="fa fa-bars rotate-90"></i></button>
              <div>|</div>
              <button onClick={onFourShow}><i className="fa fa-align-justify rotate-90"></i></button>
            </div>
            <div>
              <select className="border border-1 border-black rounded-full px-[8px] py-[4px]">
                <option>Featured</option>
                <option>Best Sellers</option>
                <option>Newest</option>
                <option>Price High to Low</option>
                <option>Price Low to High</option>
              </select>
            </div>
          </div>
        </div>
      
        <div className="w-5/6 mx-auto mt-[20px]">
          <div className="w-full flex relative overflow-hidden font-serif">
            <div className="w-[250px] max-w-[300px] absolute left-0 top-0 border border-1 border-gray transition-all duration-500 ease-in-out" style={{marginLeft: marginFilterBox + 'px'}}>
              <div className="">
                <div onClick={onGender} className="text-[15px] cursor-pointer px-[15px] py-[10px] flex justify-between border-b">
                  <div className="font-semibold">Gender</div>
                  <div>
                    {
                      gender ? <i className="fa fa-angle-up"></i> : <i className="fa fa-angle-down"></i>
                    }
                  </div>
                </div>
                {
                  gender ? 
                    <ul className="font-sans font-medium">
                      <li className="flex gap-[12px] px-[15px] py-[10px]">
                        <input type="checkbox"></input>
                        <div className="flex gap-[4px] text-[14px]">
                          <div>Men</div>
                          <div>(277)</div>
                        </div>
                      </li>
                      <li className="flex gap-[12px] px-[15px] py-[10px]">
                        <input type="checkbox"></input>
                        <div className="flex gap-[4px] text-[14px]">
                          <div>Women</div>
                          <div>(277)</div>
                        </div>
                      </li>
                      <li className="flex gap-[12px] px-[15px] py-[10px]">
                        <input type="checkbox"></input>
                        <div className="flex gap-[4px] text-[14px]">
                          <div>Kids</div>
                          <div>(277)</div>
                        </div>
                      </li>
                    </ul> : <></>
                }
              </div>
              <div className="">
                <div onClick={onSize} className="text-[15px] cursor-pointer px-[15px] py-[10px] flex justify-between border-b border-t">
                  <div className="font-semibold">Size</div>
                  <div>
                    {
                      size ? <i className="fa fa-angle-up"></i> : <i className="fa fa-angle-down"></i>
                    }
                    </div>
                </div>
                {
                  size ?
                    <ul className="flex flex-wrap px-[15px] pt-[10px]">
                      {
                        sizeItems.map((item, index) => {
                          return <li className="w-1/4 flex justify-center pb-[12px] cursor-pointer">
                                    <a className="w-full flex flex-col items-center justify-center text-[14px] font-sans">
                                      <span className="bg-[#f2f2f2] rounded-full flex justify-center items-center text-[12px] w-[35px] h-[35px] font-medium">{item}</span>
                                      <span className="font-sans text-[12px]">(38)</span>
                                    </a>
                                  </li>
                        })
                      }
                    </ul> : <></>
                }
              </div>
              <div className="">
                <div onClick={onColor} className="text-[15px] cursor-pointer px-[15px] py-[10px] flex justify-between border-t">
                  <div className="font-semibold">Color</div>
                  <div>
                    {
                      color ? <i className="fa fa-angle-up"></i> : <i className="fa fa-angle-down"></i>
                    }
                  </div>
                </div>
                {
                  color ?
                    <ul className="flex flex-wrap px-[15px] pt-[10px]">
                      {
                        colorItems.map((item, index) => {
                          return <li className="w-1/4 flex flex-col items-center justify-center pb-[12px] cursor-pointer">
                                    <a className="w-full flex flex-col items-center justify-center text-[14px] font-sans">
                                      <span style={{backgroundColor: item}} className="border border-1 rounded-full flex justify-center items-center text-[12px] w-[35px] h-[35px] font-medium"></span>
                                      <span className="font-medium">{item}</span>
                                    </a>
                                    <span className="font-sans text-[12px]">(38)</span>
                                  </li>
                        })
                      }
                    </ul> : <></>
                }
              </div>
            </div>
            <div className="w-full transition-all duration-500 ease-in-out" style={{paddingLeft: productBoxPadding + 'px', float: productBoxFloat, display: "grid", gridTemplateColumns: `repeat(${showNumber}, calc(${100 / showNumber}% - 14px))`, justifyContent: "space-between"}}>
            {
              location.pathname === "/clearance" &&
                products.map((product, index) => {
                  return <ProductBox key={index} {...product} />
                })
            }
              <Outlet />
            </div>
          </div>
        </div>
        </> : <><Outlet /></>
      }
    </>
  )
}

export default Clearance;