import React from 'react';
import { useState } from 'react';
import styled from 'styled-components';

const TabMenu = styled.ul`
  background-color: #dcdcdc;
  color: rgba(73, 73, 73, 0.5);
  font-weight: bold;
  display: flex;
  flex-direction: row;
  justify-items: center;
  align-items: center;
  list-style: none;
  margin-bottom: 7rem;

  .submenu {
    width: 100%;
    padding: 15px 10px;
    cursor: pointer;
  }

  .focused {
    background-color: #4000c7;
    color: rgba(255, 255, 255, 1);
    transition: 0.3s;
  }

  & div.desc {
    text-align: center;
  }
`;

const Desc = styled.div`
  text-align: center;
`;

export default function Tab() {
  const [currentTab, setCurrentTab] = useState(0);

  const menuArr = [
    { name: 'REMEMBER TRIP', content: 'Tab menu ONE' },
    { name: 'DIARY', content: 'Tab menu TWO' },
    { name: 'ACCOUNT', content: 'Tab menu THREE' },
    { name: 'MYPAGE', content: 'Tab menu THREE' },
  ];

  const selectMenuHandler = index => {
    setCurrentTab(index);
  };

  return (
    <div>
      <TabMenu>
        {menuArr.map((ele, index) => {
          return (
            <li
              key={index}
              className={currentTab === index ? 'submenu focused' : 'submenu'}
              onClick={() => selectMenuHandler(index)}
            >
              {ele.name}
            </li>
          );
        })}
      </TabMenu>
      <Desc>
        <p>{menuArr[currentTab].content}</p>
      </Desc>
    </div>
  );
}
