import React from "react";

interface StatsCardProps {
  color: string;
  value: string;
  label: string;
  time: string;
}

const StatsCard: React.FC<StatsCardProps> = ({ color, value, label, time }) => {
  return (
    <div className={`card ${color} update-card`}>
      <div className="card-block">
        <div className="row align-items-end">
          <div className="col-8">
            <h4 className="text-white">{value}</h4>
            <h6 className="text-white m-b-0">{label}</h6>
          </div>
          <div className="col-4 text-right">
            <canvas height="50"></canvas>
          </div>
        </div>
      </div>
      <div className="card-footer">
        <p className="text-white m-b-0">
          <i className="feather icon-clock text-white f-14 m-r-10"></i>
          update : {time}
        </p>
      </div>
    </div>
  );
};

export default StatsCard;
