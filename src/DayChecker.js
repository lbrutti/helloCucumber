const DayChecker = (() => {

    const DAYS = {
        "MONDAY": "Monday",
        "TUEDAY": "Tueday",
        "WEDNESDAY": "Wednesday",
        "THURSDAY": "Thursday",
        "FRIDAY": "Friday",
        "SATURDAY": "Saturday",
        "SUNDAY": "Sunday"
    };
    function _isDesiredDay(today, desiredDay) {
        return today === desiredDay;
    }
    
    function _isItFridayYet(day) {
        return _isDesiredDay(day, DAYS.FRIDAY) ? "TGIF" : "Nope";
    }

    return {
        isItFridayYet: _isItFridayYet
    };
})();

module.exports = DayChecker;