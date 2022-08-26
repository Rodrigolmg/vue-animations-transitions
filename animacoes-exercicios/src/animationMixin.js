export default {
	methods:{
        beforeEnter(el){
            console.log('beforeEnter')
        },
        enter(el, doneCallback){
            console.log('enter')
            doneCallback()
        },
        afterEnter(el){
            console.log('afterEnter')
        },
        enterCancelled(el){
            console.log('enterCancelled')
        },
        beforeLeave(el){
            console.log('beforLeave')
        },
        leave(el, doneCallback){
            console.log('leave')
            doneCallback()
        },
        afterLeave(el){
            console.log('afterLeave')
        },
        leaveCancelled(el){
            console.log('enterCancelled')
        },
    }
	
}