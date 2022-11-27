const express=require('express')
const bodyParser=require('body-parser')
const path=require('path')
const errorController=require('./controllers/error')

const app=express();

const adminRoutes=require('./routes/admin');
const shopRoutes=require('./routes/shop')
const contactRoutes=require('./routes/contact')
const messageRoutes=require('./routes/message')


app.use(bodyParser.urlencoded({extended : false}))
app.use(express.static(path.join(__dirname,'public')))

app.use('/admin',adminRoutes)
app.use(shopRoutes);
app.use(contactRoutes)
app.use(messageRoutes)

app.use(errorController.get404)




app.listen(5000);