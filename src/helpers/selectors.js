

export function getAppointmentsForDay(state, day) {

    const selectedDay = state.days.find((dayObject) => dayObject.name === day);

    if(!selectedDay) {
        return [];
    }

    const appointments = selectedDay.appointments.map(
        (id) => state.appointments[id]
        );

        return appointments;
}
