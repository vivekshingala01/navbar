<script setup>
const frameworks = [{ label: 'React', value: 'react' }, { label: 'Vue', value: 'vue' }, { label: 'Angular', value: 'angular' }, { label: 'Svelte', value: 'svelte' },]

</script>

<template>
    <div class="max-w-7xl mx-auto ">
        <div class="sm:flex  justify-between my-6">
            <h1 class="">Create User</h1>
            <button class="border border-stone-950 py-2 px-4 rounded-md ">Back</button>
        </div>

        <FormKit type="text" label=" Name*" placeholder="Enter Name" help="Name is required" />
        <FormKit type="email" label="Email*" validation="required|email|ends_with:gmail.com" validation-visibility="live"
            placeholder="Enter Email" />
        <FormKit type="text" label="User Name*" placeholder="User Name" help="User Name is required" />
        <FormKit type="group">

            <FormKit type="password" name="password" label="Password" help="Enter a new password" validation="required"
                validation-visibility="live" />
            <FormKit type="password" name="password_confirm" label="Confirm password" help="Confirm your new password"
                validation="required|confirm" validation-visibility="live" validation-label="Password confirmation" />
        </FormKit>

        <button class="border  py-2 px-4 rounded-md bg-indigo-700 text-white">Back</button>

    </div>
</template>

<style></style>