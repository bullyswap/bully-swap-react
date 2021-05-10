import './App.css';
import ComingSoon from "react-coming-soon";

function App() {
  return (
      <div>
        <ComingSoon
            illustration = "logo512.png"
            title={["BullySwap(BULLY) is an automatic liquidity acquisition yield farm on BSC. ", <br/>,<br/>,
                "Contract: ",
                <a target="_blank" href="https://bscscan.com/token/0xa09e7879fdd1363e638c51a6c8531b44273cfdba">0xa09e7879fdd1363e638c51a6c8531b44273cfdba</a>
            ]}
            subtitle="Coming soon:"
            bgColor="#121630"
            textColor="#de1b28"
            date="Tue Jun 01 2021 00:00:00 GMT-0500 (Eastern Standard Time)"
        />
      </div>
  );
}

export default App;
