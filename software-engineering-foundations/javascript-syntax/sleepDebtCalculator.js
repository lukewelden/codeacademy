// Returns the hours of sleep someone got on a given day of the week
const getSleepHours = day => {
    day = day.toLowerCase()
    switch (day) {
      case 'monday':
        return 6;
        break;
      case 'tuesday':
        return 6;
        break;
      case 'wednesday':
        return 7;
        break;
      case 'thursday':
        return 7;
        break;
      case 'friday':
        return 7;
        break;
      case 'saturday':
        return 7;
        break;
      case 'sunday':
        return 7;
        break;
    }
  }
  
  // Return how many total hours in a week someone slept
  const getActualSleepHours = () => getSleepHours('Monday') + getSleepHours('Tuesday') + getSleepHours('Wednesday') + getSleepHours('Thursday') + getSleepHours('Friday') + getSleepHours('Saturday') + getSleepHours('Sunday'); 
  
  // Get the ideal amount of sleep hours per week
  const getIdealSleepHours = idealHours => idealHours * 7;
  
  // Calculate whether a person is meeting their ideal amount of sleep hours 
  const calculateSleepDebt = () => {
    const actualSleepHours = getActualSleepHours();
    const idealSleepHours = getIdealSleepHours(8);
    if (actualSleepHours > idealSleepHours) {
      const difference = actualSleepHours - idealSleepHours;
      return console.log(`You got ${difference} more hours sleep than needed!`);
    } else if (actualSleepHours === idealSleepHours) {
      return console.log('You got the ideal amount of sleep, well done!');
    } else {
      const difference = idealSleepHours - actualSleepHours;
      return console.log(`You need ${difference} more hours sleep!`);
    }
  }
  calculateSleepDebt();
  
  