import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  template: `
    <header
      class="w-full bg-lightESB flex justify-center items-center py-4 shado-xl fixed"
    >
      <div class="bg-primaryESB py-2 px-4 mr-2">
        <span class="text-xl text-lightESB uppercase font-semibold">Y</span>
      </div>
      <h1 class="text-darkESB text-xl font-bold capitalize">{{ title }}</h1>
    </header>
  `,
})
export class HeaderComponent {
  title = 'hacker news';
}
