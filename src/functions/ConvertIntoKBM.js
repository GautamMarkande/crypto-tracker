
function ConvertIntoKBM(value) {
          
        const numericValue = parseFloat(value);
           console.log(typeof value)
        if (isNaN(numericValue)) {
          return 'Invalid input';
          
        }
    
        if (numericValue >= 1000000000) {
          return (numericValue / 1000000000).toFixed(2) + 'B';
        } else if (numericValue >= 1000000) {
          return (numericValue / 1000000).toFixed(2) + 'M';
        } else if (numericValue >= 1000) {
          return (numericValue / 1000).toFixed(2) + 'K';
        } else {
          return numericValue.toFixed(2);
        }
    }

export default ConvertIntoKBM
