
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('book').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('book').insert({id: 1, title: 'Secrets of a JavaScript Ninja', page_count:464 , pages_read:null , programming_languages:'JavaScript' , author:'John Resig, Bear Bibeault, Josip Maras', cover_image:'https://images-na.ssl-images-amazon.com/images/I/51tQ%2BJAczgL._SX396_BO1,204,203,200_.jpg' }),
        knex('book').insert({id: 2, title: 'JavaScript the Good Parts', page_count:176 , pages_read:null , programming_languages:'JavaScript' , author:'Douglas Crockford ', cover_image:'https://images-na.ssl-images-amazon.com/images/I/5166ztxOm9L._SX381_BO1,204,203,200_.jpg' }),
        knex('book').insert({id: 3,title: 'Functional Programming in JavaScript: How to improve your JavaScript programs using functional techniques', page_count:272 , pages_read:null , programming_languages:'JavaScript' , author:'Luis Atencio', cover_image:'https://images-na.ssl-images-amazon.com/images/I/41IAxQRNy%2BL._SX397_BO1,204,203,200_.jpg' }),
        knex('book').insert({id: 4, title: 'CSS Secrets: Better Solutions to Everyday Web Design Problems ', page_count:392 , pages_read:null , programming_languages:'CSS' , author:'Lea Verou', cover_image:'http://akamaicovers.oreilly.com/images/0636920031123/cat.gif' }),
        knex('book').insert({id: 5, title: 'Node.js in Action ', page_count:416 , pages_read:null , programming_languages:'Node' , author:'Mike Cantelon, Marc Harter, T.J. Holowaychuk, Nathan Rajlich', cover_image:'https://images-na.ssl-images-amazon.com/images/I/51twwFigyiL._SX258_BO1,204,203,200_.jpg' }),
        knex('book').insert({id: 6, title: 'Algorithms of the Intelligent Web', page_count:240 , pages_read:null , programming_languages:null , author:'Douglas McIlwraith,Dr. Haralambos Marmanis,  Dmitry Babenko', cover_image:'https://images-na.ssl-images-amazon.com/images/I/51SlusdB9AL._SX396_BO1,204,203,200_.jpg' }),
        knex('book').insert({id: 7, title: 'Express in Action: Writing, building, and testing Node.js applications', page_count:256 , pages_read:null , programming_languages:'Express' , author:'Evan Hahn', cover_image:'https://images-na.ssl-images-amazon.com/images/I/51SavsoSFIL._SX396_BO1,204,203,200_.jpg' }),
        knex('book').insert({id: 8, title: 'Design for Hackers: Reverse Engineering Beauty', page_count:352 , pages_read:null , programming_languages:null , author:'David Kadavy', cover_image:'https://images-na.ssl-images-amazon.com/images/I/51KrhMVxHML._SX258_BO1,204,203,200_.jpg' }),
        knex('book').insert({id: 9, title: 'JavaScript Patterns: Build Better Applications with Coding and Design Patterns', page_count:236 , pages_read:null , programming_languages:'JavaScript' , author:'Stoyan Stefanov', cover_image:'https://images-na.ssl-images-amazon.com/images/I/51%2BSiphz7AL._SX377_BO1,204,203,200_.jpg' }),
        knex('book').insert({id: 10, title: 'Graphic Design: The New Basics: Second Edition, Revised and Expanded', page_count:264 , pages_read:null , programming_languages:null , author:'Ellen Lupton, Jennifer Cole Phillips ', cover_image:'https://images-na.ssl-images-amazon.com/images/I/51BV0ooglKL._SX258_BO1,204,203,200_.jpg' }),
        knex('book').insert({id: 11, title: 'Animation in HTML, CSS, and JavaScript', page_count:514 , pages_read:null , programming_languages:'HTML,CSS,JavaScript' , author:'Kirupa Chinnathambi ', cover_image:'https://images-na.ssl-images-amazon.com/images/I/41zkBcDSwwL._SX258_BO1,204,203,200_.jpg' }),
      ]);
    });
};
