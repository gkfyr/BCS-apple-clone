export default function AppleGift() {
  return (
    <>
      <div className=" h-[580px] pt-[53px] overflow-hidden relative">
        <h1 className="text-[40px] font-[600] w-full text-center text-[#1d1d1f] font-[SDM]">
          설렘의 시작.
        </h1>
        <h2 className="text-[21px] font-[400] w-full text-center mt-[0px] text-[#1d1d1f] font-[SDM]">
          모두가 손꼽아 기다려 온 <br /> 바로 그 선물을 준비해 보세요.
        </h2>
        <div className="text-[17px] font-[400] w-full text-center mt-[6px] text-[#0066CC] font-[SDM]">
          <span className="cursor-pointer">쇼핑하기 &gt;</span>
        </div>
        <div className="w-cover h-cover">
          <img
            className="object-none object-bottom h-full absolute top-0 -z-20"
            src="/images/GridGift.jpg"
            alt="gift"
          />
        </div>
      </div>
    </>
  );
}
