// const BASE_URL = "http://localhost:7000/api";

// let result = [];
// $.ajax({
// 	method: "GET",
// 	url: BASE_URL,
// 	dataType: 'json',
// 	success: function (data){
// 		state = data;
// 		result = data;
// 	}.bind(this),
// 	 error: function(xhr, status, err) {
// 	 	console.error("could not fetch data");
// 	 }.bind(this)
// });
// let BlogListReducer = () => {
// 	// console.log("result");
// 	// console.log(result);
// 	// return result;
// 	return [
// 		{title: 'post1', content: 'post1 details'},
// 		{title: 'post2', content: 'post2 details'},
// 		{title: 'post3', content: 'post3 details'},
// 		{title: 'post4', content: 'post4 details'}

// 	]
// }

import GET_BLOG_POSTS from '../actions/index';
import GET_SEARCH_BASED_BLOG_POSTS from '../actions/index';


let SearchBlogListReducer = (state = [],action) => {
	switch(action.type){
		case 'GET_BLOG_POSTS' :
			return action.payload.data;
		case 'GET_SEARCH_BASED_BLOG_POSTS' : 
			return action.payload.data;
		default :
			return state;
	}
	
}
 
export default SearchBlogListReducer;
