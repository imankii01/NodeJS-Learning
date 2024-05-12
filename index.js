db.createCollection('notification',{
    validator:{
       $jsonSchema:{
        required:['name','price'],
        porperties:{
            name:{
                bsonTypes:'string',
                description:"must be a string and required"
            },
            price:{
                bsonTypes:'number',
                description:"must be a number and required"
            },
        }
       }

    },
    validatorAction:"error"
})