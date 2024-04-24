const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');
const contactRoutes = require('./routes/contact');
const successtRoutes = require('./routes/success');
const sequelize=require('./util/database');


app.set('view engine','ejs');
app.set('views', path.resolve('./template'));

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminRoutes);
app.use('/contact', contactRoutes);
app.use('/success',successtRoutes);

app.use(shopRoutes);

app.use((req, res, next) => {
    
    res.status(404).render('render')
});


sequelize.sync().then(result=>{
    console.log("Connected");
    app.listen(3000,()=>
        {console.log("Server Started at PORT 3000");}
    );
}
)

