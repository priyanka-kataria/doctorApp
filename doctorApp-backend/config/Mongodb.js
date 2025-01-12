const mongoose = require('mongoose');
const MONGODB_URI="";
 const dbConnect= async()=>{
    try {
        const db = await mongoose.connect(
            `${MONGODB_URI}`
        );
        // connection.isConeected = db.connections[ 0 ].readyState
        console.log( "DB connected SuccessFullly" )
    } catch ( error ) {
        console.log( error, "Database conncetion failed" )
        process.exit( 1 );
    } 
}
module.exports= dbConnect;
