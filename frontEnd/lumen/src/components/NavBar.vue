<template>
  <div
    class="bg-gray-900 text-gray-100 py-3.5 px-6 shadow-md flex justify-between items-center relative"
  >
    <div class="flex items-center cursor-pointer">
      <span class="text-green-500 text-xl mr-1">
        <i class="fas fa-building"></i>
      </span>
      <h1 class="text-xl font-serif text-red-900">Lumen</h1>
    </div>
    <span class="md:hidden right-6 top-1.5 cursor-pointer text-4xl absolute" @click="toggleMenu">
      <button
        data-collapse-toggle="navbar-default"
        type="button"
        class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
        aria-controls="navbar-default"
        aria-expanded="false"
      >
        <span class="sr-only">Open main menu</span>
        <svg
          class="w-5 h-5"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 17 14"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M1 1h15M1 7h15M1 13h15"
          />
        </svg>
      </button>
    </span>
    <ul
class="md:flex md:items-center md:space-x-4 text-center md:p-0 p-4 absolute bg-gray-900 md:bg-transparent md:w-auto w-full md:top-auto top-14 md:relative menu transition duration-700"
  :class="[open ? 'block md:block' : 'hidden md:block']">
  

    <li v-for="link in Links" :key="link.name">
  
  <a :href="link.link" class="text-xl hover:text-green-500">{{ link.name }}</a>
</li>
      <Button> Get started </Button>
    </ul>
  </div>
</template>

<script>
import Button from './Button.vue'

export default {
  components: {
    Button
  },
  data() {
    return {
      open: false,
      Links: [
        {
          name: 'Home',
          link: '#'
        },
        {
          name: 'Services',
          link: '#',
        },
        {
          name: 'A propos',
          link: '#'
        },
        {
          name: 'Blogs',
          link: '#'
        },
        {
          name: 'Contact',
          link: '#'
        }
      ]
    }
  },
  methods: {
    toggleMenu() {
      this.open = !this.open
    }
  }
}
</script>
