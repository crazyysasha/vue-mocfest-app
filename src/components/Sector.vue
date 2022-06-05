<template>
  <div class="sector">
    <div class="sector-back" @click="closeSector">
      <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22"><g fill="none" fill-rule="evenodd" stroke="#FFF" stroke-linecap="round" stroke-width="2.5"><path d="M0,0 L17.903818,17.903818" transform="translate(2 2)"/><path d="M2.77111667e-13,0 L17.903818,17.903818" transform="matrix(-1 0 0 1 19.904 2)"/></g></svg>
    </div>
    <div class="sector-wrap" :class="sectorClass"  v-if="seats">
        <div class="sector-wrap__scroll">
          <div class="sector-content">
            <div class="sector__title">
              {{ $t("seats.sector") }} {{this.id}}
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
                  <span>{{ $t("seats.info.row") }} {{item.row}}</span>,
                  <span>{{ $t("seats.info.number") }} {{item.number}}</span>,
                  <span>{{ $t("seats.info.price") }}: {{item.price}}</span>
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
    <div class="sector__btn" @click="hideBasket = !hideBasket" :class="{disabled: !basket.length}">
      {{ $t("seats.buy") }}
    </div>
    <div class="sector-basket" :class="{'sector-basket-hide': hideBasket}">
      <div class="sector-basket__slide" @click="hideBasket = !hideBasket">
        <img src="../assets/images/icons/basket.svg" alt="ico">
      </div>
      <div class="sector-basket__title">
        {{ $t("seats.basket") }}
      </div>
      <div class="sector-basket__list">
        <div class="sector-basket__empty" v-if="!basket.length">
          {{ $t("seats.empty") }}
        </div>
        <div class="sector-basket__item" v-for="(item, idx) in basket" :key="idx"
        :style="{background: item.color}">
          {{ $t("seats.info.row") }}:{{item.row}} {{ $t("seats.info.number") }}:{{item.number}} {{ $t("seats.info.price") }}:{{ formatPrice(item.price) }}
          <span class="delete" @click="removeItem(idx)">-</span>
        </div>
      </div>
      <div class="sector-basket__total">
        {{ $t("seats.total") }}: {{totalPrice}}
      </div>
      <div class="sector-basket__buy" @click="book" :class="{disabled: !basket.length}">
        {{ $t("seats.buy") }}
      </div>
    </div>
  </div>
</template>

<script>
import { bookSeat} from "@/api/seats";

export default {
    name: 'sector-component',
    props: {
        id: String,
        prices: Array,
    },
    data() {
        return {
            sectorClass: '',
            basket: [],
            hideBasket: true,
        };
    },
    created() {
      if(!this.seats) {
        this.$store.dispatch('loadSeats', this.id)
      }

      this.sectorClass = `sector-${this.id}`

      this.basket = this.basketStore
    },
    methods: {
        formatPrice(price) {
          return price / 1000 + 'K'
        },
        closeSector() {
            this.$emit("closeSector");
        },
        addToBasket(item) {
          if (item['is_booked']) {
            return
          }

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
        },
        book() {
          this.$store.dispatch('addBasket', this.basket)

          bookSeat(this.basket)
                .then(res => {
                  this.$emit('seatOrdered', res.data)
              })
              .catch(({response}) => {
                  alert(response.data.error)
              })
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
      },

      basketStore() {
        return this.$store.getters.getBasket
      }
    }
}
</script>

