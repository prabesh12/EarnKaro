import { Link } from "react-router-dom";
const BannerCard = ({event, images,earn, profit, flash, icon}) => {
  const date = new Date();
  return (
    <div className="common-card">
      <div className="image-wrapper">
        <div className="offer">
          <p>{event}</p>
        </div>
        <div className="icon-wrapper">
          <img src={icon} alt="" />
        </div>
        <Link to="/" className="link">
          <img src={images} alt="" />
        </Link>
      </div>
     {
      flash && <div className="deadline">
        <p className="deal">Deal Ends In</p>
        <p className="time">{`${date.getDay()}d`}:{`${date.getHours()}h`}:{`${date.getMinutes()}m`}:{`${date.getSeconds()}s`}</p>
      </div>
     }
      <div className="profit-ratio">
        <div className="profit-starting">
          <span className="price-lbl">Starting From</span>
          <span className="total-price"> ₹777 </span>
        </div>
        <div className="profit-starting profit-per-sale">
          <span className="price-lbl border">Per Sale You Earn</span>
          <span className="profit-percent"> {profit}</span>
        </div>
      </div>
      <div className="btn-main">
       <div className="btn1">
        <button>Copy Link</button>
        </div>
        <div className="btn1 btn2">
          <img src="../icons/whatsapp.png" alt="" />
          <button> Share Now</button>
        </div>
      </div>
    </div>
  );
};
export default BannerCard;
