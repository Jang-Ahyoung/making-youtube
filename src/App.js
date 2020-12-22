import { useEffect, useState } from 'react';
import './App.css';
import Meals from './components/meals';

function App() {

  const [meals, setMeals] = useState([]);

  // 오늘 날짜 정보
  const today = new Date();
  console.log(today.toLocaleString()); // 2020. 12. 22. 오후 6:09:47
  console.log(today.toLocaleDateString()); // 2020.12.22.

  // 2주전 날짜 정보
  today.setDate(today.getDate() - 14);
  const Monthbefore2Weeks = today.getMonth() + 1;
  const dayBefore2Weeks = today.getFullYear() + '-' + Monthbefore2Weeks + '-' + today.getDate();
  console.log(dayBefore2Weeks); // 2020-12-8 -> 일의 숫자가 08 형태여야지 FETCH API에 적용이돼!!

  // 한달 후 날짜 정보
  const todayForAfer = new Date();
  todayForAfer.setMonth(todayForAfer.getMonth() + 1);
  const MonthAfter1Month = todayForAfer.getMonth() + 1;
  const dayAfter1Month = todayForAfer.getFullYear() + '-' + MonthAfter1Month + '-' + todayForAfer.getDate();
  console.log(dayAfter1Month); // 2021-1-22

  useEffect(() => {
    var requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };

    fetch("https://api.pusan.ac.kr:8443/meal/sub?no=3&startDt=2020-12-08&endDt=2021-1-02", requestOptions)
      .then(response => response.json())
      .then(result => setMeals(result))
      .catch(error => console.log('error', error));

  }, []);
  // var today = new Date();

  // console.log(today);
  // console.log(today.getFullYear());
  // console.log((today.getMonth() + 1));
  // console.log(today.getDate());
  // var dateCal = today.getDate() + 1;
  // console.log(dateCal.toLocalString());

  // var date = new Date();
  // console.log(date.toLocaleString());
  // // const today_date=

  // date.setMonth(date.getMonth() + 1);
  // console.log(date.toLocaleString());
  // date.setDate(date.getDate() - 26);
  // console.log(date.toLocaleString());

  return (
    <>
      <Meals meals={meals} />
    </>


  );
}

export default App;
