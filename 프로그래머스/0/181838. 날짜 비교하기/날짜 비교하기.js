function solution(date1, date2) {
    const [year_1, month_1, date_1] = date1
    const [year_2, month_2, date_2] = date2
    
    if(year_1 < year_2) {
        return 1
    } else if (year_1 === year_2){
        if(month_1 < month_2) {
            return 1
        } else if (month_1 === month_2){
            if(date_1 < date_2){
                return 1
            } else return 0
        } else return 0
        
    } else return 0
    
}