import React, { FC, MouseEvent, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.css';
import App from '../../App';

const Header: FC = ({ children }) => {
  const [clicked, setClicked] = useState([false, false, false, false]);
 
  const changeButtonColor = (num: number) => {
    let newClicked = [false, false, false, false];
    newClicked[num] = true;
    setClicked(newClicked);
  };

  // 메타마스크에서 가져올 정보를 담기 위한 useState 
  const [account, setAccount] = useState<string>("");

  // 메타마스크를 통해서 계정을 가져오는 함수
  const getAccount = async () => { 
    try {
      // 메타마스크 계정 주소 설정
      if(window.ethereum) {
        const accounts = await window.ethereum.request({
          method: "eth_requestAccounts",
        });
        setAccount(accounts[0]);
      }
      // 메타마스크가 설치되있지 않으면 실행되지 않음
      else {
        alert("Install Metamask!");
      }
    } 
    catch(error) {
      console.error(error);
    }
  }
  const onClickLogin = async() => {
    try {
      if(!account) {
        getAccount();
      }
      else {
        console.log("Already Login Done!")
      }
    }
    catch(error) {
      console.error(error);
    }
  }

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <Link to="/">
          <button className={`${styles.headerBtn} ${styles.logoBtn}`}>
            로고 이미지 추가예정
          </button>
        </Link>
        <Link
          to="/Marketplace"
          className={clicked[0] ? styles.clickedLink : ''}
        >
          <button
            className={`${styles.headerBtn} ${styles.MarketplaceBtn}`}
            onClick={() => changeButtonColor(0)}
          >
            Marketplace
          </button>
        </Link>
        <Link to="/MyNFTPage" className={clicked[1] ? styles.clickedLink : ''}>
          <button
            className={`${styles.headerBtn} ${styles.MyNFTPageBtn}`}
            onClick={() => changeButtonColor(1)}
          >
            나의 NFT
          </button>
        </Link>
        <Link to="/Breeding" className={clicked[2] ? styles.clickedLink : ''}>
          <button
            className={`${styles.headerBtn} ${styles.MyNFTPageBtn}`}
            onClick={() => changeButtonColor(2)}
          >
            Breeding
          </button>
        </Link>
        <Link to="/Game" className={clicked[3] ? styles.clickedLink : ''}>
          <button
            className={`${styles.headerBtn} ${styles.MarketplaceBtn}`}
            onClick={() => changeButtonColor(3)}
          >
            Game
          </button>
        </Link>  
        <button className={`${styles.headerBtn} ${styles.loginBtn}`}
        onClick={onClickLogin}>
          Login
        </button>
      </div>
      <div className={styles.children}>{children}</div>
    </div>
  );
};

export default Header;
