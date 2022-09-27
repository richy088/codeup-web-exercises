const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
        yearsOfExperience: 5
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
        yearsOfExperience: 6
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
        yearsOfExperience: 7
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
        yearsOfExperience: 8
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
        yearsOfExperience: 9
    }
];

// #2:
const result = users.filter(data => data.languages.length >= 3);

// #3:
const result1 = users.map(data => data.email);

// #4:
const sum = users.reduce(
    (previousValue, currentValue) => previousValue + currentValue.yearsOfExperience,
    0,);

// #5:
const longOne = users.reduce(
    (previousValue, currentValue) => previousValue.length < currentValue.email.length ? currentValue.email : previousValue,
    '',);

// #6:
const instruct = users.reduce((previousValue, currentValue) => previousValue + currentValue.name + ",",
    '',);


