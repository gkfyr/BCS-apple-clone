export default function Iphone15() {
  return (
    <>
      <div className="h-[580px] pt-[53px] overflow-hidden relative">
        <h1 className="text-[40px] font-[600] w-full text-center text-[#1d1d1f] font-[SF]">
          iPhone 15
        </h1>
        <h2 className="text-[21px] font-[400] w-full text-center mt-[0px] text-[#1d1d1f] font-[SDM]">
          새로운 카메라. 새로운 디자인. 새로움이 물씬.
        </h2>
        <div className="text-[17px] font-[400] w-full text-center mt-[6px] text-[#0066CC] font-[SDM]">
          <span className="mr-7 cursor-pointer">더 알아보기 &gt;</span>
          <span className="cursor-pointer">구입하기 &gt;</span>
        </div>
        <div className="w-cover h-cover">
          <img
            className="object-none object-bottom h-full absolute top-0 -z-20"
            src="/images/GridIphone15.jpg"
            alt="15"
          />
        </div>
      </div>
    </>
  );
}
