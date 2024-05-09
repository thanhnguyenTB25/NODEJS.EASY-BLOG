var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var slug = require('mongoose-slug-updater');
var mongooseDeleted = require('mongoose-delete');
/**
 * add plugin
 */

const Blogs = new Schema(
    {
        name: {type: String,required: true, },
        description: {type: String, maxLength: 255, },
        image: {type:String},
        videoID: {type:String,required: true, },
        level: {type:String, maxLength: 255 , },
        slug: {type: String, slug: "name",unique: true},
    }, {
        timestamps: true,
    }  
)
mongoose.plugin(slug);
Blogs.plugin(mongooseDeleted,{indexFields: ['deleted', 'deletedBy', 'deletedAt'], overrideMethods: 'all', deletedAt : true});
        // createAt:  {type: Date, default: Date.now},
        // updateAt: {type: Date, default: Date.now},

// const Blogs = Schema(
//     {
//         name: {
//             type:String,
//             require: [true, "please enter product name"]
//         },
//         quantity: {
//             type: Number,
//             require: true,
//             default: 0
//         },
//         price: {
//             type: Number,
//             require: true,
//             default: 0
//         },
//         image: {
//             type: String,
//             require: false
//         }
//     },
//     {
//         timestamps: true,
//     }
// )
module.exports = mongoose.model('blogs', Blogs)

