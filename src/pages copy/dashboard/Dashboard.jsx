import Sidebar from "../../Compnents/sidebar/Sidebar";
import Navbar from "../../Compnents/navbar/Navbar";
import "./dashboard.scss";
import Widget from "../../Compnents/widget/Widget";
import Featured from "../../Compnents/featured/Featured";
import Chart from "../../Compnents/chart/Chart";
import Table from "../../Compnents/table/Table";

const Dashboard = () => {
  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <Navbar />
        <div className="widgets">
          <Widget type="user" />
          <Widget type="order" />
          <Widget type="earning" />
          <Widget type="balance" />
        </div>
        <div className="charts">
          <Featured />
          <Chart title="Last 6 Months (Revenue)" aspect={2 / 1} />
        </div>
        <div className="listContainer">
          <div className="listTitle">Latest Transactions</div>
          <Table />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
