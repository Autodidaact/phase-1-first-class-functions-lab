// Code your solution in this file!
const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];
const returnFirstTwoDrivers = () => {return drivers.slice(0, 2)};

const returnLastTwoDrivers = () => {return drivers.slice(-2)};

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];
 
function createFareMultiplier(fare) {
    return (fare) => {
        return fare * fare;
    }

    
}

const fareDoubler = (fare) => {
    return fare * 2;
}
const fareTripler = (fare) => {
    return fare * 3;
}
function selectDifferentDrivers(drivers, func){
    if (func == returnFirstTwoDrivers){
        return returnFirstTwoDrivers();
    }else if (func == returnLastTwoDrivers){
        return returnLastTwoDrivers();
    }
}