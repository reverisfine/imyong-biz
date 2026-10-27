/* 29강 목차 · ready:true 인 강만 열립니다 · 2027학년도 서울 중등 임용 경영·금융 */
const LESSONS=[
 {n:1, t:"총론 편제와 교과 구조", c:20, ready:true},
 {n:2, t:"NCS와 직업기초능력", c:20, ready:true},
 {n:3, t:"교육 평가", c:20, ready:true},
 {n:4, t:"협동학습 모형", c:20, ready:true},
 {n:5, t:"교수 설계와 교수·학습 방법", c:20, ready:true},
 {n:6, t:"경제 활동과 미시경제", c:20, ready:false},
 {n:7, t:"상업 경제와 경제 구조", c:20, ready:false},
 {n:8, t:"기업과 경영", c:20, ready:false},
 {n:9, t:"조직행동론", c:20, ready:false},
 {n:10, t:"인사관리", c:20, ready:false},
 {n:11, t:"유통과 물류", c:20, ready:false},
 {n:12, t:"생산관리", c:20, ready:false},
 {n:13, t:"ERP", c:20, ready:false},
 {n:14, t:"마케팅", c:20, ready:false},
 {n:15, t:"무역이론·정책·국제수지", c:20, ready:true},
 {n:16, t:"무역 계약·거래조건·Incoterms", c:20, ready:true},
 {n:17, t:"대금결제·국제운송·해상보험", c:20, ready:true},
 {n:18, t:"재무제표와 회계의 순환과정", c:20, ready:false},
 {n:19, t:"현금·금융자산·재고자산", c:20, ready:false},
 {n:20, t:"유형자산·무형자산·투자부동산", c:20, ready:true},
 {n:21, t:"부채·자본·수익", c:20, ready:false},
 {n:22, t:"리스·종업원급여·차입원가·현금흐름표", c:20, ready:false},
 {n:23, t:"재무비율과 회계변경", c:20, ready:true},
 {n:24, t:"조세총론·국세기본법·세무조정", c:20, ready:false},
 {n:25, t:"소득세·법인세", c:20, ready:true},
 {n:26, t:"부가가치세", c:20, ready:true},
 {n:27, t:"원가계산", c:20, ready:false},
 {n:28, t:"원가관리와 의사결정", c:20, ready:false},
 {n:29, t:"금융과 재무관리", c:20, ready:false}
];
/* 홈 화면 묶음 · 강사 교재(전공내용학 1·2) 체계 */
const CLUSTERS=[
 {g:1,side:"L",row:1,name:"교과교육학",          ns:[1,2,3,4,5]},
 {g:2,side:"L",row:2,name:"1권 · 경제·경영",     ns:[6,7,8,9,10]},
 {g:3,side:"L",row:3,name:"1권 · 운영·마케팅",   ns:[11,12,13,14]},
 {g:4,side:"R",row:1,name:"1권 · 무역",          ns:[15,16,17]},
 {g:5,side:"R",row:2,name:"2권 · 재무회계",      ns:[18,19,20,21,22,23]},
 {g:6,side:"R",row:3,name:"2권 · 세무·원가·금융", ns:[24,25,26,27,28,29]}
];
const PAD=n=>String(n).padStart(2,'0');
const LKEY=n=>'imyong.p'+PAD(n);

/* 사이트 공통 셸 · 모든 페이지 상단 내비게이션 */
function buildNav(cur){
  const w=document.createElement('div');w.className='nav';
  const opts=LESSONS.map(l=>`<option value="${l.n}" ${l.n===cur?'selected':''} ${l.ready?'':'disabled'}>${PAD(l.n)}강 · ${l.t}${l.ready?'':' (준비 중)'}</option>`).join('');
  const prev=LESSONS.filter(l=>l.ready&&l.n<cur).pop();
  const next=LESSONS.filter(l=>l.ready&&l.n>cur)[0];
  w.innerHTML=`<div class="in">
    <a class="brand" href="index.html">
      <svg width="26" height="26" viewBox="0 0 46 46" aria-hidden="true">
        <path d="M4.93 28.54A17 5 -19 0 1 37.07 17.46" fill="none" stroke="#8FC9A3" stroke-width="2" stroke-linecap="round"/>
        <circle cx="21" cy="23" r="9.5" fill="#EE8C93"/>
        <circle cx="18" cy="20" r="2.6" fill="#DB7F8C"/>
        <circle cx="24" cy="26" r="1.7" fill="#DB7F8C"/>
        <path d="M4.93 28.54A17 5 -19 0 0 37.07 17.46" fill="none" stroke="#8FC9A3" stroke-width="2" stroke-linecap="round"/>
      </svg>
      <span class="bt">임용 행성 지도</span><span class="bs">경영·금융</span></a>
    <span class="sp"></span>
    <a class="nb" href="../index.html">📒 공부장</a>
    ${cur?`<a class="nb home" href="index.html">⌂ 홈</a>
      <select id="navSel" aria-label="강 선택">${opts}</select>
      <a class="nb ${prev?'':'off'}" href="${prev?'lesson'+PAD(prev.n)+'.html':'#'}">← 이전</a>
      <a class="nb ${next?'':'off'}" href="${next?'lesson'+PAD(next.n)+'.html':'#'}">다음 →</a>
      <a class="nb ty" href="typing.html?l=${PAD(cur)}">🚀 타이핑</a>`
     :`<a class="nb ty" href="typing.html">🚀 행성 타이핑</a><a class="nb" href="lesson01.html">01강 열기</a>`}
  </div>`;
  document.body.insertBefore(w,document.body.firstChild);
  const sel=w.querySelector('#navSel');
  if(sel)sel.onchange=()=>{location.href='lesson'+PAD(sel.value)+'.html';};
  if(cur)buildBottom(cur);
}

/* 페이지 맨 하단 · 맨 위로 / 홈으로 */
function buildBottom(cur){
  const foot=document.querySelector('.foot');
  if(!foot)return;
  const prev=LESSONS.filter(l=>l.ready&&l.n<cur).pop();
  const next=LESSONS.filter(l=>l.ready&&l.n>cur)[0];
  const box=document.createElement('div');
  box.className='pagend';
  box.innerHTML=`
    <button class="pgb up" id="pgUp">↑ 맨 위로</button>
    <a class="pgb" href="index.html">⌂ 홈으로</a>
    ${prev?`<a class="pgb" href="lesson${PAD(prev.n)}.html">← ${PAD(prev.n)}강</a>`:''}
    ${next?`<a class="pgb" href="lesson${PAD(next.n)}.html">${PAD(next.n)}강 →</a>`:''}`;
  foot.parentNode.insertBefore(box,foot);
  box.querySelector('#pgUp').onclick=()=>scrollTo({top:0,behavior:'smooth'});
}
