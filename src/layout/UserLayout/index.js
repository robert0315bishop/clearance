import { useNavigate, Outlet } from "react-router-dom"
import GenS3Link from "../../utils/GenS3Link";

const DF_Logo = GenS3Link('landing/images/logo_full');

const UserLayout = () => {
  const navigate = useNavigate();
  const onClearance = () => {
    navigate("/clearance");
  }

  return (
    <>
      <div className="mx-[8px] pr-[24px] h-[80px] flex items-center border-b border-b-1 justify-between">
        <img alt="logo" src={`${DF_Logo}.webp`} className="h-[60px]" />
        <div className="flex gap-4 font-serif text-[18px]">
          <button>Shop</button>
          <div>|</div>
          <button>Style</button>
          <div>|</div>
          <button onClick={onClearance}>Clearance</button>
        </div>
      </div>
      
      <Outlet />
    </>
  )
}

export default UserLayout;