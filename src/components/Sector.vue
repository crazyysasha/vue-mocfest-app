<template>
  <div class="sector">
    <div class="sector-back" @click="closeSector">
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M30.1406 12.28L17.9206 24.03L30.1406 35.78" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
      </svg>
      Назад
    </div>
    <div class="sector-wrap" :class="sectorClass">
      <div class="row" v-for="(row, idx) in seats" :key="idx">
          <div class="seat" v-for="item in row" :key="item.number" 
          :style="{background: item.color}" :class="{selected: item.selected, reserved: item.is_booked}"
          @click="addToBasket(item)">
            <div class="seat-tooltip">
              <div>Ряд: {{item.row}}</div>
              <div>Место: {{item.number}}</div>
              <div>Цена: {{item.price}}</div>
              <div>Статус: {{item.is_booked ? 'Забронировано' :  'Свободно'}}</div>
            </div>
          </div>
      </div>
    </div>
    <div class="sector-basket" :class="{'sector-basket-hide': hideBasket}">
      <div class="sector-basket__slide" @click="hideBasket = !hideBasket">
        <img src="../assets/images/icons/menu.svg" alt="ico">
      </div>
      <div class="sector-basket__title">
        Корзина <span class="delete" @click="removeAll">-</span>
      </div>
      <div class="sector-basket__list">
        <div class="sector-basket__empty" v-if="!basket.length">
          Ваша корзина пуста
        </div>
        <div class="sector-basket__item" v-for="(item, idx) in basket" :key="idx"
        :style="{background: item.color}">
          Ряд:{{item.row}} Место:{{item.seat}} Цена:{{item.price}}к 
          <span class="delete" @click="removeItem(idx)">-</span>
        </div>
      </div>
      <div class="sector-basket__total">
        Итого: {{totalPrice}}К
      </div>
      <div class="sector-basket__buy">
        Купить
      </div>
    </div>
  </div>
</template>

<script>


export default {
    name: 'sector-component',
    created() {

    this.$store.dispatch('loadSeats', this.id)
    this.sectorClass = `sector-${this.id}`

    setTimeout(() => {
      console.log(this.seats)
    }, 2000)


  },
    props: {
        id: Number
    },
    data() {
        return {
            sector: {},
            sectorClass: '',
            basket: [],
            hideBasket: true,
        };
    },
    methods: {
        closeSector() {
            this.$emit("closeSector");
        },
        addToBasket(item) {
          if(!this.basket.includes(item) && !item.reserved) {
            item['selected'] = true
            this.basket.push(item)
          }
        },
        removeAll() {
          this.basket = []
          Object.values(this.sector).map(item => item.map(seat => seat['selected'] = false))
        },
        removeItem(i) {
          Object.values(this.sector).map(item => item.forEach(seat => {
            if(seat == this.basket[i]) {
              seat['selected'] = false
            }
        }))
          this.basket.splice(i, 1)
        }
    },
    computed: {
      totalPrice() {
        return this.basket.reduce((sum, item) => {
          return sum += item.price
        }, 0)
      },

      seats() {
        return this.$store.getters.getSeats.seats
      }

    }
}
</script>


<style>

</style>

