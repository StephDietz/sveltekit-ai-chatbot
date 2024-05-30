<script>
	import { useChat } from 'ai/svelte';

	const { input, handleSubmit, messages } = useChat();
</script>

<main class="max-w-2xl mx-auto p-4">
	<ul class="space-y-4 my-4">
		{#each $messages as message}
			<li
				class="p-4 rounded-lg shadow
			            {message.role === 'user' ? 'bg-blue-100 text-blue-800' : 'bg-gray-100 text-gray-800'}"
			>
				<span class="font-bold">{message.role}:</span>
				{message.content}
			</li>
		{/each}
	</ul>
	<form on:submit={handleSubmit} class="flex space-x-2">
		<input
			bind:value={$input}
			class="flex-grow p-2 border rounded-lg shadow"
			placeholder="Type your message..."
		/>
		<button
			type="submit"
			class="bg-blue-500 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-600">Send</button
		>
	</form>
</main>
