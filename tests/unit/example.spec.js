import { shallowMount } from '@vue/test-utils'
import { mount } from '@vue/test-utils'
import Modal from '@/components/Modal.vue'

describe('Modal.vue', () => {

  it('renders props.msg when passed', () => {
    const msg = 'Modal Component'
    const wrapper = shallowMount(Modal, {
      propsData: { msg }
    });
    expect(wrapper.text()).toMatch(msg);
  });

  it('check counter after increment button is pressed', () => {
    const wrapper = shallowMount(Modal);
    expect(wrapper.vm.counter).toBe(0);
    wrapper.find('button').trigger('click'); 
    expect(wrapper.vm.counter).toBe(1);
  });

  it('check increment method', () => {
    const wrapper = shallowMount(Modal);
    wrapper.vm.increment();
    expect(wrapper.vm.counter).toBe(1);
  });

  it('Regular expressions', () => {
    expect('chidi').toMatch(/I/i)
  });

  it('Admin should be in users', () => {
    const wrapper = shallowMount(Modal);
    expect(wrapper.vm.users).toContain(wrapper.vm.admin)
  })

  /**
   * Working with Async data
   */
  it('User fetched name should be Leanne Graham', async () => {
    const wrapper = shallowMount(Modal);
    expect.assertions(1);
    const data = await wrapper.vm.fetchUser();
    expect(data.name).toEqual('Leanne Graham')
    
  });


  
})
