import "./Shimmer.css";

const Shimmer = () => {
  return (
    <div>
      <div className="top-section">
        <div>
          <input className="shimmer-input" disabled />
          <button className="shimmer-search-btn"></button>
        </div>
        <div className="top-rated-section">
          <button className="shimmer-top-rated-btn"></button>
        </div>
      </div>
      <div className="shimmer-wrapper-container">
        {Array.from({ length: 20 }).map((_, index) => {
          return <div className="shimmer-container" key={index}></div>;
        })}
      </div>
    </div>
  );
};
export default Shimmer;
