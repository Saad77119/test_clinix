import hello from 'hellojs'

export default ({ Vue }) => {
  hello.init({
    facebook: '921143945312169'
  })
  Vue.prototype.$hello = hello
}
