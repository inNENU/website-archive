<template>
  <div class="card" @click="cardClick">
    <img class="img" :src="src" />
    <div class="detail">
      <div v-if="logo" class="icon-wrapper">
        <img class="logo" :src="logo" />
        <div class="name" v-text="name" />
      </div>
      <div class="title" v-text="title" />
      <div class="desc" v-text="desc" />
    </div>
  </div>
</template>

<script lang="ts">
import message from "%/message";
import { defineComponent } from "vue";

export default defineComponent({
  name: "MpCard",
  props: {
    src: { type: String, required: true },
    url: { type: String, required: true },
    name: { type: String, required: true },
    type: { type: String, default: "web" },
    desc: { type: String, default: "" },
    logo: { type: String, default: "" },
  },
  setup(props) {
    /** 点击卡片触发的操作 */
    const cardClick = (): void => {
      if (props.type === "web") window.open(props.url);
      else if (props.type === "page") message.warn("暂不支持");
    };

    return { cardClick };
  },
});
</script>

<style lang="scss">
@import "../style/hover";

.card {
  max-width: 517px;
  margin: 12px 15px;
  background-color: var(--block-bgcolor);
  border-radius: 8px;
  box-shadow: 1px 1px 2px 3px var(--card-shadow);

  text-align: left;
  overflow: hidden;

  @include hover;

  @media (min-width: 630px) {
    margin: 12px auto;
  }

  .img {
    width: 100%;
    height: 40vw;
    max-height: 220px;
  }

  .detail {
    margin: 0;
    padding: 12px 15px;

    .title {
      margin-bottom: 8px;
      font-size: 16px;
      font-weight: 500;

      @media (min-width: 480px) {
        margin-bottom: 10px;
        font-size: 20px;
      }
    }

    .desc {
      color: var(--dark-grey);
      font-size: 14px;
      line-height: 1.4;

      @media (min-width: 480px) {
        font-size: 18px;
      }
    }

    .icon-wrapper {
      display: flex;
      float: right;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      .logo {
        width: 28px;
        height: 28px;

        @media (min-width: 480px) {
          width: 40px;
          height: 40px;
        }
      }

      .name {
        margin: 2px auto;
        color: var(--grey);
        font-size: 12px;

        @media (min-width: 480px) {
          font-size: 16px;
        }
      }
    }
  }
}
</style>
