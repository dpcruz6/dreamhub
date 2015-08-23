$(function(){
$("#elastic_grid_demo").elastic_grid({	
	'hoverDirection': true,
	'hoverDelay': 0,
	'hoverInverse': false,
	'expandingSpeed': 500,
	'expandingHeight': 500,
	'items' :
		[
			{
			'title' : 'Mark',
			'description'   : '',
			'thumbnail' : ['img/mark/small/mark1.jpg'],
			'large' : ['img/mark/mark1.jpg'],
			'button_list'   :
			[

			],
			'tags'  : ['The Shop', 'All']
			},

			{
			'title' : 'Air Compressor',
			'description'   : '',
			'thumbnail' : ['img/mark/small/mark2.jpg'],
			'large' : ['img/mark/mark2.jpg'],
			'button_list'   :
			[
			],
			'tags'  : ['Compressor', 'All']
			},

			{
			'title' : 'Presser',
			'description'   : '',
			'thumbnail' : ['img/mark/small/mark3.jpg'],
			'large' : ['img/mark/mark3.jpg'],
			'button_list'   :
			[
			],
			'tags'  : ['Presser', 'All']
			},

			{
			'title' : 'Shoopping for Tools',
			'description'   : '',
			'thumbnail' : ['img/mark/small/mark4.jpg'],
			'large' : ['img/mark/mark4.jpg'],
			'button_list'   :
			[
			],
			'tags'  : ['Shopping', 'All']
			},

			{
			'title' : 'Tool Box',
			'description'   : '',
			'thumbnail' : ['img/mark/small/mark5.jpg'],
			'large' : ['img/mark/mark5.jpg'],
			'button_list'   :
			[
			],
			'tags'  : ['Tool Box', 'All']
			}
	 
		]
	});
});