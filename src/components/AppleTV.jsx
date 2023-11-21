import { IoPlayCircleSharp } from "react-icons/io5";

export default function AppleTV() {
  return (
    <>
      <div className="h-[580px] pt-[53px] pb-[31px] overflow-hidden relative">
        <div className="flex flex-col justify-between h-full">
          <img
            src="/images/AppleTVLogo.png"
            className="mx-auto"
            alt="appletvlogo"
          />

          <div className="flex flex-col">
            <img
              src="/images/Monarch.png"
              className="mx-auto w-[254px] h-[85px]"
              alt="monarchlogo"
            />
            <h2 className="text-[21px] font-[400] w-full text-center mt-[17px] text-[#f5f5f7] font-[SDM]">
              어떤 비밀은 결코 묻히지 않는다.
            </h2>
            <h2 className="text-[17px] font-[400] w-full mt-[10px] text-[#f5f5f7] font-[SDM] flex mx-auto items-center justify-center hover:underline cursor-pointer">
              신작 시리즈 시청하기
              <IoPlayCircleSharp size={22} className="mb-1 ml-1" />
            </h2>
          </div>
        </div>

        <div className="w-cover h-cover">
          <img
            className="object-none object-bottom h-full absolute top-0 -z-20"
            src="/images/GridAppleTV.jpg"
            alt="AppleTV"
          />
        </div>
      </div>
    </>
  );
}
