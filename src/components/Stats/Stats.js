import './Stats.css';
import '../../App.css';
import { useNavigate, useLocation } from "react-router-dom";
import { useEffect } from "react";

function Stats({ title, description, image, url, color }) {

    const navigate = useNavigate();

    return (
        <div className="stat-cards">
            <div className="stat-card">
                <div className="stat-card-top">
                    Project Scale
                </div>
                <div className="stat-card-bottom">
                    3 / 5
                </div>
            </div>
        </div>
    );
}

export default Stats;
