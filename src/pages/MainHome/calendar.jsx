import React, { Component } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";

const Calendar = ({ schedulesData }) => {
  //    const onDateClick = (e) => {
  //   const date = e.dateStr;
  // };

  const onSelectAllow = (selectionInfo) => {
    let startDate = selectionInfo.start;
    let endDate = selectionInfo.end;
    endDate.setSeconds(endDate.getSeconds() - 1);
    if (startDate.getDate() === endDate.getDate()) {
      return true;
    } else {
      return false;
    }
  };
  const setTitleFormat = (date) => {
    const newD = new Date();
    const year = newD.getFullYear();
    const month = newD.getMonth() + 1;
    const today = newD.getDate();
    const yearMonth = React.createElement(
      "div",
      { key: 1 },
      `${date.date.year}년 ${date.date.month + 1}월`
    );
    let todayElm, dateBox;

    if (date.date.year === year && date.date.month + 1 === month) {
      todayElm = React.createElement("div", { key: 2 }, `${today}`);
      dateBox = React.createElement("div", null, [yearMonth, todayElm]);
      return dateBox;
    } else {
      todayElm = React.createElement("div", { key: 2 }, 1);
      dateBox = React.createElement("div", null, [yearMonth, todayElm]);
      return dateBox;
    }
  };
  return (
    <FullCalendar
      plugins={[dayGridPlugin, interactionPlugin]}
      initialView="dayGridMonth"
      buttonText={{ today: "오늘" }}
      headerToolbar={{
        left: "today myCustomButton",
        center: "title",
        right: "prev,next",
      }}
      selectable={true}
      selectAllow={onSelectAllow}
      customButtons={{
        myCustomButton: {
          text: "일정생성",
          // click: onAddEvent,
        },
      }}
      titleFormat={setTitleFormat}
      height="100%"
      locale="en"
      dayMaxEvents={true}
      // events={
      //   schedulesData.map((prop) => {
      //     if (prop.startDate === prop.endDate) {
      //       return { "title": prop.title, "start": prop.startDate, "color": (prop.userNum === 1) ? "rgba(255,69,69,0.9)" : "#008CFF" }
      //     }
      //     return { "title": prop.title, "start": prop.startDate, "end": dayjs(prop.endDate).add(1, "day").format("YYYY-MM-DD"), "color": (prop.userNum === 1) ? "rgba(255,69,69,0.9)" : "#008CFF" }
      //   })
      // }
      // eventClick={onEventClick}
      // dateClick={onDateClick}
    />
  );
};

export default Calendar;
