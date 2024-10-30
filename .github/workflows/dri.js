var getWeekNumber = require('./getWeekNumber.js');

function getDRIResponsible(driOwnersString) {
    if (!driOwnersString) {
        return process.env.DRI_RESPONSIBLE_DEFAULT || 'JerryYangKai';
    }
    const owners = driOwnersString.split(' ');
    const countOfOwners = owners.length;
    const weekNumber = getWeekNumber(new Date());
    const responsibleIndex = weekNumber % countOfOwners;
    return owners[responsibleIndex];
}

console.log(getDRIResponsible(process.env.DRI_OWNERS));
