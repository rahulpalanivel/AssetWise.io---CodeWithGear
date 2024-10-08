import React, { useState, useEffect } from "react";
import Sidebar, { SidebarItem } from "./components/SideBar";
import {
  LayoutDashboard,
  Home,
  StickyNote,
  Layers,
  Flag,
  Calendar,
  LifeBuoy,
  Settings,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Accordion, AccordionItem } from 'react-accessible-accordion';



export default function UserInvestment() {
  const navigate = useNavigate();
  const ListItem = ({ ticker, price, change_amount, volume }) => {
    const [isExpanded, setIsExpanded] = useState(false);
  
    const toggleAccordion = () => {
      setIsExpanded(!isExpanded);
    };
  
    return (
      <Accordion allowZeroExpanded>
        <AccordionItem>
          <h2>
            <button
              className="accordion-header border-b border-gray-300 py-2 px-4 w-full text-left focus:outline-none"
              onClick={toggleAccordion}
            >
              <strong>{ticker}</strong> 
            </button>
          </h2>
          {isExpanded && (
            <div className="accordion-content px-4 py-2 bg-gray-100">
             Price: {price} Change: {change_amount} Volume: {volume}
            </div>
          )}
        </AccordionItem>
      </Accordion>
    );
  };
  

  const ListSection = ({ title, data }) => (
    <>
      <h2>{title}</h2>
      <ul>
        {data.map((item, index) => (
          <ListItem key={index} {...item} />
        ))}
      </ul>
    </>
  );

  const [data, setData] = useState({
    top_gainers: [],
    top_losers: [],
    most_actively_traded: [],
  });
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredData, setFilteredData] = useState([]);

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
    const filtered = data.filter((item) =>
      item.ticker.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredData(filtered);
  };

  //   useEffect(() => {
  //     const fetchDataAndUpdateState = async () => {
  //       try {
  //         const response = await axios.get(
  //           "https://www.alphavantage.co/query?function=TOP_GAINERS_LOSERS&apikey=W3729LPOAAIUZDQ0"
  //         );
  //         console.log("Data fetched:", response.data);
  //         setData(response.data);
  //         setFilteredData(sampledata);
  //       } catch (error) {
  //         console.log("Error fetching data:", error);
  //       }
  //     };

  //     fetchDataAndUpdateState();
  //   }, []);

  const sampledata = [
    {
      metadata: "Top gainers, losers, and most actively traded US tickers",
      last_updated: "2024-03-15 16:16:00 US/Eastern",
      top_gainers: [
        {
          ticker: "VERBW",
          price: "0.18",
          change_amount: "0.1774",
          change_percentage: "6823.0769%",
          volume: "5901853",
        },
        {
          ticker: "GROMW",
          price: "2.11",
          change_amount: "1.8055",
          change_percentage: "592.9392%",
          volume: "406",
        },
        {
          ticker: "VERB",
          price: "0.4422",
          change_amount: "0.3022",
          change_percentage: "215.8571%",
          volume: "533003855",
        },
        {
          ticker: "GERN",
          price: "3.36",
          change_amount: "1.61",
          change_percentage: "92.0%",
          volume: "111266766",
        },
        {
          ticker: "RCRTW",
          price: "0.0096",
          change_amount: "0.0046",
          change_percentage: "92.0%",
          volume: "500",
        },
        {
          ticker: "LIAN",
          price: "0.3478",
          change_amount: "0.1578",
          change_percentage: "83.0526%",
          volume: "23084372",
        },
        {
          ticker: "GLACR",
          price: "0.3199",
          change_amount: "0.1398",
          change_percentage: "77.6235%",
          volume: "3772",
        },
        {
          ticker: "CDLX",
          price: "14.5",
          change_amount: "6.315",
          change_percentage: "77.1533%",
          volume: "18783503",
        },
        {
          ticker: "ATNFW",
          price: "0.0149",
          change_amount: "0.0064",
          change_percentage: "75.2941%",
          volume: "110660",
        },
        {
          ticker: "EUDAW",
          price: "0.29",
          change_amount: "0.1242",
          change_percentage: "74.9095%",
          volume: "24351",
        },
        {
          ticker: "BNZIW",
          price: "0.0356",
          change_amount: "0.0146",
          change_percentage: "69.5238%",
          volume: "75363",
        },
        {
          ticker: "BIAFW",
          price: "0.3792",
          change_amount: "0.1548",
          change_percentage: "68.984%",
          volume: "3045",
        },
        {
          ticker: "AEON+",
          price: "2.0",
          change_amount: "0.81",
          change_percentage: "68.0672%",
          volume: "253384",
        },
        {
          ticker: "EVGRW",
          price: "0.053",
          change_amount: "0.0214",
          change_percentage: "67.7215%",
          volume: "63916",
        },
        {
          ticker: "SLAMW",
          price: "0.2",
          change_amount: "0.0749",
          change_percentage: "59.8721%",
          volume: "13358",
        },
        {
          ticker: "JTAI",
          price: "1.08",
          change_amount: "0.4038",
          change_percentage: "59.7161%",
          volume: "100812581",
        },
        {
          ticker: "SYTAW",
          price: "0.061",
          change_amount: "0.0226",
          change_percentage: "58.8542%",
          volume: "34580",
        },
        {
          ticker: "HCMAU",
          price: "13.49",
          change_amount: "4.94",
          change_percentage: "57.7778%",
          volume: "4791",
        },
        {
          ticker: "ALCYW",
          price: "0.2303",
          change_amount: "0.0803",
          change_percentage: "53.5333%",
          volume: "6627",
        },
        {
          ticker: "CJET",
          price: "0.49",
          change_amount: "0.168",
          change_percentage: "52.1739%",
          volume: "1079237",
        },
      ],
      top_losers: [
        {
          ticker: "HOFVW",
          price: "0.0043",
          change_amount: "-0.012",
          change_percentage: "-73.6196%",
          volume: "236991",
        },
        {
          ticker: "CISS",
          price: "0.0283",
          change_amount: "-0.0507",
          change_percentage: "-64.1772%",
          volume: "194288364",
        },
        {
          ticker: "VATE^",
          price: "0.02",
          change_amount: "-0.0245",
          change_percentage: "-55.0562%",
          volume: "544064",
        },
        {
          ticker: "BLEUR",
          price: "0.0553",
          change_amount: "-0.0546",
          change_percentage: "-49.6815%",
          volume: "2764",
        },
        {
          ticker: "PUCKW",
          price: "0.0105",
          change_amount: "-0.0095",
          change_percentage: "-47.5%",
          volume: "106",
        },
        {
          ticker: "BRSHW",
          price: "0.0054",
          change_amount: "-0.0044",
          change_percentage: "-44.898%",
          volume: "35300",
        },
        {
          ticker: "NKGNW",
          price: "0.14",
          change_amount: "-0.0952",
          change_percentage: "-40.4762%",
          volume: "19251",
        },
        {
          ticker: "MLECW",
          price: "0.033",
          change_amount: "-0.0194",
          change_percentage: "-37.0229%",
          volume: "43107",
        },
        {
          ticker: "CINGW",
          price: "0.021",
          change_amount: "-0.012",
          change_percentage: "-36.3636%",
          volume: "1497",
        },
        {
          ticker: "PERF+",
          price: "0.06",
          change_amount: "-0.034",
          change_percentage: "-36.1702%",
          volume: "701",
        },
        {
          ticker: "IMRX",
          price: "1.91",
          change_amount: "-0.99",
          change_percentage: "-34.1379%",
          volume: "3554870",
        },
        {
          ticker: "PAYOW",
          price: "0.165",
          change_amount: "-0.085",
          change_percentage: "-34.0%",
          volume: "18278",
        },
        {
          ticker: "ESLAW",
          price: "0.04",
          change_amount: "-0.0193",
          change_percentage: "-32.5464%",
          volume: "10",
        },
        {
          ticker: "CNFRZ",
          price: "11.78",
          change_amount: "-5.5606",
          change_percentage: "-32.0669%",
          volume: "9337",
        },
        {
          ticker: "AIRJ",
          price: "12.54",
          change_amount: "-5.89",
          change_percentage: "-31.9588%",
          volume: "29171",
        },
        {
          ticker: "PLMJW",
          price: "0.15",
          change_amount: "-0.0699",
          change_percentage: "-31.7872%",
          volume: "4",
        },
        {
          ticker: "SBXC+",
          price: "0.1",
          change_amount: "-0.045",
          change_percentage: "-31.0345%",
          volume: "28685",
        },
        {
          ticker: "GRPN",
          price: "12.59",
          change_amount: "-5.58",
          change_percentage: "-30.71%",
          volume: "9826611",
        },
        {
          ticker: "HYZNW",
          price: "0.0276",
          change_amount: "-0.0122",
          change_percentage: "-30.6533%",
          volume: "100",
        },
        {
          ticker: "SLS",
          price: "1.1",
          change_amount: "-0.45",
          change_percentage: "-29.0323%",
          volume: "7247447",
        },
      ],
      most_actively_traded: [
        {
          ticker: "VERB",
          price: "0.4422",
          change_amount: "0.3022",
          change_percentage: "215.8571%",
          volume: "533003855",
        },
        {
          ticker: "FSR",
          price: "0.1738",
          change_amount: "0.0189",
          change_percentage: "12.2014%",
          volume: "376492670",
        },
        {
          ticker: "BTTX",
          price: "0.0446",
          change_amount: "0.0096",
          change_percentage: "27.4286%",
          volume: "200812673",
        },
        {
          ticker: "CISS",
          price: "0.0283",
          change_amount: "-0.0507",
          change_percentage: "-64.1772%",
          volume: "194288364",
        },
        {
          ticker: "SOXS",
          price: "3.58",
          change_amount: "0.07",
          change_percentage: "1.9943%",
          volume: "185656606",
        },
        {
          ticker: "SQQQ",
          price: "11.36",
          change_amount: "0.4",
          change_percentage: "3.6496%",
          volume: "155431635",
        },
        {
          ticker: "GRAB",
          price: "3.17",
          change_amount: "-0.07",
          change_percentage: "-2.1605%",
          volume: "126283869",
        },
        {
          ticker: "SOUN",
          price: "8.91",
          change_amount: "0.54",
          change_percentage: "6.4516%",
          volume: "125739493",
        },
        {
          ticker: "MPW",
          price: "4.42",
          change_amount: "0.22",
          change_percentage: "5.2381%",
          volume: "121070826",
        },
        {
          ticker: "AAPL",
          price: "172.62",
          change_amount: "-0.38",
          change_percentage: "-0.2197%",
          volume: "119632649",
        },
        {
          ticker: "GERN",
          price: "3.36",
          change_amount: "1.61",
          change_percentage: "92.0%",
          volume: "111266766",
        },
        {
          ticker: "SPY",
          price: "509.67",
          change_amount: "-3.6851",
          change_percentage: "-0.7178%",
          volume: "105752950",
        },
        {
          ticker: "JTAI",
          price: "1.08",
          change_amount: "0.4038",
          change_percentage: "59.7161%",
          volume: "100812581",
        },
        {
          ticker: "TSLA",
          price: "163.57",
          change_amount: "1.07",
          change_percentage: "0.6585%",
          volume: "96482529",
        },
        {
          ticker: "AMD",
          price: "191.06",
          change_amount: "4.0",
          change_percentage: "2.1384%",
          volume: "95246432",
        },
        {
          ticker: "T",
          price: "17.05",
          change_amount: "0.04",
          change_percentage: "0.2352%",
          volume: "92607138",
        },
        {
          ticker: "F",
          price: "12.06",
          change_amount: "-0.02",
          change_percentage: "-0.1656%",
          volume: "88149237",
        },
        {
          ticker: "NKLA",
          price: "0.6438",
          change_amount: "0.0438",
          change_percentage: "7.3%",
          volume: "82328041",
        },
        {
          ticker: "GM",
          price: "40.685",
          change_amount: "1.305",
          change_percentage: "3.3139%",
          volume: "81788656",
        },
        {
          ticker: "BMY",
          price: "52.49",
          change_amount: "0.0",
          change_percentage: "0.0%",
          volume: "81422625",
        },
      ],
    },
  ];
  useEffect(() => {
    setData(sampledata[0]);
  }, []);

  const renderList = (title, items) => {
    if (!items || items.length === 0) {
      return (
        <div>
          <h2>{title}</h2>
          <p>No items available</p>
        </div>
      );
    }

    return (
      <div>
        <h2>{title}</h2>
        <ul>
          {items.map((item, index) => (
            <li key={index}>
              <p>Ticker: {item.ticker}</p>
              <p>Price: {item.price}</p>
              <p>Change Amount: {item.change_amount}</p>
              <p>Change Percentage: {item.change_percentage}</p>
              <p>Volume: {item.volume}</p>
            </li>
          ))}
        </ul>
      </div>
    );
  };

  return (
    <>
      <div className="fixed h-[100%] w-[100%] flex overflow-hidden bg-white">
        <Sidebar>
          <SidebarItem
            icon={<Home size={20} />}
            text="Home"
            alert
            onClick={() => {
              navigate("/");
            }}
          />
          <SidebarItem
            icon={<LayoutDashboard size={20} />}
            text="Dashboard"
            onClick={() => {
              navigate("/user-dashboard");
            }}
          />
          <SidebarItem
            icon={<StickyNote size={20} />}
            text="Investments"
            alert
            active
            onClick={() => {
              navigate("/user-investments");
            }}
          />
          <SidebarItem
            icon={<Calendar size={20} />}
            text="Assets"
            onClick={() => {
              navigate("/user-assets");
            }}
          />
          <SidebarItem
            icon={<Layers size={20} />}
            text="Tools"
            onClick={() => {
              navigate("/user-tools");
            }}
          />
          <SidebarItem
            icon={<Flag size={20} />}
            text="Data Upload"
            onClick={() => {
              navigate("/user-data");
            }}
          />
          <hr className="my-3" />
          <SidebarItem icon={<Settings size={20} />} text="Settings" />
          <SidebarItem icon={<LifeBuoy size={20} />} text="Help Center" />
        </Sidebar>

        <div className="flex-1 p-5">
          <div className="grid grid-cols-[30%,30,40%] gap-5">
            <div className="bg-white h-[80%] p-5 w-[30%] overflow-scroll rounded-md shadow-md">
              <div>
                <ListSection
                  title="Top Gainers"
                  data={data.top_gainers || []}
                />
                <ListSection title="Top Losers" data={data.top_losers || []} />
                <ListSection
                  title="Most Actively Traded"
                  data={data.most_actively_traded || []}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
