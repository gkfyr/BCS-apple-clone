export default function MacBookPro() {
  return (
    <>
      <div className="w-full h-[692px] pt-[55px] bg-[#fafafa] mt-3">
        <h1 className="text-[56px] font-[600] w-full text-center text-[#1d1d1f] font-[SF]">
          MacBook Pro
        </h1>
        <h2 className="text-[26px] font-[400] w-full text-center mt-[0px] text-[#1d1d1f] font-[SDM]">
          비교 불가 성능. 시선 강탈 매력.
        </h2>
        <div className="text-[21px] font-[400] w-full text-center mt-[6px] text-[#0066CC] font-[SDM]">
          <span className="mr-7 cursor-pointer">더 알아보기 &gt;</span>
          <span className="cursor-pointer">구입하기 &gt;</span>
        </div>
        <div className="w-full h-auto">
          <img
            className="object-none object-bottom h-full"
            src="/images/MacBookPro.jpg"
            alt="MacBookPro"
          />
        </div>
      </div>
    </>
  );
}
