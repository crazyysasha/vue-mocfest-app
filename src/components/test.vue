<template>
  <div class="main-sector">
    <div class="main-sector__plan">
      <svg width="350" height="147" viewBox="0 0 350 147" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect class="main-sector__links" @click="showSector('a2')" x="96.8333" y="23.4355" width="57.1667" height="37.4969" fill="#D9D9D9" fill-opacity="0.5"/>
        <rect class="main-sector__links"  @click="showSector('b2')" x="129.5" y="67.9634" width="91" height="78.5092" fill="#D9D9D9" fill-opacity="0.5"/>
        <path class="main-sector__links" @click="showSector('b3')" fill-rule="evenodd" clip-rule="evenodd" d="M227.5 67.8633H256.528H256.528H268.969V142.835H256.528V147H227.5V67.8633ZM281.41 67.8633H268.969V138.67H281.41V134.505H293.851V67.8633H281.41H281.41ZM335.32 67.8633H293.851V105.349H335.32V67.8633ZM293.851 105.349H318.732H322.879V117.844H318.732L318.732 122.01H297.998V126.174L302.145 126.174V130.339H293.851V126.174V122.01V122.009V105.349ZM339.467 67.8633H335.32V97.0189H339.467V84.5235H343.614V76.1934H339.467V67.8633Z" fill="#D9D9D9" fill-opacity="0.5"/>
        <path class="main-sector__links" @click="showSector('b1')" fill-rule="evenodd" clip-rule="evenodd" d="M34.8617 67.8633H121.947V122.009H121.947V138.67H63.8903V122.009H63.8902V134.505H51.4495V130.339H47.3026V126.174H51.4495V122.009H34.8617V117.844H26.568V109.514H30.7148V105.349H34.8617V67.8633ZM117.8 138.67H80.4779H80.4778H72.1841V142.835H80.4778V147H117.8V138.67ZM9.9802 97.0191H14.1271V97.0188H5.83333V80.3584H9.9802V76.1934H14.1271V72.0284H9.9802V67.8633H14.1271H14.1271H34.8617V105.349H14.1271V101.184H9.9802V97.0191Z" fill="#D9D9D9" fill-opacity="0.5"/>
        <rect class="main-sector__links" @click="showSector('a3')" x="189" y="23.9629" width="61.8333" height="37.4969" fill="#D9D9D9" fill-opacity="0.5"/>
        <path class="main-sector__links" @click="showSector('a4')" fill-rule="evenodd" clip-rule="evenodd" d="M307.596 23.4355H257.833V60.9214H307.596V60.9213H320.037V27.6006H307.596V23.4355ZM320.037 35.9307H324.184V40.0957H328.331L328.331 44.2607H332.478L332.478 52.5914H336.625V60.9216H332.478L332.478 60.9211L328.331 60.9211L324.184 60.9212H320.037V35.9307Z" fill="#D9D9D9" fill-opacity="0.5"/>
        <path class="main-sector__links" @click="showSector('a1')" fill-rule="evenodd" clip-rule="evenodd" d="M31.7544 23.4355H89.8113V60.9214H31.7544V60.9213H27.6076V27.6006H31.7544V23.4355ZM27.6073 31.7656H23.4604V40.0957H19.3135V48.4263H15.1667V60.9216H19.3136V60.9211H23.4604V60.9212H27.6073V31.7656Z" fill="#D9D9D9" fill-opacity="0.5"/>
        <path d="M45.7382 42.5325L46.5682 44.8525H47.4482L44.4182 36.7625H43.4982L40.4782 44.8525H41.3382L42.1682 42.5325H45.7382ZM43.9582 37.5225L45.4582 41.7425H42.4482L43.9582 37.5225ZM53.6208 44.8525V44.0325H51.8108V36.7625H50.9808L48.8308 38.1525L48.8208 39.0925L50.9608 37.7025V44.0425L48.6908 44.0325V44.8525H53.6208Z" fill="black"/>
        <path d="M69.3283 96.3903C70.1083 96.1203 70.3583 95.2803 70.3583 94.7603C70.3583 93.5803 69.4683 92.4803 68.0583 92.4803H64.9983V100.57H68.1683C70.0383 100.57 70.8483 99.7203 70.8483 98.4403C70.8483 97.5403 70.5283 96.5703 69.3283 96.3903ZM67.8183 93.2803C68.9683 93.2803 69.5283 93.8603 69.5283 94.6703C69.5283 95.7003 68.9283 96.0403 67.8083 96.0403C67.3183 96.0403 66.4583 96.0403 65.8083 96.0403V93.2803H67.8183ZM68.3183 99.7803H65.8083V96.8303H68.2983C69.3983 96.8303 70.0383 97.5603 70.0383 98.3803C70.0383 99.3903 69.3383 99.7803 68.3183 99.7803ZM77.347 100.57V99.7503H75.537V92.4803H74.707L72.557 93.8703L72.547 94.8103L74.687 93.4203V99.7603L72.417 99.7503V100.57H77.347Z" fill="black"/>
        <path d="M117.552 42.0052L118.382 44.3252H119.262L116.232 36.2352H115.312L112.292 44.3252H113.152L113.982 42.0052H117.552ZM115.772 36.9952L117.272 41.2152H114.262L115.772 36.9952ZM123.294 36.0652C121.644 36.0652 120.684 37.0552 120.614 38.2952H121.424C121.524 37.2352 122.534 36.8852 123.484 36.8852C124.524 36.8852 125.084 37.5952 125.084 38.3552C125.084 39.1752 124.884 39.8252 123.404 40.1552C121.574 40.5652 120.834 40.8652 120.834 43.5152C120.834 43.9752 120.844 43.9152 120.844 44.3252H126.024V43.5152H121.664C121.664 41.0652 122.304 41.2552 123.704 40.9252C125.194 40.5852 125.914 39.7852 125.914 38.5152C125.914 37.1152 125.104 36.0652 123.294 36.0652Z" fill="black"/>
        <path d="M166.162 96.3903C166.942 96.1203 167.192 95.2803 167.192 94.7603C167.192 93.5803 166.302 92.4803 164.892 92.4803H161.832V100.57H165.002C166.872 100.57 167.682 99.7203 167.682 98.4403C167.682 97.5403 167.362 96.5703 166.162 96.3903ZM164.652 93.2803C165.802 93.2803 166.362 93.8603 166.362 94.6703C166.362 95.7003 165.762 96.0403 164.642 96.0403C164.152 96.0403 163.292 96.0403 162.642 96.0403V93.2803H164.652ZM165.152 99.7803H162.642V96.8303H165.132C166.232 96.8303 166.872 97.5603 166.872 98.3803C166.872 99.3903 166.172 99.7803 165.152 99.7803ZM172.04 92.3103C170.39 92.3103 169.43 93.3003 169.36 94.5403H170.17C170.27 93.4803 171.28 93.1303 172.23 93.1303C173.27 93.1303 173.83 93.8403 173.83 94.6003C173.83 95.4203 173.63 96.0703 172.15 96.4003C170.32 96.8103 169.58 97.1103 169.58 99.7603C169.58 100.22 169.59 100.16 169.59 100.57H174.77V99.7603H170.41C170.41 97.3103 171.05 97.5003 172.45 97.1703C173.94 96.8303 174.66 96.0303 174.66 94.7603C174.66 93.3603 173.85 92.3103 172.04 92.3103Z" fill="black"/>
        <path d="M213.218 42.5325L214.048 44.8525H214.928L211.898 36.7625H210.978L207.958 44.8525H208.818L209.648 42.5325H213.218ZM211.438 37.5225L212.938 41.7425H209.928L211.438 37.5225ZM219.751 40.3325C219.751 40.3325 220.921 40.2025 220.921 38.6225C220.921 37.6125 220.221 36.5925 218.671 36.5925C217.391 36.5925 216.641 37.3725 216.561 38.4325H217.371C217.551 37.7625 217.931 37.4125 218.671 37.4125C219.551 37.4125 220.091 37.8225 220.091 38.8225C220.091 39.4125 219.671 39.8625 218.771 39.9925V40.7125C220.051 40.8525 220.581 41.6525 220.581 42.3425C220.581 43.4225 220.051 44.2125 218.961 44.2125C217.721 44.2125 217.231 43.8425 216.961 42.7425H216.161C216.241 44.1625 217.231 45.0125 218.741 45.0125C220.401 45.0125 221.401 44.1725 221.401 42.4725C221.401 40.5025 219.751 40.3325 219.751 40.3325Z" fill="black"/>
        <path d="M269.442 96.3903C270.222 96.1203 270.472 95.2803 270.472 94.7603C270.472 93.5803 269.582 92.4803 268.172 92.4803H265.112V100.57H268.282C270.152 100.57 270.962 99.7203 270.962 98.4403C270.962 97.5403 270.642 96.5703 269.442 96.3903ZM267.932 93.2803C269.082 93.2803 269.642 93.8603 269.642 94.6703C269.642 95.7003 269.042 96.0403 267.922 96.0403C267.432 96.0403 266.572 96.0403 265.922 96.0403V93.2803H267.932ZM268.432 99.7803H265.922V96.8303H268.412C269.512 96.8303 270.152 97.5603 270.152 98.3803C270.152 99.3903 269.452 99.7803 268.432 99.7803ZM276.111 96.0503C276.111 96.0503 277.281 95.9203 277.281 94.3403C277.281 93.3303 276.581 92.3103 275.031 92.3103C273.751 92.3103 273.001 93.0903 272.921 94.1503H273.731C273.911 93.4803 274.291 93.1303 275.031 93.1303C275.911 93.1303 276.451 93.5403 276.451 94.5403C276.451 95.1303 276.031 95.5803 275.131 95.7103V96.4303C276.411 96.5703 276.941 97.3703 276.941 98.0603C276.941 99.1403 276.411 99.9303 275.321 99.9303C274.081 99.9303 273.591 99.5603 273.321 98.4603H272.521C272.601 99.8803 273.591 100.73 275.101 100.73C276.761 100.73 277.761 99.8903 277.761 98.1903C277.761 96.2203 276.111 96.0503 276.111 96.0503Z" fill="black"/>
        <path d="M285.657 42.5325L286.487 44.8525H287.367L284.337 36.7625H283.417L280.397 44.8525H281.257L282.087 42.5325H285.657ZM283.877 37.5225L285.377 41.7425H282.367L283.877 37.5225ZM294.799 42.5125V41.6925H293.649V36.7625H292.519L288.909 41.5325V42.5125H292.829V44.8525H293.649V42.5125H294.799ZM292.829 41.6925H289.569L292.829 37.4025V41.6925Z" fill="black"/>
        <path d="M165 36.3251V35.8251H164.5H158.781L171.5 24.1152L184.219 35.8251H178.5H178V36.3251V60.4325H165V36.3251Z" stroke="white"/>
      </svg>
    </div>
    <Sector v-if="sector" @closeSector="closeSector" 
	@redirectFromSeats = "redirectFromSeats"
	:id = "sectorId" :prices = "sectorPrices"/>
  </div>
</template>

<script>
import Sector from './Sector.vue'
import {getSeatsPrices} from  '@/api/seats'

export default {
  name: "test-component",
  components: {
    Sector,
  },
  async created() {
	  await getSeatsPrices().then(response => this.sectorPrices = response.data.groups.reverse())
  },
  data() {
    return {
      sector: false,
      sectorId: 0,
	  sectorPrices: [],
    }
  },
  methods: {
    closeSector() {
      this.sector = false
    },
    showSector(id) {
      this.sectorId = id
      this.sector = true
    },
	redirectFromSeats() {
		this.$emit('redirectFromSeats')
	}
  }
}
</script>

<style>

.main-sector__plan svg {
  width: 100%;
}

.main-sector__plan svg path {
	pointer-events: none;
}

.main-sector__plan svg path.main-sector__links {
	pointer-events: auto;
}

.main-sector__links {
  cursor: pointer;
  transition: .4s all;
}

.main-sector__links:hover {
  fill: #fff;
  fill-opacity: .8;
}

 .row {
	 display: flex;
	 margin-bottom: .4rem;
	 flex-shrink: 0;
	 width: auto;
}
 .sector {
	 min-height: 500px;
	 position: fixed;
	 top: 50%;
	 left: 50%;
   transform: translate(-50%, -50%);
	 min-width: 500px;
	 z-index: 999;
	 background: #000;
	 display: flex;
	 justify-content: space-between;
	 flex-direction: column;
	 align-items: center;
   border: 1px solid #FFFFFF; 
   overflow: hidden;
   font-family: Montserrat, sans-serif;

}
 .sector ::-webkit-scrollbar {
	 height: 2px;
 }
.sector-wrap {
	padding: 25px 50px 20px;
	width: 100%;
	display: flex;
	max-width: 80vw;
	overflow: auto;
	margin-bottom: 10px;
}
.sector__title {
	margin-bottom: 16px;
	text-transform: uppercase;
	font-size: 18px;
}
.sector-prices {
	display: flex;
	flex-wrap: wrap;
	max-width: 240px;
	margin-bottom: 20px;
}
.sector-prices__item {
	display: flex;
	align-items: center;
	margin-right: 14px;
}
.sector-prices__color {
	width: 8px;
	height: 8px;
	margin-right: 8px;
}
.sector-prices__price {
	text-transform: uppercase;
	font-size: 10px;
}
.sector__btn {
	width: 100%;
	display: flex;
	justify-content: center;
	align-content: center;
	cursor: pointer;
	padding: 25px;
	border-top: 2px dashed #FFFFFF;
	transition: .4s all;
	text-transform: uppercase;
	font-size: 20px;
}
.sector__btn.disabled {
	pointer-events: none;
}
.sector__btn:hover {
	background: #fff;
	color: #000;
}
 .sector-back {
	 position: absolute;
	 z-index: 10;
	 top: 25px;
	right: 20px;
	 display: inline-flex;
	 justify-content: center;
	 align-items: center;
	 cursor: pointer;
}
 .sector-back svg {
	 width: 1.3rem;
}
 .sector-a1 .row {
	 justify-content: flex-end;
}
 .sector-a2 .row {
	 justify-content: center;
}
 .sector-a3 .row {
	 justify-content: center;
}
 .sector-a4 .row {
	 justify-content: flex-start;
}
 .sector-b1 .row {
	 margin-bottom: 0.25rem;
	 justify-content: flex-end;
}
 .sector-b2 .row {
	 margin-bottom: 0.25rem;
	 justify-content: center;
}
 .sector-b3 .row {
	 margin-bottom: 0.25rem;
	 justify-content: flex-start;
}
 .sector-basket {
	 right: 0;
	 width: 17rem;
	 padding: 1rem;
   border: 1px solid #fff;
   border-radius: 10px;
   position: fixed;
   transition: .6s all;
   transform: translateY(-50%);
   top: 50%;
   z-index: 999;
   background: #000;
}
 .sector-basket-hide {
	 transform: translate(100%,-50%);
}

 .sector-basket__empty {
	 padding: .5rem 1rem;
	 height: 4rem;
	 font-size: 0.8rem;
	 color: #999;
}
 .sector-basket__slide {
	 left: -2rem;
	 width: 2rem;
	 height: 2rem;
	 cursor: pointer;
   position: absolute;
   top: 50%;
   transform: translateY(-50%);
   border: 1px solid #fff;
   border-radius: 5px;
   padding: 4px;
   background: #000;
}
 .sector-basket__slide img {
	 width: 100%;
}

 .sector-basket .delete {
	 width: 1rem;
	 height: 1rem;
	 background: #e53c4a;
	 border-radius: .2rem;
	 font-size: 1rem;
	 color: #fff;
	 cursor: pointer;
	 margin-left: 1rem;
   display: inline-flex;
   justify-content: center;
   align-items: center;
}
 .sector-basket .delete:hover {
	 background-color: #db3240;
}
 .sector-basket__item {
	 color: #fff;
	 padding: .7rem;
	 font-size: 0.7rem;
	 font-weight: 700;
	 border-radius: .4rem;
	 margin-bottom: 0.5rem;
	 position: relative;
   text-transform: none;
}
 .sector-basket__item .delete {
	 right: 0.5rem;
   position: absolute;
   top: 50%;
   transform: translateY(-50%);
}
 .sector-basket__title, .sector-basket__total {
	 display: flex;
	 justify-content: space-between;
	 font-size: 0.9rem;
	 font-weight: 700;
	 margin-bottom: 0.5rem;
}
 .sector-basket__total {
	 justify-content: flex-end;
}
 .sector-basket__list {
	 max-height: 20rem;
	 margin-bottom: .75rem;
	 overflow: auto;
	 border: 1px solid #bbb;
	 border-radius: .25rem;
	 padding: 0.5rem;
}
 .sector-basket__buy {
	 width: 100%;
	 font-size: 0.8rem;
	 color: #fff;
	 font-weight: 700;
	 background: #e53c4a;
	 border-radius: .4rem;
	 cursor: pointer;
	 height: 2rem;
	 margin-top: 1rem;
    display: inline-flex;
   justify-content: center;
   align-items: center;
}
 .sector-basket__buy:hover {
	 background-color: #db3240;
}
.sector-basket__buy.disabled {
	pointer-events: none;
}
 .seat {
	 width: 25px;
	 height: 25px;
	 margin-right: 8px;
	 cursor: pointer;
	 position: relative;
   display: block;
   flex-shrink: 0;
}
.seat::after {
  position: absolute;
	 content: '';
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
	 width: 90%;
	 height: 90%;
	 background: rgba(0,0,0,0.7);
}
 .seat:hover .seat-tooltip {
	 display: block;
}
 .seat.selected {
	 cursor: not-allowed;
}
 .seat.selected::after {
   content: none;
}
 .seat.reserved {
	 background: #ccc !important;
	 cursor: not-allowed;
}
 .seat:last-child {
	 margin-right: 0;
}
 .seat-info {
	 position: absolute;
	 left: 0;
	 top: 1rem;
	 width: 100%;
	 display: flex;
	 justify-content: center;
	 font-size: 0.8rem;
}
 .seat-info__item {
	 margin: 0 1rem;
}
 .seat-info__item span:first-child {
	 margin-right: 0.2rem;
}
 .seat-info__item span:last-child {
	 font-weight: 700;
}
 .seat-tooltip {
	 position: absolute;
	 pointer-events: none;
	 padding: 10px;
	 left: 50%;
	 transform: translateX(-50%);
	 border-radius: .25rem;
	 background: #000;
	 color: #fff;
	 font-size: 11px;
	 display: none;
	 width: 120px;
	 z-index: 5;
	 bottom: 15px;
	 user-select: none;
}
 .seat-tooltip div {
	 white-space: nowrap;
}
 .seat-tooltip::after {
	 position: absolute;
	 content: '';
	 left: 50%;
	 transform: translateX(-50%);
	 display: inline-block;
	 bottom: -0.4rem;
	 width: 0;
	 height: 0;
	 border-style: solid;
	 border-width: .4rem .4rem 0 .4rem;
	 border-color: #000 transparent transparent transparent;
}

.sector-loader {
	display: flex;
	justify-content: center;
	align-items: center;
	min-height: 420px;
	height: 100%;
}

.lds-ring {
  display: inline-block;
  position: relative;
  width: 80px;
  height: 80px;
}
.lds-ring div {
  box-sizing: border-box;
  display: block;
  position: absolute;
  width: 64px;
  height: 64px;
  margin: 8px;
  border: 8px solid #fff;
  border-radius: 50%;
  animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
  border-color: #fff transparent transparent transparent;
}
.lds-ring div:nth-child(1) {
  animation-delay: -0.45s;
}
.lds-ring div:nth-child(2) {
  animation-delay: -0.3s;
}
.lds-ring div:nth-child(3) {
  animation-delay: -0.15s;
}
@keyframes lds-ring {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
 
@media (max-width: 500px) {
	 .seat {
		width: 16px;
		height: 16px;
		margin-right: 4px;
	 }

	 .sector {
		 width: 100vw;
		 height: 100vh;
		 transform: none;
		 left: 0;
		 top: 0;
		 min-width: 0;
	 }

	 .sector-wrap {
		 padding: 20vh 40px 20px 20px;
		 height: 100%;
		 max-width: 100%;
		 display: flex;
		 align-items: flex-start;
		max-height: 100%;
		
	 }

	 .sector-basket {
		 position: absolute;
	 }
}

</style>