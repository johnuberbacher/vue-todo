var app = new Vue({
	el: '#app',
	data: {
		todoText: '',
		todos: [
			{text: 'Remind mom about the upcoming event'},
			{text: 'Buy eggs and milk'},
			{text: 'Set the clocks back on the appliances'},
		]
	},
	methods: {
		addTodo: function() {
			var newTodo = this.todoText.trim();
			if (!newTodo) {return;}
			this.todos.push(
				{text: newTodo}
			);
			this.todoText = '';
		},
		// Pass in the current to-do item
		removeTodo: function(todo) {
			// remove it from the list using array.splice(start, deleteCount)
			this.todos.splice(this.todos.indexOf(todo), 1)
		}
	}
});