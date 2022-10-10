export const calculateRange = (data, rowsPerPage) => {
    if(data){
      const range = [];
      const num = Math.ceil(data.length / rowsPerPage);
      
      for (let i = 1; i <= num; i++) {
        range.push(i);
      }
      return range;
    }
};