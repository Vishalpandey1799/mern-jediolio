import DevPortfolio from "../pages/devPortfolio/devPortfolio";
import UserId from "../Component/UserId";
import Link from "../Component/Link";
import QrCode from "../Component/QrCode";

const AllData = () => {
  return (
    <div className="flex flex-col md:flex-row gap-2 items-start">
      <DevPortfolio  className="items-start"/>
      <div className="flex flex-col gap-5 items-center">
        <UserId />
        <Link />
        <QrCode />
      </div>
    </div>
  );
};

export default AllData;
