function formatDate(date) {
    var d = new Date(date);
    var month = '' + (d.getMonth() + 1);
    var day = '' + d.getDate();
    var year = d.getFullYear();

    if (month.length < 2) month = '0' + month;
    if (day.length < 2) day = '0' + day;

    return [ day, month, year].join('-');
}

export default function grouper(data) {

    return Object.entries(Array.from(data).reduce((group, item) => {
        const [unformatted, count] = item;
        const [date, time] = [
            formatDate(unformatted),
            new Date(unformatted).toLocaleTimeString([], { hour: "2-digit", minute: '2-digit' }),
        ];
        group[date] = group[date] || {};
        group[date][time] = group[date][time] || count;

        return group;

    }, {})).map((array) => {
        const [title, timesObj] = array;
        const times = Object.entries(timesObj).map((array) => {
            const [title, count] = array;
            return { title, count };
        });
        return { title, times };
    });

    return [{ title: "1.1.2020", times: [{ title: "15:00", count: 13 }] }];

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
