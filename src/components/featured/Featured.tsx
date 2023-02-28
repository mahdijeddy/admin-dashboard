import { MoreVert, KeyboardArrowDown, KeyboardArrowUpOutlined } from "@mui/icons-material";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import "./featured.scss";
const Featured = () => {
    const percentage: number = 66;
    return (
        <div className="featured">
            <div className="top">
                <h1 className="title">Total Revenue</h1>
                <MoreVert fontSize="small" />
            </div>
            <div className="bottom">
                <div className="featuredChart">
                    <CircularProgressbar
                        value={80}
                        text={`${80}%`}
                        strokeWidth={2}
                        styles={buildStyles({
                            pathColor: `rgb(237, 142, 33, ${percentage / 100})`,
                            textColor: "rgb(237, 142, 33)",
                            strokeLinecap: "butt",
                        })}
                    />
                </div>
                <p className="title">Total sales made today</p>
                <p className="amount">$380</p>
                <p className="desc">Last payments may not be included.</p>
                <div className="summary">
                    <div className="item">
                        <div className="itemTitle">Target</div>
                        <div className="itemResult negative">
                            <KeyboardArrowDown fontSize="small" />
                            <div className="resultAmount">$18.4k</div>
                        </div>
                    </div>
                    <div className="item">
                        <div className="itemTitle">Last Week</div>
                        <div className="itemResult positive">
                            <KeyboardArrowUpOutlined fontSize="small" />
                            <div className="resultAmount">$9.8k</div>
                        </div>
                    </div>
                    <div className="item">
                        <div className="itemTitle">Last Month</div>
                        <div className="itemResult positive">
                            <KeyboardArrowUpOutlined fontSize="small" />
                            <div className="resultAmount">$14k</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Featured;
