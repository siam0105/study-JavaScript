console.log('hello Codeit!');

function welcome(name){
    console.log('안녕하세요 ' + name + '님!');
};
welcome('이수아');
welcome('코드잇');
welcome('몽실');
welcome('두리');

/*주문 시 특별히 말씀해주시지 않으시면, 
음료는 스프라이트가 기본으로 제공됩니다.

샌드위치 이름(sandwich)과 음료 이름(drink)을 입력받고,
다음과 같은 문구를 출력하는 함수(orderSetMenu)를 만들어 주세요. */
function orderSetMenu(sandwich, drink ='스프라이트'){
    console.log(`주문하신 ${sandwich}, ${drink} 세트메뉴 나왔습니다!`);
  }
  // 테스트 코드
  orderSetMenu('코드웨잇 클럽');
  orderSetMenu('터키베이컨 아보카도', '코카콜라');
  orderSetMenu('코드웨잇 멜트');
  orderSetMenu('이탈리안 비엠티', '닥터페퍼');
  orderSetMenu('에그마요', '환타 오렌지');