import React, { useState } from "react";
import { Alert, Calendar, Badge } from "antd";
import dayjs from "dayjs";
import { Container } from "@mui/joy";
const App = () => {
  const [value, setValue] = useState(() => dayjs("2017-01-25"));
  const [selectedValue, setSelectedValue] = useState(() => dayjs("2017-01-25"));

  const onSelect = (newValue) => {
    setValue(newValue);
    setSelectedValue(newValue);
  };
  const onPanelChange = (newValue) => {
    setValue(newValue);
  };

  const listData = [
    {
      type: "warning",
      content: "This is a warning event",
      day: 5,
    },
    {
      type: "success",
      content: "This is a success event",
      day: 7,
    },
    {
      type: "error",
      content: "This is an error event",
      day: 13,
    },
  ];

  const compareDates = (dateOne, dateTwo) => {
    if (dateOne.day === dateTwo.date()) {
      return true;
    } else {
      return false;
    }
  };

  const dateCellRender = (value) => {
    return (
      <>
        <ul className="events">
          {listData.map((item) =>
            item.day === value.date() ? (
              <Badge status={item.type} text={item.content} />
            ) : null
          )}
        </ul>
      </>
    );
  };

  const cellRender = (current, info) => {
    if (info.type === "date") return dateCellRender(current);
    return info.originNode;
  };

  return (
    <>
      <Container
        sx={[
          (theme) => ({
            pt: 10,
          }),
        ]}
      >
        <Alert
          message={`You selected date: ${selectedValue?.format("YYYY-MM-DD")}`}
        />
        <Calendar
          value={value}
          onSelect={onSelect}
          onPanelChange={onPanelChange}
          cellRender={cellRender}
        />
      </Container>
    </>
  );
};
export default App;
