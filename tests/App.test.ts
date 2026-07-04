import { mount } from '@vue/test-utils'
import App from '../app/app.vue'
import AppFooterComponent from '../app/components/AppFooterComponent.vue'
import AppHeaderComponent from '../app/components/AppHeaderComponent.vue'

describe('App', () => {
  it('renders the shared footer', () => {
    const wrapper = mount(App, {
      global: {
        components: {
          AppFooterComponent,
          AppHeaderComponent,
        },
        stubs: {
          NuxtPage: true,
          NuxtRouteAnnouncer: true,
        },
      },
    })

    expect(wrapper.findComponent(AppFooterComponent).exists()).toBe(true)
  })
})
