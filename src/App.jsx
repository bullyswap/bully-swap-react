import './App.scss';
import ComingSoon from "./ComingSoon";

function App() {
  return (
      <div>
        <ComingSoon
            illustration = "logo512.png"
            title={"BullySwap(BULLY) is an automatic liquidity acquisition yield farm on BSC. "}

            bgColor="#121630"
            textColor="#de1b28"
            date="Tue Jun 01 2022 00:00:00 GMT-0500 (Eastern Standard Time)">
            <p>Contract: </p>
            <a target="_blank" href="https://bscscan.com/token/0xa09e7879fdd1363e638c51a6c8531b44273cfdba">0xa09e7879fdd1363e638c51a6c8531b44273cfdba</a>
            <p>Coming soon:</p>
        </ComingSoon>
      </div>
  );
}

export default App;
