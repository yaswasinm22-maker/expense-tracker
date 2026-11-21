import React from 'react'

function Hero() {
  return (
    <section class="bg-white lg:grid lg:h-screen lg:place-content-center">
  <div class="mx-auto w-screen max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8 lg:py-32">
    <div class="mx-auto max-w-prose text-center">
      <h1 class="text-4xl font-bold text-gray-900 sm:text-5xl">
        Manage your 
        <strong class="text-green-700"> paisa  </strong>
        .
      </h1>

      <p class="mt-4 text-base text-pretty text-gray-700 sm:text-lg/relaxed">
        Made by Yaswasin for his expense tracker.
      </p>

      <div class="mt-4 flex justify-center gap-4 sm:mt-6">
        <a
          class="inline-block rounded border border-red-100 bg-red-700 px-5 py-3 font-medium text-white shadow-sm transition-colors hover:bg-red-900"
          href="#"
        >
          Get Started
        </a>

        <a
          class="inline-block rounded border border-gray-200 px-5 py-3 font-medium text-gray-700 shadow-sm transition-colors hover:bg-gray-50 hover:text-gray-900"
          href="#"
        >
          Learn More
        </a>
      </div>
    </div>
  </div>
</section>
  )
}

export default Hero