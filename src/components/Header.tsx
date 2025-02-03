import styled from '../styles/header.module.scss';
import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from '../store';
import { eng, kor } from '../store';
import banner from '../assets/img/banner-skyscraper.jpg';
// import init, { greet } from 'wasm-lib';

const Header = () => {
  // const [isLanguage, setLanguage] = useState<string>('Eng');
  const dispatch = useDispatch<AppDispatch>();
  const currentLanguage = useSelector(
    (state: RootState) => state.language.language,
  );

  const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedLanguage = e.target.value;
    if (selectedLanguage === 'eng') {
      dispatch(eng());
      console.log('eng');
    } else {
      dispatch(kor());
      console.log('kor');
    }
  };

  // const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
  //   setLanguage(e.target.value);
  // };

  //import Rust lib from React
  // const [message, setMessage] = useState('');

  // const handleClick = async () => {
  //   await init('/wasm_lib_bg.wasm'); // WebAssembly init
  //   const greeting = greet('Neo Terra');
  //   setMessage(greeting);
  // };

  return (
    <div>
      {/* <button onClick={handleClick}>Click</button>
      <p>{message}</p> */}
      <header id={styled.header}>
        <div id={styled.logo}>
          <span id={styled.main}>NTI</span>
          <span>NEO TERRA INVEST</span>
        </div>
        <div id={styled.menu}>
          <button id={styled.language}>
            <select
              name="language"
              id="language-select"
              onChange={handleLanguageChange}
              value={currentLanguage}
            >
              <option value="eng">ENG</option>
              <option value="kor">KOR</option>
            </select>
          </button>
        </div>
      </header>
      <div id={styled.banner}>
        <div id={styled.bannerImage}>
          <img
            src={banner}
            alt="Banner"
            // srcSet="../assets/img/banner-skyscraper.jpg 480w, ../assets/img/banner-skyscraper.jpg 1080w"
            sizes="(max-width: 600px) 480px, 1080px"
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
