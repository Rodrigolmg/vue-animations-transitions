<template>
	<div id="app" class="container-fluid">
		<h1>Animações</h1>
		<hr>
		<b-button variant="primary" class="mb-4" @click="show = !show">Show Message</b-button>
		<!-- <transition name="fade">
			<b-alert variant="info" show v-if="!show">{{msg}}</b-alert>
		</transition>
		
		<transition name="slide" type="transition" appear>
			<b-alert variant="info" show v-show="!show">{{msg}}</b-alert>
		</transition>


		<transition 
			enter-active-class="animated bounce"
			leave-active-class="animated shake">
			<b-alert variant="info" show v-show="!show">{{msg}}</b-alert>
		</transition> -->

		<hr>

		<b-select v-model="animationType" class="mb-4">
			<option value="fade">Fade</option>
			<option value="slide">Slide</option>
		</b-select>

		<transition :name="animationType" mode="out-in">
			<b-alert variant="info" show v-if="!show" key="info">{{msg}}</b-alert>
			<b-alert variant="warning" show v-else key="warn">{{msg}}</b-alert>
		</transition>
		<hr>
		<b-button variant="primary" class="mb-4" @click="show2 = !show2">Show</b-button>
		<transition
			:css="false"
			@before-enter="beforeEnter"
			@enter="enter"
			@after-enter="afterEnter"
			@enter-cancelled="enterCancelled"
			@before-leave="beforeLeave"
			@leave="leave"
			@after-leave="afterLeave"
			@leave-cancelled="leaveCancelled">
			<div class="box" v-if="show2">

			</div>
		</transition>
	</div>
</template>

<script>
import animationMixin from '@/animationMixin'

export default {
	mixins:[animationMixin],
	data(){
		return {
			msg: 'A new information message for users',
			show: false,
			show2: true,
			animationType: 'fade'
		}
	},

}
</script>

<style>
#app {
	font-family: 'Avenir', Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
	margin-top: 60px;
	font-size: 1.5rem;
}

.box {
	height: 100px;
	width: 300px;
	margin: 30px auto;
	background-color: lightgreen;
}


/* TRANSITIONS */
.fade-enter, .fade-leave-to {
	opacity: 0;
}

.fade-enter-active, .fade-leave-active {
	transition: opacity 2s;
}

@keyframes slide-in {
	from { transform: translateY(40px);}
	to { transform: translateY(0);}
}

@keyframes slide-out {
	from { transform: translateY(0);}
	to { transform: translateY(40px);}
}


.slide-enter-active {
	animation: slide-in 2s ease;
	transition: opacity 2s;
}

.slide-leave-active {
	animation: slide-out 2s ease;
	transition: opacity 2s;
}

.slide-enter, .slide-leave-to {
	opacity: 0;
}

</style>
