import React, { useState } from "react";
import { DatePicker } from "antd";
import dayjs, { Dayjs } from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";

dayjs.extend(customParseFormat);

export const dateFormat = "YYYY-MM-DD";

export interface DatePickerProps {
  setDateValue: (arg0: string) => void;
}

const DatePickerCustom: React.FC<DatePickerProps> = ({ setDateValue }) => {
  return <></>;
};

export default DatePickerCustom;
