function beforeSubmit(){
    let datePicker= document.getElementById('dob');
    let hiddenDate=document.getElementById('dob__c');

    let formattedDate= new Date(datePicker.value).toLocaleDateString("en-US");
    hiddenDate.value=formattedDate;
}