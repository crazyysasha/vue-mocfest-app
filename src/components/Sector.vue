<template>
  <div class="sector">
    <div class="sector-back" @click="closeSector">
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M30.1406 12.28L17.9206 24.03L30.1406 35.78" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
      </svg>
      Назад
    </div>
    <div class="sector-wrap" :class="sectorClass"  v-if="seats">
        <div class="sector-wrap__scroll">
          <div class="sector-content">
            <div class="sector__title">
              Сектор B1
            </div>
            <div class="sector-prices">
              <div class="sector-prices__item" v-for="(item, idx) in prices" :key="idx">
                <div class="sector-prices__color"
                  :style="{background: item.color}"
                ></div>
                <div class="sector-prices__price">{{item.price}}</div>
              </div>
            </div>
          </div>
          <div class="sector-main">
            <div class="row" v-for="(row, idx) in seats" :key="idx">
              <div class="seat" v-for="item in row" :key="item.number" 
              :style="{background: item.color}" :class="{selected: item.selected, reserved: item.is_booked}"
              @click="addToBasket(item)">
                <div class="seat-tooltip">
                  <span>Ряд {{item.row}}</span>, 
                  <span>Место {{item.number}}</span>, 
                  <span>Цена: {{item.price}}</span>
                  <div>{{item.is_booked ? 'Забронировано' :  'Свободно'}}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
    <div class="sector-loader" v-else>
        <div class="lds-ring"><div></div><div></div><div></div><div></div></div>
    </div>
    <div class="sector__btn" @click="hideBasket = !hideBasket">
      Купить места
    </div>
    <div class="sector-basket" :class="{'sector-basket-hide': hideBasket}">
      <div class="sector-basket__slide" @click="hideBasket = !hideBasket">
        <img src="../assets/images/icons/menu.svg" alt="ico">
        <div class="sector-basket__tooltip">Корзина</div>
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
          Ряд:{{item.row}} Место:{{item.seat}} Цена:{{item.price}}
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

    if(!this.seats) {
      this.$store.dispatch('loadSeats', this.id)
    }

    this.sectorClass = `sector-${this.id}`


  },
    props: {
        id: Number
    },
    data() {
        return {
            sectorClass: '',
            basket: [],
            hideBasket: true,
            prices: [
              {color: '#FF0000', price: '500K'},
              {color: '#FF8A00', price: '350K'},
              {color: '#FFC700', price: '300K'},
              {color: '#AFCB00', price: '250K'},
              {color: '#5BBB10', price: '200K'},
              {color: '#10B1BB', price: '150K'},
              {color: '#1073BB', price: '100K'},
            ]
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
          Object.values(this.seats).map(item => item.map(seat => seat['selected'] = false))
        },
        removeItem(i) {
          Object.values(this.seats).map(item => item.forEach(seat => {
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
        return this.$store.getters.getSector(this.id)?.seats.seats
      }

    }
}
</script>


<style>

</style>

