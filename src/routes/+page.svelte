<script>
	import { useChat } from 'ai/svelte';
	import { afterUpdate } from 'svelte';

	const { input, handleSubmit, messages } = useChat();
	let messageContainer;

	afterUpdate(() => {
		// Scroll to the bottom of the message container whenever messages change
		if (messageContainer) {
			messageContainer.scrollTop = messageContainer.scrollHeight;
		}
	});
</script>

<main class="max-w-2xl mx-auto p-6 bg-white border h-full">
	<h1 class="text-2xl font-bold mb-4 text-center">AI Assistant</h1>
	<div class="h-[85%] overflow-y-auto border-b mb-4 pb-4" bind:this={messageContainer}>
		<ul class="space-y-4">
			{#each $messages as message}
				<div class="flex items-end {message.role === 'user' ? 'flex-row-reverse' : ''}">
					<div
						class="text-xs font-bold flex items-center justify-center bg-gray-100 rounded-full w-10 h-10 flex-none {message.role ===
						'user'
							? 'ml-2'
							: 'mr-2'}"
					>
						{message.role === 'user' ? 'Me' : 'AI'}
					</div>

					<li
						class="p-4 rounded-lg shadow-md transition-colors duration-300 ease-in-out
				            {message.role === 'user'
							? 'bg-blue-500 text-white self-end'
							: 'bg-gray-100 text-gray-800 self-start'}"
					>
						<div class="flex items-center">
							<span>{message.content}</span>
						</div>
					</li>
				</div>
			{/each}
		</ul>
	</div>
	<form on:submit={handleSubmit} class="flex items-center space-x-2">
		<input
			bind:value={$input}
			class="flex-grow p-3 border rounded-full shadow focus:outline-none focus:ring focus:border-blue-300"
			placeholder="Type your message..."
		/>
		<button
			type="submit"
			class="bg-blue-600 text-white px-5 py-2 rounded-full shadow-md hover:bg-blue-700 transition-colors duration-300 ease-in-out"
			>Send</button
		>
	</form>
</main>
