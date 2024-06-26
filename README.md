# 💡진희팀 PLAY SCENT 핵심 프로젝트 <PLAY SCENT>
### <시연 영상>
![ps800](https://github.com/2023-SMHRD-KDT-AI-16/PLAY_SCENT/assets/157596156/3fe6194d-ef8f-4afa-8e18-ed419b26707b)
<br>

----

## 🎉서비스 소개.
- 서비스 명 : 빅테이터 기반 **개인 맞춤 향수 추천 판매** 서비스를 기획 개발.
- 서비스 소개 : 우리 PLAY SCENT팀은 프리미엄 향수의 접근성과 고가의 향수 대충화를 높이는 전략으로<br>
  간단한 설문조사로 얻은 고객별 향수 취향 데이터를 통하여 맞춤 향수제품을 추천해주는 서비스 입니다.

## 📌주요 기능
- 네이버 로그인,로그아웃API 활용한 회원가입, 로그인, 로그아웃 기능.
- 신규고객, 회원가입시 설문조사를 통해 고객 맞춤 향수 추천 서비스.
- 코사인-유사도 기반 개인별 맞춤 향수 추천 서비스.
- 장바구니 & 최종 구매 간편결제 기능 제공.
- 각 향수 제품에 관한 리뷰와 평가 작성 기능.
- 향수 이름 또는 브랜드 이름으로 검색 기능 제공.
- 대표적인 향과 각 카테고리별 베스트 향수 추천 & UI진열.
- 향기네컷 제작과 출력 서비스 기능.
- 새로운 경험 선사 - 애니메이션, 퍼포먼스 구현.

## 🌟주요기술
![image](https://github.com/2023-SMHRD-KDT-AI-16/PLAY_SCENT/assets/157596156/1da8684d-af63-4f53-b564-807d078525a5)
**진희팀**의 대표적인 기술로는 **고객맞춤 향수추천** 서비스 입니다.<br>
신규 고객이 설문조사를 진행할때 **체크박스** 마다 향기의 대표적인 향들이 **value값으로** 들어 있습니다.<br>
원하는 항목으로 선택을 마치면 제출시 **우리의 대조군**과 비교할수 있는 **한줄의 데이터**가 완성됩니다.<br>
이대상을 **파이썬 기반의 flask서버**로 전송하여 flask서버에서 우리가 준비해놓은 **대조군들을 불러와**<br>
설문조사로 얻어진 한줄의 데이터 이둘을 **코사인유사도 체크 과정**을 거쳐 **가장 유사도가 높은 best5 향수식별자**를<br>
우리의 **자바 서블릿 서버**로 전송해 줍니다. 이 **식별자 번호**로 DB에 저장된 **향수 정보**를 불어와 프론트UI로 보여줍니다.

---- 
<br>
  
## 📅개발 기간 :  2024.02.23 ~ 2024.04.04

### ⛏ 개발 스택 : JAVA, Javascript,python,HTML5,CSS3, JSP,Servlet, Flask, Apache,MyBatis, Oracle, Github
![사용언어](https://github.com/2023-SMHRD-KDT-AI-16/PLAY_SCENT/assets/157596156/a1a14a35-aa8a-4892-ba1b-fdf7f38971e2)

----

<br>

## 📝 유스케이스
<img width="700" alt="진희팀 유스2" src="https://github.com/2023-SMHRD-KDT-AI-16/PLAY_SCENT/assets/157596156/1a8fc9c4-f9ec-43a5-955a-51c635786d13">

## 🔄서비스 흐름도
<img width="749" alt="PLAYScent최종 서비스흐름도" src="https://github.com/2023-SMHRD-KDT-AI-16/PLAY_SCENT/assets/157596156/33ea78be-c9a3-4309-a6fc-1fa7a565cacf">
----

## 📝 ERD
![PSERD2](https://github.com/2023-SMHRD-KDT-AI-16/PLAY_SCENT/assets/157596156/5de04b42-13af-498d-b229-693e536662cd)

<br>

## 💻 PLAY SCENT Main페이지 입니다.
<img width="650" alt="mainps" src="https://github.com/2023-SMHRD-KDT-AI-16/PLAY_SCENT/assets/157596156/b2821843-255c-4d1a-b1f1-df3784b653f4">

## 💻 PLAY SCENT 서브페이지 입니다.
<img width="120" alt="설문조사" src="https://github.com/2023-SMHRD-KDT-AI-16/PLAY_SCENT/assets/157596156/24a8e243-11b3-4a68-848e-df41a0489c87">
<img width="330" alt="향수 상세페이지" src="https://github.com/2023-SMHRD-KDT-AI-16/PLAY_SCENT/assets/157596156/4276137b-9059-44a9-bc73-2af405264de8">
<img width="330" alt="플로럴" src="https://github.com/2023-SMHRD-KDT-AI-16/PLAY_SCENT/assets/157596156/2cd896be-47cb-4630-9ca6-2d0e4e692a37">
<img width="330" alt="장바구니페이지" src="https://github.com/2023-SMHRD-KDT-AI-16/PLAY_SCENT/assets/157596156/ed833375-eb7c-4364-ae41-62f88dc7b3d9">
<img width="330" alt="주문페이지" src="https://github.com/2023-SMHRD-KDT-AI-16/PLAY_SCENT/assets/157596156/d815383a-6130-49e1-9022-27d00b5fb337">
<img width="330" alt="최종결제" src="https://github.com/2023-SMHRD-KDT-AI-16/PLAY_SCENT/assets/157596156/3e42a1ca-7784-4530-abf2-6bce6b3fe91e">
<img width="330" alt="향기네컷" src="https://github.com/2023-SMHRD-KDT-AI-16/PLAY_SCENT/assets/157596156/e2f1225b-7215-4efe-9d83-187d42f81e06">
<img width="330" alt="마이페이지" src="https://github.com/2023-SMHRD-KDT-AI-16/PLAY_SCENT/assets/157596156/095e3d5b-4465-4893-a6c5-37bc5585dc93">

----
<br>

## <진희팀 PLAY SCENT>
### 👨🏻‍💻 팀원  
- **오진희 (팀장)** :  (https://github.com/krafjin56)
- **김준혁 (부팀장)**:  (https://github.com/junhyeok2921)
- **김경민**:  (https://github.com/kyeong68)
- **장민중**:  (https://github.com/Beyond-Boolean)



## 🔖팀원소개 및 상세역활.
<img width="796" alt="팀원소개" src="https://github.com/2023-SMHRD-KDT-AI-16/PLAY_SCENT/assets/157596156/9422d7a3-b0c4-4371-8edd-419bdd9f3cf4">

----

<br>

## 🛠️ 트러블 이슈.
- ### 1). 파이썬 Flask 서버와 자바의 jsp 사이의 데이터 전송에 대해  언어가 서로 달라 어떻게 <br>
  전송해야할지 에대해 매몰되어 너무어렵게 생각하였다.
  <img width="785" alt="image" src="https://github.com/2023-SMHRD-KDT-AI-16/PLAY_SCENT/assets/157596156/3e66b393-5669-4da8-af68-8e764d130f76">

  **해결 방안): 간단하게 **플라스크서버 주소로 get요청**을보내 데이터를 실어 보내어 간단하게 해결 할수 있었습니다.** 
  <br>
  ( window.location.replace("flask서버주소") ) 사용.

- ### 2). 장바구니페이지에서 선택한 제품만의 수량 정보만 최종 주문/결제 페이지로 이동되지 않고 모든 수량 정보가 도착함.
    ![image](https://github.com/2023-SMHRD-KDT-AI-16/PLAY_SCENT/assets/157596156/e156e1ac-e2da-4b83-85e3-107cf3aa0da5)

   **해결 방안):** 이를 구분해주기위해 서버에서 다시한번 장바구니 목록 데이터를 불러와, **이중for문 돌려** <br>
   **선택한 체크박스의 장바구니 식별자**와 일치하는 순간의 **인덱스번호로 수량이 담긴 배열에서도 동일한 <br>
  인덱스번호 값**에 해당한 수량을 정확하게 뽑아와 해결할수 있었습니다.

  









