import Date from "./Date";
import calendarData from "../calendarData.json";

function Calendar() {
  return (
    <div className="bg-white w-1/2 rounded-lg shadow-2xl p-8">
      <div className="pb-8 text-4xl font-bold">2023, 04</div>
      {calendarData.map((v, i) => {
        return <Date />;
      })}
    </div>
  );
}

export default Calendar;
