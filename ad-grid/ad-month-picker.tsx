interface PickerDate {
  month: number;
  year: number;
}

interface AdMonthPickerProps {
  pickerDate: PickerDate;
  setPickerDate: React.Dispatch<React.SetStateAction<PickerDate>>;
}

const monthList: { [key: string]: string } = {
  "1": "Jan",
  "2": "Feb",
  "3": "Mar",
  "4": "Apr",
  "5": "May",
  "6": "Jun",
  "7": "Jul",
  "8": "Aug",
  "9": "Sep",
  "10": "Oct",
  "11": "Nov",
  "12": "Dec",
};

export const AdMonthPicker = ({
  pickerDate,
  setPickerDate,
}: AdMonthPickerProps) => {
  const dateCalc = (direction: string) => {
    if (direction === "prev") {
      if (pickerDate.month <= 1) {
        setPickerDate({
          month: 12,
          year: pickerDate.year - 1,
        });
      } else {
        setPickerDate({
          month: pickerDate.month - 1,
          year: pickerDate.year,
        });
      }
    }

    if (direction === "next") {
      if (pickerDate.month >= 12) {
        setPickerDate({
          month: 1,
          year: pickerDate.year + 1,
        });
      } else {
        setPickerDate({
          month: pickerDate.month + 1,
          year: pickerDate.year,
        });
      }
    }
  };

  return (
    <>
      <div className="month-picker">
        <a
          role="button"
          className="go-prev"
          onClick={() => dateCalc("prev")}
        ></a>
        <button
          type="button"
          className="month-picker-btn"
          style={{ minWidth: "120px" }}
        >
          {pickerDate.year}&nbsp;{monthList[`${pickerDate.month}`]}
        </button>
        <a
          role="button"
          className="go-next"
          onClick={() => dateCalc("next")}
        ></a>
      </div>
    </>
  );
};
