import { combineReducers } from 'redux';
import SearchBlogListReducer from './reducer_searchBlogList';
import whatsNewListReducer from './reducer_whatsNewList';

const RootReducer =  combineReducers({
	searchBlogLists : SearchBlogListReducer,
	whatsNewLists : whatsNewListReducer


});

export default RootReducer;