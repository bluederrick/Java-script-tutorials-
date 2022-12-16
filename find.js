const data = [
    {
    name: 'derrick',
    email: 'derrick@gmail.com'}
    , 
    {
        name :"anita",
        email : 'anita@gmail.com',
    }
]

const datbase = data.find((obj)=> obj.email === 'derrick@gmail.com')



console.log(datbase.name)