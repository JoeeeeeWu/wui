<script>
import TabBar from '../tabbar';

export default {
  name: 'md-tabs',
  components: {
    [TabBar.name]: TabBar,
  },
  props: {
    titles: {
      type: Array,
      default() {
        return [];
      },
    },
    showInkBar: {
      type: Boolean,
      default: true,
    },
    inkBarLength: {
      type: Number,
      default: 70,
      validator(length) {
        return length > 0 && length <= 100;
      },
    },
    inkBarAnimate: {
      type: Boolean,
      default: true,
    },
    defaultIndex: {
      type: Number,
      default: 0,
    },
    noslide: {
      type: Boolean,
      default: false,
    },
    upsideDown: {
      type: Boolean,
      default: false,
    },
    forceUseArray: {
      type: Boolean,
      default: undefined,
    },
  },
  data() {
    return {
      activeIndex: this.defaultIndex,
    };
  },
  watch: {
    activeIndex(val, preVal) {
      this.$emit('change', val, preVal);
      this.$emit('indexChanged', val, preVal);
    },
  },
  mounted() {
    this.selectTab(this.activeIndex);
  },
  methods: {
    // MARK: public methods
    selectTab(i) {
      const index = parseInt(i, 10);
      if (index >= 0 && index < this.titleList().length) {
        this.activeIndex = index;
      }
    },
    titleList() {
      if (this.titles && this.titles.length) {
        return this.titles;
      } else if (this.$slots.title && this.$slots.title.length) {
        return this.$slots.title.filter(el => el.tag);
      } else { // eslint-disable-line
        return [];
      }
    },
    contentList() {
      if (this.$slots.default) {
        return this.$slots.default.filter(el => el.tag);
      } else { // eslint-disable-line
        return [];
      }
    },
  },
  render(createElement) {
    const self = this;
    const titleBarRenderer = createElement(
      'md-tab-bar',
      {
        props: {
          titles: self.titles,
          defaultIndex: self.activeIndex,
          showInkBar: self.showInkBar,
          inkBarLength: self.inkBarLength,
          inkBarAnimate: self.inkBarAnimate,
          forceUseArray: self.forceUseArray,
        },
        class: {
          'on-bottom': self.upsideDown,
        },
        on: {
          indexChanged(i) {
            self.selectTab(i);
          },
        },
        scopedSlots: this.$scopedSlots,
      },
      this.$slots.title || [],
    );
    const contentRenderer = this.contentList().map((content, index) => { // eslint-disable-line
      return createElement(
        'div',
        {
          class: {
            'md-tab-content': true,
          },
          key: index,
          attrs: {
            key: index,
          },
        },
        [content],
      );
    });
    const contentWrapperRenderer = createElement(
      'div',
      {
        class: {
          'md-tab-content-wrapper': true,
        },
        style: {
          transform: self.noslide ? '' : `translateX(${-this.activeIndex * 100}%)`,
        },
      },
      [self.noslide ? contentRenderer[this.activeIndex] : contentRenderer],
    );
    return createElement(
      'div',
      {
        class: {
          'md-tabs': true,
        },
      },
      self.upsideDown ? [contentWrapperRenderer, titleBarRenderer] : [titleBarRenderer, contentWrapperRenderer], // eslint-disable-line
    );
  },
};
</script>
