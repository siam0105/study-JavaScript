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

  /*
나이가 같은 경우: '친구'

자신보다 나이가 어릴 경우:

2 - 1. 상대방 성별이 남성인 경우: '남동생',

2 - 2. 상대방 성별이 여성인 경우: '여동생'

자신보다 나이가 많을 경우:

3 - 1. 상대방 성별이 남성인 경우: '형',

3 - 2. 상대방 성별이 여성인 경우: '누나' */
// 나의 나이와, 나의 성별을 저장하는 변수
let myAge = 26;
let myGender = 'male';

// 호칭을 담은 변수
let callOlderBrother = '형';
let callOlderSister = '누나';
let callFriend = '친구';
let callYoungerSister = '여동생';
let callYoungerBrother = '남동생';

// 상대방의 나이와 성별에 따른 호칭을 리턴하는 함수 whatShouldICall를 완성하세요.
function whatShouldICallYou(yourAge, yourGender) {
  // 여기에 코드를 작성해 주세요.
  if(yourAge == myAge){
    return(callFriend);
  }else if(yourAge >= myAge){
    if(yourGender == myGender){
      return(callOlderBrother);
    }else{
      return(callOlderSister);
    }
  }else{
    if(yourGender == myGender){
      return(callYoungerBrother);
    }else{
      return(callYoungerSister);
    }
  }
}

// 테스트 코드
let result1 = whatShouldICallYou(25, 'female');
let result2 = whatShouldICallYou(20, 'male');
let result3 = whatShouldICallYou(26, 'female');
let result4 = whatShouldICallYou(30, 'male');
let result5 = whatShouldICallYou(31, 'female');

console.log(result1);
console.log(result2);
console.log(result3);
console.log(result4);
console.log(result5);