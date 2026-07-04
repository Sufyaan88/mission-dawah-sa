import { mount } from '@vue/test-utils'
import HadithSectionComponent from '../../app/components/HadithSectionComponent.vue'

describe('HadithSectionComponent', () => {
  it('renders a referenced hadith using semantic markup', () => {
    const wrapper = mount(HadithSectionComponent, {
      props: {
        text: 'Verified hadith translation.',
        source: 'Collection and reference',
        theme: 'blue',
      },
    })

    expect(wrapper.attributes('data-theme')).toBe('blue')
    expect(wrapper.get('blockquote').text()).toBe('Verified hadith translation.')
    expect(wrapper.get('cite').text()).toBe('Collection and reference')
  })
})
