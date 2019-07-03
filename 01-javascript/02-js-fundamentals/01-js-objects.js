// 30 minutes max
let arr = [
    {name: 'Remy', cohort: 'Jan'},
    {name: 'Genevieve', cohort: 'March'},
    {name: 'Chuck', cohort: 'Jan'},
    {name: 'Osmund', cohort: 'June'},
    {name: 'Nikki', cohort: 'June'},
    {name: 'Boris', cohort: 'June'}
];

function students(arr){
    for(var i = 0; i < arr.length; i++){
        console.log("Name: " + arr[i].name + ", Cohort: " + arr[i].cohort)
    }
}


console.log(students(arr));

const users = {
    employees: [
        { 'first_name':  'Miguel', 'last_name' : 'Jones' },
        { 'first_name' : 'Ernie', 'last_name' : 'Bertson' },
        { 'first_name' : 'Nora', 'last_name' : 'Lu' },
        { 'first_name' : 'Sally', 'last_name' : 'Barkyoumb '}
    ],
    managers: [
        { 'first_name' : 'Lillian', 'last_name' : 'Chambers' },
        { 'first_name' : 'Gordon', 'last_name' : 'Poe '}
    ]
};

for(const key in users){
    console.log(key.toUpperCase());
    for(let i = 0; i < users[key].length; i++){
        const num = 1 + i;
        const fname = users[key][i].first_name;
        const lname = users[key][i].last_name;
        const length = fname.length + lname.length;
        console.log(`${num} - ${lname},${fname} - ${length}`);
    }
}