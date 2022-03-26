import adapter from '@sveltejs/adapter-node';


export default {
	kit: {
		adapter: adapter({
			// if true, will split your app into multiple functions
			// instead of creating a single one for the entire app
			split: false
		})
	}
};
