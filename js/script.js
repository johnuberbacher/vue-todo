var app = new Vue({
	el: '#app',
	data: {
		todoText: '',
		todos: [
			{text: 'Buy eggs and milk', complete: true},
			{text: 'Remind mom about the upcoming event', complete: false},
		]
	},
	methods: {
		addTodo: function() {
			var newTodo = this.todoText.trim();
			if (!newTodo) {return;}
			this.todos.push(
				{text: newTodo, complete: false}
			);
			this.todoText = '';
		}
	}
});