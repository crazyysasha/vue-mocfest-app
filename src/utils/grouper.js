export default function grouper(tickets) {
    return Object.entries(
        Array.from(tickets).reduce((group, ticket) => {
            const [validAtDate, validAtTime] = [
                new Date(ticket.valid_at).toLocaleDateString(),
                new Date(ticket.valid_at).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
            ];
            group[validAtDate] = group[validAtDate] || {};
            group[validAtDate][validAtTime] =
                group[validAtDate][validAtTime] || [];
            group[validAtDate][validAtTime].push(ticket);
            return group;
        }, {})
    ).map((array) => {
        const [title, timesObj] = array;
        const times = Object.entries(timesObj).map((array) => {
            const [title, tickets] = array;
            return { title, tickets };
        });
        return { title, times };
    });
};
