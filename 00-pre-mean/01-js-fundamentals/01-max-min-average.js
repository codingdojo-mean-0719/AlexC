function minMaxAvg(arr){
    var max = arr[0];
    var min = arr[0];
    var sum = 0;
    for(var i = 0; i < arr.length; i++){
        sum += arr[i];
        if(arr[i] > max){
            max = arr[i];
        }
        if(arr[i] < min){
            min = arr[i];
        }
    }
    var avg = sum / arr.length;
    return "The minimum is " + min + ", the maximum is " + max + ", and the average is " + avg + "."
}