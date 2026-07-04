import { mount } from '@vue/test-utils'
import ProjectDonationComponent from '../../app/components/ProjectDonationComponent.vue'

describe('ProjectDonationComponent', () => {
  it('renders the donation call to action and banking details', () => {
    const wrapper = mount(ProjectDonationComponent, {
      props: {
        title: 'Support this project',
        description: 'Use the banking details below to make a contribution.',
        bankName: 'FNB/RMB',
        accountHolder: 'MISSION DAWAH SOUTH AFRICA NPC',
        accountType: 'Islamic Gold Business Account',
        accountNumber: '63145999017',
        branchCode: '200409',
        reference: 'Project reference',
        theme: 'green',
      },
    })

    expect(wrapper.attributes('data-theme')).toBe('green')
    expect(wrapper.get('h2').text()).toBe('Support this project')
    expect(wrapper.text()).toContain('Use the banking details below to make a contribution.')
    expect(wrapper.text()).toContain('FNB/RMB')
    expect(wrapper.text()).toContain('MISSION DAWAH SOUTH AFRICA NPC')
    expect(wrapper.text()).toContain('Islamic Gold Business Account')
    expect(wrapper.text()).toContain('63145999017')
    expect(wrapper.text()).toContain('200409')
    expect(wrapper.text()).toContain('Reference')
    expect(wrapper.text()).toContain('Project reference')
  })
})
