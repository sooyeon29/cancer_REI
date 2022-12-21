import { Eventcalendar, getJson, toast } from "@mobiscroll/react";
import "@mobiscroll/react/dist/css/mobiscroll.min.css";
import React from "react";
import styled from "styled-components";

const MyCalendar = () => {
  const [myEvents, setEvents] = React.useState([]);

  React.useEffect(() => {
    getJson(
      "https://trial.mobiscroll.com/events/?vers=5",
      (events) => {
        setEvents(events);
      },
      "jsonp"
    );
  }, []);

  const onEventClick = React.useCallback((event) => {
    toast({
      message: event.event.title,
    });
  }, []);

  const view = React.useMemo(() => {
    return {
      calendar: { labels: true },
    };
  }, []);

  return (
    <Calen>
      <Eventcalendar
        theme="ios"
        themeVariant="light"
        clickToCreate={false}
        dragToCreate={false}
        dragToMove={false}
        dragToResize={false}
        eventDelete={false}
        data={myEvents}
        view={view}
        onEventClick={onEventClick}
      />
    </Calen>
  );
};

export default MyCalendar;

const Calen = styled.div`
  width: 60%;
  margin: 30px auto;
`;
