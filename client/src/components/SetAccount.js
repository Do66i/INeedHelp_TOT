import React from 'react';

function SetAccount() {
  return (
    <div>
      <form>
        <div>
          <h2>trip-title 여행에</h2>
        </div>
        <div>
          <h2>총 AllMoney 만원 지참</h2>
        </div>
        <div>
          <span>여행 tripCount 일차</span>
          <input type="date" />
        </div>
        <div>
          <label>사용한사람</label>
          <input type="text" />
        </div>
        <div>
          <input type="number" placeholder="얼마를 지출했나요?" />
          <label>원 사용!</label>
        </div>
        <div>
          <input type="text" placeholder="무엇을 구입했나요??" />
          <label>원 사용!</label>
        </div>
        <div>
          <input type="text" placeholder="간단한 메모를 입력해요" />
          <label>MEMO</label>
        </div>
      </form>
    </div>
  );
}

export default SetAccount;
