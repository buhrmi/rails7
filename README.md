# Rails 7, Vite, Inertia, Svelte

### 1. Generate Rails app

```bash
rails new app --skip-javascript --skip-asset-pipeline
npm install --save-dev axios svelte @inertiajs/inertia @inertiajs/inertia-svelte @inertiajs/progress @sveltejs/vite-plugin-svelte
```

### 2. Add to your Gemfile:

```ruby
gem 'inertia_rails'
gem 'vite_rails'
```

### 3. Run vite installer

```bash
bundle
bundle exec vite install
```

### 4. Replace `app/frontend/entrypoints/application.js` with

```js
import axios from 'axios'

import { createInertiaApp } from '@inertiajs/inertia-svelte'
import { InertiaProgress } from '@inertiajs/progress'

document.addEventListener('DOMContentLoaded', () => {
  const csrfToken = document.querySelector('meta[name=csrf-token]').content
  axios.defaults.headers.common['X-CSRF-Token'] = csrfToken

  InertiaProgress.init()

  createInertiaApp({
    id: 'app',
    resolve: name => import(`../pages/${name}.svelte`),
    setup({ el, App, props }) {
      new App({ target: el, props })
    },
  })
})
```

### 5. Add a welcome page

Create a `app/frontend/pages/welcome.svelte` file and edit your `routes.rb`.

```ruby
# routes.rb
inertia 'welcome' => 'welcome'
root to: redirect('/welcome')
```

### 6. Start server

```
./bin/vite dev
rails s
```