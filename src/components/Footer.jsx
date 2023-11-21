export default function Footer() {
  const items1 = [
    { name: "스토어" },
    { name: "Mac" },
    { name: "iPad" },
    { name: "iPhone" },
    { name: "Watch" },
    { name: "AirPods" },
    { name: "iPhone" },
    { name: "TV 및 홈" },
    { name: "AirTag" },
    { name: "액세서리" },
  ];

  const items2 = [{ name: "지갑" }, { name: "Apple Pay" }];

  const items3 = [
    { name: "Apple ID 관리" },
    { name: "Apple Store 계정" },
    { name: "iCloud.com" },
  ];

  const items4 = [
    { name: "Apple One" },
    { name: "Apple TV+" },
    { name: "Apple Music" },
    { name: "Apple Arcade" },
    { name: "Apple Podcasts" },
    { name: "Apple Books" },
    { name: "App Store" },
  ];

  const items5 = [
    { name: "매장 찾기" },
    { name: "Genious Bar" },
    { name: "Today at Apple" },
    { name: "Apple 캠프" },
    { name: "Apple Store 앱" },
    { name: "인증 리퍼비쉬 제품" },
    { name: "Apple Trade In" },
    { name: "할부 방식" },
    { name: "주문 상태" },
    { name: "쇼핑 도움말" },
  ];

  const items6 = [
    { name: "Apple과 비즈니스" },
    { name: "비즈니스를 위한 제품 쇼핑하기" },
  ];

  const items7 = [
    { name: "Apple과 교육" },
    { name: "초중고용 제품 쇼핑하기" },
    { name: "대학 생활을 위한 제품 쇼핑하기" },
  ];

  const items8 = [
    { name: "손쉬운 사용" },
    { name: "교육" },
    { name: "환경" },
    { name: "개인정보 보호" },
    { name: "협력업체에 대한 책임" },
  ];

  const items9 = [
    { name: "Newsroom" },
    { name: "Apple 리더십" },
    { name: "채용 안내" },
    { name: "윤리 및 규정 준수" },
    { name: "이벤트" },
    { name: "일자리 창출" },
    { name: "Apple 연락처" },
  ];

  const hasKoreanText = (text) => {
    const regex = /[ㄱ-ㅎㅏ-ㅣ가-힣]/;
    return regex.test(text);
  };

  const FooterItems = ({ name }) => {
    const isKorean = hasKoreanText(name);

    return (
      <p
        className={`mb-[5px] text-[12px] text-[#424245] cursor-pointer hover:underline  ${
          isKorean ? "font-[SDM]" : "font-[SF]"
        }`}
      >
        {name}
      </p>
    );
  };

  const FooterTitle = ({ name }) => {
    const isKorean = hasKoreanText(name);

    return (
      <h1
        className={`font-[600] text-[#1d1d1f] mb-[0.8em] text-[12px] mt-[20px]  ${
          isKorean ? "font-[SDL]" : "font-[SF]"
        } `}
      >
        {name}
      </h1>
    );
  };

  return (
    <>
      <div className="h-[70vh] bg-[#f5f5f7] ">
        <div className="mx-auto max-w-[980px] ">
          <div className="pt-[17px] pb-[11px] border-b-2">
            <h4 className="text-[12px] font-[SDM] font-[400] text-[#6e6e73] mb-[9.6px] break-keep tracking-tight leading-4">
              1. ₩1,060,000은 iPhone 14 Pro Max 1TB 모델의 보상 판매 금액으로,
              보상 판매 프로그램은 Apple의 파트너이자 독립적으로 운영되는 제3의
              업체에 의해 제공됩니다. Apple 및 Apple의 계열사는 고객과 파트너 간
              계약의 당사자가 아닙니다. 보상 판매 견적은 예상 금액이며 실제 보상
              판매 금액은 예상 금액보다 낮을 수 있습니다. 보상 판매 금액은 보상
              판매 대상이 되는 제품의 상태, 연도, 구성에 따라 달라집니다. 일부
              기기는 보상 판매 대상이 아닙니다. 크레딧 또는 Apple Store Gift
              Card로 보상 판매를 받으려면 19세 이상이어야 합니다. 보상 판매
              금액은 적용 가능한 새 기기 구입 시 적용하거나 Apple Store Gift
              Card로 받을 수 있습니다. 최종 확정 금액은 보상 판매 대상 기기를
              수령한 후, 예상 금액 산정 시 제시한 기기의 설명과 일치하는지 비교
              검수 후 정해집니다. 부가세는 새로 구입한 기기의 총액을 바탕으로
              부과됩니다. 일부 매장에서는 보상 판매를 제공하지 않으며, 매장 내
              보상 판매와 온라인 보상 판매 프로그램 간 내용에 차이가 있을 수
              있습니다. 일부 매장은 추가 요구 사항이 있을 수 있습니다. Apple의
              보상 판매 파트너사는 어떤 보상 판매도 거래를 거부하거나, 보상 판매
              수량을 제한할 권리를 보유합니다. 적용 가능 기기의 보상 판매 및
              재활용에 대한 자세한 내용은 Apple의 보상 판매 파트너사에서 확인할
              수 있습니다. 규제 및 제한이 적용될 수 있습니다
            </h4>

            <h4 className="text-[12px] font-[SDM] font-[400] text-[#6e6e73] mb-[9.6px]">
              Apple TV+ 이용을 위해서는 가입이 필요합니다.
            </h4>
          </div>

          <div className="flex w-full h-[42vh]">
            <div className="w-1/5 h-full ">
              <FooterTitle name={"쇼핑 및 알아보기"} />
              {items1.map((v, i) => (
                <FooterItems key={i} name={v.name} />
              ))}

              <FooterTitle name={"Apple 지갑"} />
              {items2.map((v, i) => (
                <FooterItems key={i} name={v.name} />
              ))}
            </div>
            <div className="w-1/5 h-full">
              <FooterTitle name={"계정"} />
              {items3.map((v, i) => (
                <FooterItems key={i} name={v.name} />
              ))}

              <FooterTitle name={"엔터테인먼트"} />
              {items4.map((v, i) => (
                <FooterItems key={i} name={v.name} />
              ))}
            </div>
            <div className="w-1/5 h-full">
              <FooterTitle name={"Apple Store"} />
              {items5.map((v, i) => (
                <FooterItems key={i} name={v.name} />
              ))}
            </div>
            <div className="w-1/5 h-full">
              <FooterTitle name={"비즈니스"} />
              {items6.map((v, i) => (
                <FooterItems key={i} name={v.name} />
              ))}

              <FooterTitle name={"교육"} />
              {items7.map((v, i) => (
                <FooterItems key={i} name={v.name} />
              ))}
            </div>
            <div className="w-1/5 h-full">
              <FooterTitle name={"Apple의 가치관"} />
              {items8.map((v, i) => (
                <FooterItems key={i} name={v.name} />
              ))}

              <FooterTitle name={"Apple 정보"} />
              {items9.map((v, i) => (
                <FooterItems key={i} name={v.name} />
              ))}
            </div>
          </div>

          <div className="w-full">
            <div className="w-full border-b-2 flex">
              <h1 className="text-[#626273] text-[12px] font-[SDR] pb-[8px]">
                다양한 쇼핑 방법:&nbsp;
              </h1>
              <h1 className="text-[#0066cc] text-[12px] font-[SDR] pb-[8px] underline cursor-pointer">
                Apple Store를 방문
              </h1>
              <h1 className="text-[#626273] text-[12px] font-[SDR] pb-[8px]">
                하거나,&nbsp;
              </h1>
              <h1 className="text-[#0066cc] text-[12px] font-[SDR] pb-[8px] underline cursor-pointer">
                리셀러
              </h1>
              <h1 className="text-[#626273] text-[12px] font-[SDR] pb-[8px]">
                를 찾아보거나, 080-330-8877번으로 전화하세요.
              </h1>
            </div>
            <div className="flex pt-[8px] w-full justify-between">
              <div className="flex">
                <h1 className="text-[#626273] text-[12px] font-[SDM] pb-[8px] ">
                  Copyright © 2023 Apple Inc. 모든 권리 보유.
                </h1>
                <ul className="flex text-[12px] font-[SDM] text-[#626273] ml-5 h-[16px]">
                  <li className="border-r-[1px] border-[#626273] px-2 cursor-pointer hover:underline">
                    개인정보 처리방침
                  </li>
                  <li className="border-r-[1px] border-[#626273] px-2 cursor-pointer hover:underline">
                    웹 사이트 이용 약관{" "}
                  </li>
                  <li className="border-r-[1px] border-[#626273] px-2 cursor-pointer hover:underline">
                    판매 및 환불{" "}
                  </li>
                  <li className="border-r-[1px] border-[#626273] px-2 cursor-pointer hover:underline">
                    법적 고지{" "}
                  </li>
                  <li className="px-2 cursor-pointer hover:underline ">
                    사이트 맵{" "}
                  </li>
                </ul>
              </div>
              <p className="text-[12px] font-[SDM] text-[#626273] float-right cursor-pointer hover:underline">
                대한민국
              </p>
            </div>

            <div>
              <ul className="flex text-[11px] font-[SDM] text-[#999999] h-[11px] items-center">
                <li className="border-r-[1px] border-[#999999] pr-1 h-full  flex items-center">
                  사업자등록번호 : 120-81-84429
                </li>
                <li className="border-r-[1px] border-[#999999] px-1 h-full flex items-center">
                  통신판매업신고번호 : 제 2011-서울강남-00810호
                </li>
                <li className="border-r-[1px] border-[#999999] px-1 h-full flex items-center">
                  대표이사 : 노하록
                </li>
                <li className="border-r-[1px] border-[#999999] px-1 h-full flex items-center">
                  주소 : 서울 특별시 강남구 영동대로 517
                </li>
                <li className="border-r-[1px] border-[#999999] px-1 h-full flex items-center">
                  대표전화 : 02-6712-6700
                </li>
                <li className="px-1 h-full flex items-center">
                  팩스 : 02-6928-000
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
