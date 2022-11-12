export const TommorowDate = () => {
    let today = new Date();
    let tomorrow = new Date(today.getTime() + (24 * 60 * 60 * 1000));
    let dd = tomorrow.getDate(); 
    let mm = tomorrow.getMonth() + 1; 
    let yyyy = tomorrow.getFullYear(); 
    if(dd < 10){
        dd='0' + dd
    } 
    if(mm < 10){
        mm='0' + mm
    } 
    tomorrow = yyyy + '-' + mm + '-' + dd;
    return tomorrow;
}