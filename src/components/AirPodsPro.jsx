export default function Iphone15() {
  return (
    <>
      <div className="h-[580px] pt-[53px] overflow-hidden relative">
        <h1 className="text-[40px] font-[600] w-full text-center text-[#f5f5f7] font-[SF]">
          AirPods Pro
        </h1>
        <h2 className="text-[21px] font-[400] w-full text-center mt-[0px] text-[#f5f5f7] font-[SDM]">
          전에 없던 청취 경험. 적응형 오디오.
        </h2>
        <div className="text-[17px] font-[400] w-full text-center mt-[6px] text-[#2997ff] font-[SDM]">
          <span className="mr-7 cursor-pointer">더 알아보기 &gt;</span>
          <span className="cursor-pointer">구입하기 &gt;</span>
        </div>
        <div className="w-cover h-cover">
          <img
            className="object-none object-bottom h-full absolute top-0 -z-20"
            src="/images/GridAirPodsPro.jpg"
            alt="AirPodsPro"
          />
        </div>
      </div>
    </>
  );
}
