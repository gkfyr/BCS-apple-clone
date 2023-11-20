export default function Imac() {
  return (
    <>
      <div className="w-full h-[692px] pt-[55px] bg-[#f5f5f7]">
        <h1 className="text-[56px] font-[600] w-full text-center text-[#1d1d1f] font-[SF]">
          iPhone 15
        </h1>
        <h2 className="text-[26px] font-[400] w-full text-center mt-[0px] text-[#1d1d1f] font-[SDM]">
          새로운 카메라. 새로운 디자인. 새로움이 물씬.
        </h2>
        <div className="text-[21px] font-[400] w-full text-center mt-[6px] text-[#2997ff] font-[SDM]">
          <a className="mr-7">더 알아보기 &gt;</a>
          <a>구입하기 &gt;</a>
        </div>
        <div className="w-full h-auto">
          <img
            className="object-none object-bottom h-full"
            src="/images/15.jpg"
            alt="15"
          />
        </div>
      </div>
    </>
  );
}
