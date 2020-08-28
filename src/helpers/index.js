import moment from 'moment';

export const convertTimeIntoString = (timeInSeconds) =>
    moment.utc(timeInSeconds * 1000).format("HH:mm:ss");

export const convertTimeStringToInt = (timeString) => {
    const newMoment = moment(moment.duration(timeString));
    
    return Math.round(newMoment._i._milliseconds / 1000);
};