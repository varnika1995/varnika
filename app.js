const express=require('express')
const app=express()

const morgan=require('morgan')
const bodyParser=require('body-parser')

const config=require('./config')

app.use(morgan('dev'))
app.use(bodyParser.json())

app.use((req,res,next)=>{
    console.log(req.param,"params");
    console.log(req.query,"query");
    console.log(req.body,"body");
    next()
})

let userData=[
    {
        name:'varni',
        mobile:'9786543434',
        movies:['ghs','gvs','ftsyuu'],
        address:{
            street:'gdg',
            city:'oisa',
            country:'shg'
        }


    },

    {
        name:'megha',
        mobile:'9786543434',
        movies:['ghs','gvs','ftsyuu'],
        address:{
            street:'gdg',
            city:'oisa',
            country:'shg'
        }


    }
    

]


app.get('/getUser',(req,res)=>{
    let id=req.query.id
    res.json(userData[id])
})

app.post('/addUser',(req,res)=>{
   // let id=req.query.id
   console.log('1111');
    let data=req.body
    userData.push(data)
    console.log('new user added')
    res.json(userData)
    /*if(res.json(userData)!=0)
    {
        res.json('sucessful')
        res.json('status: 200')
        res.json(userData)
    }
    else{
        res.json('fail')
        res.json('status: 201')
    }*/
    

    console.log(res.json(userData));
    
   // res.sendStatus(404)

  // console.log('sucessfull ');

})

app.put('/updateUser',(req,res)=>{
   /* let id=req.query.id
   console.log('1111');
    let data=req.body
    userData[id]=data
    userData[id].push(data)
    console.log('2222');
    Object.assign(userData[id],data)
    console.log('update user')
    res.json(userData[id])
   // res.sendStatus(404)*/

   let data=req.body
   console.log('2222');
   userData.splice(2, 0,data); 
   console.log('update user')
   res.json(userData)
    
});

app.delete('/deleteUser',(req,res)=>{
   /*let id=req.query.id
   let data=req.body
   console.log('1111');
   userData[3]={}

  // userData.remove(id)
    console.log('delete user')
    res.json(userData[3])
   // res.json(userData)

    console.log( res.json(userData[3]))

   // res.sendStatus(404)*/

  // let id=req.query.id
   //let data=id.res.body
   //let data=req.body
   console.log('2222');
   userData.splice(1, 1); 
   console.log('update user')
   res.json(userData)
})



//catch 404 error
app.use((req,res,next)=>{
    next('not found')
})

app.use((error,req,res,next)=>{
    next(error);
    res.json(error);
})



app.listen(config[process.argv[2]].port, () => {
    console.log(`Server running @ ${config[process.argv[2]].port}`)
});