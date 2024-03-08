import ProductBox from "../../components/ProductBox";

const Wishlist = () => {
  console.log("enter");
  const wishProducts = [
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
  return (
    <>
    <div className="w-5/6 mx-auto mt-[12px] flex flex-col justify-center">
      <span className="font-bold font-sans text-[32px] text-center">My Wishlist</span>
    </div>
    <div className="w-5/6 mx-auto mt-[12px]" style={{display: "grid", gridTemplateColumns: `repeat(4, calc(25% - 14px))`, justifyContent: "space-between"}}>
    {
      wishProducts.map((product, index) => {
        return <ProductBox key={index} {...product} />
      })
    }
    </div>
    </>
  )
}

export default Wishlist;