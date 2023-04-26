import { useState, useEffect } from "react";
import axios from "axios";

export default function useApplicationData() {
    const [state, setState] = useState({
        day: "Monday",
        days: [],
        appointments: {},
        interviewers: {}
    });

    const setDay = day => setState({ ...state, day });

    useEffect(() => {
        Promise.all([
            axios.get("/api/days"),
            axios.get("/api/appointments"),
            axios.get("/api/interviewers")
        ]).then(all => {
            setState(prev => ({
                ...prev,
                days: all[0].data,
                appointments: all[1].data,
                interviewers: all[2].data
            }));
        });
    }, []);

    const updateSpots = (state, day) => {
        const days = state.days.map(dayObj => {
          if (dayObj.name !== day) {
            return dayObj;
          }
          const appointments = dayObj.appointments;
          const numSpots = appointments.length - appointments.filter(id => state.appointments[id].interview).length;
          return { ...dayObj, spots: numSpots };
        });
      
        return days;
      };

    function bookInterview(id, interview) {
        const appointment = {
            ...state.appointments[id],
            interview: { ...interview }
        };

        const appointments = {
            ...state.appointments,
            [id]: appointment
        };

        return axios.put(`/api/appointments/${id}`, { interview })
            .then(() => {
                setState(prev => ({ ...prev, appointments }));
                const days = updateSpots({ ...state, appointments }, state.day);
                setState(prev => ({ ...prev, days }));
              });
          }

    function cancelInterview(id) {
        const appointment = {
            ...state.appointments[id],
            interview: null
        };
        const appointments = {
            ...state.appointments,
            [id]: appointment
        };
        return axios.delete(`/api/appointments/${id}`)
            .then(() => {
                setState(prev => ({ ...prev, appointments }));
                const days = updateSpots({ ...state, appointments }, state.day);
                setState(prev => ({ ...prev, days }));
              });
          }


    return { state, setDay, bookInterview, cancelInterview };
}
