<script>
export default {
  name: 'jsx',
  components: {},
  data() {
   return {
     value: 'hello JSX',
     show: false,
   }
  },
  render () {
    return(
      <div>
        <h1>JSX</h1>
        <h2>{ this.value } </h2>
        <div domPropsInnerHTML="<a>www.baidu.com<a>"></div>
        <div domPropsTextContent="<a>www.baidu.com<a>"></div>
        <div v-show={this.show}>show</div>
        { true && <div>if</div> }
        { true ? <div>if</div> : <div>else</div> }
      </div>
      
    )
  }
}
</script>