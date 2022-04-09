import React from "react";

function SetDiary() {
  return (
    <div>
      <h1>HOW'S YOUR TRIP ?</h1>
      <form>
        <div>
          <input type="text" placeholder="여기에 기록남겨요" />
        </div>
        <div>
          <input type="text" placeholder="태그를 만드세요"></input>
        </div>
        <div>
          <button className="btn btn-diary" type="submit">
            저장
          </button>
        </div>
      </form>
    </div>
  );
}

export default SetDiary;
