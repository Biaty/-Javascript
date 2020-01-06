const ppa = {
    template:'#ppa',
    create(){
        console.log(this.$parent.num)
    },
    inject:['ary2']
}