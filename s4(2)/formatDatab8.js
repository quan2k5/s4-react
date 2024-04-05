function formatDate(inputĐate=new Date){
    let inputDate;
    if(inputĐate!=new Date){
        inputDate=new Date(inputĐate)
    }else{
        inputDate=inputĐate;
    }
    console.log(inputDate);
    const day=inputDate.getDate()<10?'0'+inputDate.getDate():inputDate.getDate();
    const month=inputDate.getMonth()+1<10?'0'+inputDate.getMonth():inputDate.getMonth();
    return `${day}/${month}/${inputDate.getFullYear()}`
}
export default formatDate;